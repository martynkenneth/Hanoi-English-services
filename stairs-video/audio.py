# Soundtrack for the catch-up paradox: pad + a soft step per year + bells every 10 years + birth chimes + departure swells.
import numpy as np, wave, sys
SR=44100; DUR=46.0; N=int(SR*DUR); rng=np.random.default_rng(21)
t=np.arange(N)/SR; L=np.zeros(N); Rr=np.zeros(N)
sm=lambda x:(lambda c:c*c*(3-2*c))(np.clip(x,0,1))
YKF=[(0,0),(3.5,0),(8.5,10),(12,20),(15,30),(18.5,42),(21.5,54),(24.5,56),(27.5,66),(30,76),(31.8,84),(33.2,86),(35.5,100),(37.5,114),(38.5,115),(40,130),(42,150),(46,152)]
def tY(y):
    for (t0,y0),(t1,y1) in zip(YKF,YKF[1:]):
        if y0<=y<=y1 and y1>y0: return t0+(t1-t0)*(y-y0)/(y1-y0)
    return DUR
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
pad([A,A*2],0,DUR,.10); pad([A*3,A*4*1.1892],0,DUR,.045,4); pad([A*3*1.5,A*5],8,DUR,.035,4)
pad([A*6,A*7.5,A*9],20,DUR,.03,4)
pad([A*5*1.26,A*8*1.26],39.5,DUR,.035,1.5)      # final lift (C#): hope, not sorrow
pent=[0,3,5,7,10]; hz=lambda i:220*2**((pent[i%5]+12*(i//5))/12)
def bell(t0,f,amp,dur=1.8,pan=0):
    n=int(SR*dur); x=np.arange(n)/SR
    s=(np.sin(2*np.pi*f*x)*np.exp(-x/(dur*.45))+.45*np.sin(2*np.pi*2.01*f*x)*np.exp(-x/(dur*.22))+.18*np.sin(2*np.pi*3.97*f*x)*np.exp(-x/(dur*.12)))
    add(s*np.minimum(1,x/.004)*amp,t0,pan=pan)
# a soft step each year
for y in range(1,152):
    t0=tY(y)
    if y%10==0:
        bell(t0,hz(4+(y//10)%8),.17,1.6,pan=np.sin(y)*.4)
    else:
        n=int(SR*.22); x=np.arange(n)/SR; f=hz(y%5)*.5
        add(np.sin(2*np.pi*f*x)*np.exp(-x/.07)*.05+np.sin(2*np.pi*f*2*x)*np.exp(-x/.04)*.02,t0,pan=np.sin(y*2.3)*.4)
def chime(t0,fs,amp=.16,dec=1.6):
    for j,f in enumerate(fs):
        n=int(SR*3); x=np.arange(n)/SR; add(np.sin(2*np.pi*f*x)*np.exp(-x/dec)*np.minimum(1,x/.01)*amp,t0+j*.07,pan=(j-1)*.3)
for j in range(1,6): chime(tY(30*j),[A*8,A*12,A*16],.17,1.5)       # births
for y in (84,114,144):                                              # departures (parent leaves at age 84)
    t0=tY(y); n=int(SR*3.5); x=np.arange(n)/SR
    add(np.sin(2*np.pi*A*x)*np.exp(-x/1.6)*.22*np.minimum(1,x/.2),t0)
    add(np.sin(2*np.pi*A*3*x)*np.exp(-x/1.3)*.10,t0)
    for k,f in enumerate((A*8,A*6,A*4.5)): bell(t0+.15+k*.35,f,.13,2.2)
    n=int(SR*3); x=np.arange(n)/SR; add(np.sin(2*np.pi*(52+22*np.exp(-x*6))*x)*np.exp(-x/1.1)*.3,t0)
# the first departure is the big one: add a long riser of light going up
def riser(t0,t1,f0,f1,amp):
    i0,i1=int(t0*SR),int(t1*SR); m=i1-i0; x=np.linspace(0,1,m); ph=np.cumsum(2*np.pi*(f0+(f1-f0)*x**2)/SR)
    s=np.sin(ph)*np.sin(np.pi*x)*amp; L[i0:i1]+=s; Rr[i0:i1]+=s
riser(21.5,24.8,300,1600,.07)
chime(39.5,[A*8,A*10*1.0,A*12,A*16*1.26],.2,3.0)
n=int(SR*5); x=np.arange(n)/SR; add(np.sin(2*np.pi*(55+25*np.exp(-x*5))*x)*np.exp(-x/1.6)*.4,39.5)
for c in (.3,4.0,8.5,13.2,18.0,21.6,24.6,29.8,35.2,39.5):
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
print('ok')
