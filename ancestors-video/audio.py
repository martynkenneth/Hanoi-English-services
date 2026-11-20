# Synthesises the soundtrack: dark ambient pad + one bell per generation + web-phase swell. numpy only.
import numpy as np, wave, sys
SR=44100; S=1.7/1.05; SH=1.5; DUR=(25.2-SH)*S; N=int(SR*DUR); rng=np.random.default_rng(5)
t=np.arange(N)/SR
L=np.zeros(N); Rr=np.zeros(N)
sm=lambda x:(lambda c:c*c*(3-2*c))(np.clip(x,0,1))
KF=[(0,1),(1.9,1),(2.6,2),(3.6,3),(4.6,4),(5.6,5),(6.6,7),(7.6,9),(8.6,13),(9.6,18),(10.6,22),(11.4,24),(12.4,26),(13.4,28)]
def g(tt):
    for (t0,g0),(t1,g1) in zip(KF,KF[1:]):
        if tt<t1: return g0+(g1-g0)*float(sm((tt-t0)/(t1-t0)))
    return 28
# time each generation k is reached
cross={}
for ms in range(0,15000):
    tt=ms/1000; gg=int(g(tt))
    for k in range(1,gg+1): cross.setdefault(k,tt*S)
def add(sig,t0,pan=0.0,gain=1.0):
    i=int(t0*SR); n=min(len(sig),N-i)
    if n<=0: return
    l=np.sqrt((1-pan)/2)*2**.5/2*2; r=np.sqrt((1+pan)/2)*2**.5/2*2
    L[i:i+n]+=sig[:n]*gain*l*0.7071*1.4142/1.4142; Rr[i:i+n]+=sig[:n]*gain*r*0.7071
def env(n,dec): x=np.arange(n)/SR; return np.exp(-x/dec)
# --- pad: A minor drone, slowly opening
def pad(freqs,t0,t1,amp,fade=2.0):
    i0,i1=int(t0*SR),min(N,int(t1*SR)); tt=t[i0:i1]; a=np.minimum(1,(tt-t0)/fade)*np.minimum(1,(t1-tt)/fade)
    for f in freqs:
        for det,pn in ((-.12,-.5),(.0,0),(.12,.5)):
            ph=rng.uniform(0,6.28); lfo=1+.25*np.sin(2*np.pi*(.07+rng.uniform(0,.08))*tt+ph)
            sig=(np.sin(2*np.pi*f*(1+det*.01)*tt+ph)+.3*np.sin(2*np.pi*2*f*tt+ph*2))*a*lfo*amp/3
            L[i0:i1]+=sig*(1-pn)/2*1.2; Rr[i0:i1]+=sig*(1+pn)/2*1.2
A=55.0
pad([A,A*2],0,DUR,.10,3.0)                    # low A
pad([A*3,A*4*1.1892/1.0],0,DUR,.045,4.0)       # C/E colour (A minor)
pad([A*3*1.5,A*5],4*S,16*S,.035,4.0)               # fifth opens up
pad([A*6,A*7.5,A*9],12.5*S,DUR,.03,4.0)          # shimmer for the reveal
# sub swell and fade of the old tree at 14-17
sub=np.sin(2*np.pi*36*t)*sm((t-13*S)/(3*S))*(1-sm((t-(16-SH)*S)/(2.5*S)))*.12; L+=sub; Rr+=sub
# --- one bell per generation
pent=[0,3,5,7,10]
def hz(idx): return 220*2**((pent[idx%5]+12*(idx//5))/12)
for k,t0 in sorted(cross.items()):
    idx=k-1 if k<=10 else 10+int((k-10)*.45)
    idx=min(idx,19); f=hz(idx)
    dur=1.8 if k<8 else (.9 if k<20 else .5)
    n=int(SR*dur); x=np.arange(n)/SR
    amp=.34 if k<8 else (.24 if k<20 else .16)
    s=(np.sin(2*np.pi*f*x)*np.exp(-x/(dur*.45))+.45*np.sin(2*np.pi*2.01*f*x)*np.exp(-x/(dur*.22))+.18*np.sin(2*np.pi*3.97*f*x)*np.exp(-x/(dur*.12)))
    s*=np.minimum(1,x/.004)*amp
    add(s,t0,pan=np.sin(k*1.7)*.5)
    if k<=6:                                   # soft low thump early on
        th=np.sin(2*np.pi*(62+40*np.exp(-x*18))*x)*np.exp(-x/.25)*.38; add(th,t0)
    if k==1: add(np.sin(2*np.pi*110*x)*np.exp(-x/1.5)*.3,t0)
# --- phase 2: pulse whoosh + apex flare + sparkles
def noise_sweep(t0,t1,f0,f1,amp):
    i0,i1=int(t0*SR),int(t1*SR); n=i1-i0; x=np.linspace(0,1,n)
    w=rng.standard_normal(n); f=f0+(f1-f0)*x; ph=np.cumsum(2*np.pi*f/SR)
    s=w*(.5+.5*np.sin(ph))*np.sin(np.pi*x)**2*amp
    # crude low-pass
    k=np.ones(24)/24; s=np.convolve(s,k,'same'); L[i0:i1]+=s; Rr[i0:i1]+=s
noise_sweep((18.6-SH)*S,(21.4-SH)*S,300,90,.9)
for f,a in ((A*8,.16),(A*12,.12),(A*16,.08)):   # apex flare chord at 19.8
    n=int(SR*3); x=np.arange(n)/SR; s=np.sin(2*np.pi*f*x)*np.exp(-x/1.2)*np.minimum(1,x/.05)*a; add(s,(18.8-SH)*S,pan=0)
n=int(SR*3); x=np.arange(n)/SR; add(np.sin(2*np.pi*45*x)*np.exp(-x/1.4)*.4,(21.1-SH)*S)  # landing boom at YOU
for i in range(22):                                # sparkle chimes after the pulse lands
    t0=(21.3-SH)*S+i*.1+rng.uniform(0,.07); f=hz(10+int(rng.integers(0,8)))*2
    n=int(SR*1.0); x=np.arange(n)/SR; add(np.sin(2*np.pi*f*x)*np.exp(-x/.25)*.07,t0,pan=rng.uniform(-.8,.8))
# --- reverb
def reverb(x,seed,mix=.38):
    r=np.random.default_rng(seed); n=int(SR*3.2); ir=r.standard_normal(n)*np.exp(-np.arange(n)/SR/0.9); ir[:int(SR*.02)]=0
    M=1<<int(np.ceil(np.log2(len(x)+n))); y=np.fft.irfft(np.fft.rfft(x,M)*np.fft.rfft(ir,M),M)[:len(x)]
    y*=np.max(np.abs(x))/(np.max(np.abs(y))+1e-9)*.9
    return x*(1-mix*.5)+y*mix
L=reverb(L,1); Rr=reverb(Rr,2)
fade=np.minimum(1,t/.4)*np.minimum(1,(DUR-t)/1.5); L*=fade; Rr*=fade
m=max(np.abs(L).max(),np.abs(Rr).max()); L=L/m*.85; Rr=Rr/m*.85
out=np.stack([L,Rr],1); pcm=(out*32767).astype('<i2')
with wave.open(sys.argv[1],'wb') as w: w.setnchannels(2); w.setsampwidth(2); w.setframerate(SR); w.writeframes(pcm.tobytes())
print('levels',len(cross),'ok')
