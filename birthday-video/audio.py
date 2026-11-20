# Soundtrack for the birthday paradox: ambient pad + a bell per person + shimmer per new line bundle + milestone chimes.
import numpy as np, wave, sys
SR=44100; DUR=44.0; N=int(SR*DUR); rng=np.random.default_rng(9)
t=np.arange(N)/SR; L=np.zeros(N); Rr=np.zeros(N)
sm=lambda x:(lambda c:c*c*(3-2*c))(np.clip(x,0,1))
NKF=[(0,1),(3.2,1),(4.2,2),(6.6,3),(7.6,4),(8.5,5),(9.3,6),(10,8),(10.8,10),(13.2,15),(16.2,20),(18.4,22),(19.4,23),(23.4,23),(27,35),(30,50),(33,62),(35.8,70)]
def n_at(tt):
    for (t0,n0),(t1,n1) in zip(NKF,NKF[1:]):
        if tt<t1: return n0+(n1-n0)*(tt-t0)/(t1-t0)
    return 70
cross={}
for ms in range(0,38000):
    tt=ms/1000; nn=int(n_at(tt))
    for k in range(2,nn+1): cross.setdefault(k,tt)
def add(sig,t0,pan=0.0,gain=1.0):
    i=int(t0*SR); n=min(len(sig),N-i)
    if n<=0: return
    l=np.sqrt((1-pan)/2); r=np.sqrt((1+pan)/2)
    L[i:i+n]+=sig[:n]*gain*l; Rr[i:i+n]+=sig[:n]*gain*r
def pad(freqs,t0,t1,amp,fade=3.0):
    i0,i1=int(t0*SR),min(N,int(t1*SR)); tt=t[i0:i1]; a=np.minimum(1,(tt-t0)/fade)*np.minimum(1,(t1-tt)/fade)
    for f in freqs:
        for det,pn in ((-.12,-.5),(0,0),(.12,.5)):
            ph=rng.uniform(0,6.28); lfo=1+.25*np.sin(2*np.pi*(.07+rng.uniform(0,.08))*tt+ph)
            s=(np.sin(2*np.pi*f*(1+det*.01)*tt+ph)+.3*np.sin(2*np.pi*2*f*tt+ph*2))*a*lfo*amp/3
            L[i0:i1]+=s*(1-pn)/2*1.2; Rr[i0:i1]+=s*(1+pn)/2*1.2
A=55.0
pad([A,A*2],0,DUR,.10); pad([A*3,A*4*1.1892],0,DUR,.045,4)
pad([A*3*1.5,A*5],6,DUR,.035,4); pad([A*6,A*7.5,A*9],17,DUR,.03,4); pad([A*8,A*10,A*12],35,DUR,.03,2)
# swell into the match, then settle
sub=np.sin(2*np.pi*36*t)*sm((t-14)/5)*(1-sm((t-21)/4))*.12; L+=sub; Rr+=sub
pent=[0,3,5,7,10]
hz=lambda i:220*2**((pent[i%5]+12*(i//5))/12)
# YOU
n=int(SR*2.5); x=np.arange(n)/SR; add(np.sin(2*np.pi*110*x)*np.exp(-x/1.5)*.3,.5); add(np.sin(2*np.pi*220*x)*np.exp(-x/1.2)*.2,.5)
for k,t0 in sorted(cross.items()):
    idx=min(k-2,6)+int(max(0,k-8)*.28); idx=min(idx,19); f=hz(idx)
    dur=1.8 if k<8 else (1.0 if k<24 else .45)
    n=int(SR*dur); x=np.arange(n)/SR; amp=.32 if k<8 else (.22 if k<24 else .12)
    s=(np.sin(2*np.pi*f*x)*np.exp(-x/(dur*.45))+.45*np.sin(2*np.pi*2.01*f*x)*np.exp(-x/(dur*.22))+.18*np.sin(2*np.pi*3.97*f*x)*np.exp(-x/(dur*.12)))
    add(s*np.minimum(1,x/.004)*amp,t0,pan=np.sin(k*1.9)*.55)
    if k<=6: add(np.sin(2*np.pi*(62+40*np.exp(-x*18))*x)*np.exp(-x/.25)*.34,t0)
    # line-bundle shimmer: short bright noise, louder as there are more new lines
    m=int(SR*.16); w=rng.standard_normal(m); w=np.diff(np.concatenate([[0],w])); w*=np.exp(-np.arange(m)/SR/.05)
    add(w*.05*min(k,40)/40,t0,pan=rng.uniform(-.6,.6))
def riser(t0,t1,f0,f1,amp):
    i0,i1=int(t0*SR),int(t1*SR); m=i1-i0; x=np.linspace(0,1,m); ph=np.cumsum(2*np.pi*(f0+(f1-f0)*x**2)/SR)
    s=np.sin(ph)*x**2*amp; L[i0:i1]+=s; Rr[i0:i1]+=s
def chime(t0,fs,amp=.16,dec=1.4):
    for j,f in enumerate(fs):
        n=int(SR*3); x=np.arange(n)/SR; add(np.sin(2*np.pi*f*x)*np.exp(-x/dec)*np.minimum(1,x/.01)*amp,t0+j*.06,pan=(j-1)*.3)
riser(16.4,19.35,200,1400,.12)
chime(19.4,[A*8,A*12,A*16,A*20],.2,2.0)                         # the match
n=int(SR*3); x=np.arange(n)/SR; add(np.sin(2*np.pi*(55+30*np.exp(-x*6))*x)*np.exp(-x/1.2)*.5,19.4)
for tm in (28.2,31.75): chime(tm,[hz(9),hz(12),hz(14)],.1,1.0)   # 90%, 99%
chime(35.8,[A*8,A*10,A*12,A*16],.17,2.6)                          # 99.9%
n=int(SR*4); x=np.arange(n)/SR; add(np.sin(2*np.pi*45*x)*np.exp(-x/1.6)*.4,35.8)
# caption ticks (very quiet) for sync
for c in (.3,3.7,6.6,11.8,17.3,19.5,23.6,27.8,33.8,37.0):
    n=int(SR*.08); x=np.arange(n)/SR; add(np.sin(2*np.pi*1800*x)*np.exp(-x/.02)*.03,c)
def reverb(x,seed,mix=.38):
    r=np.random.default_rng(seed); n=int(SR*3.2); ir=r.standard_normal(n)*np.exp(-np.arange(n)/SR/.9); ir[:int(SR*.02)]=0
    M=1<<int(np.ceil(np.log2(len(x)+n))); y=np.fft.irfft(np.fft.rfft(x,M)*np.fft.rfft(ir,M),M)[:len(x)]
    y*=np.max(np.abs(x))/(np.max(np.abs(y))+1e-9)*.9
    return x*(1-mix*.5)+y*mix
L=reverb(L,1); Rr=reverb(Rr,2)
fade=np.minimum(1,t/.4)*np.minimum(1,(DUR-t)/2.0); L*=fade; Rr*=fade
m=max(np.abs(L).max(),np.abs(Rr).max()); out=np.stack([L,Rr],1)/m*.85
with wave.open(sys.argv[1],'wb') as w: w.setnchannels(2); w.setsampwidth(2); w.setframerate(SR); w.writeframes((out*32767).astype('<i2').tobytes())
print('ok',len(cross))
