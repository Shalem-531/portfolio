import { useState, useEffect } from "react";
import { DATA } from "../data/data";

function Hero(){
  const [typed,setTyped]=useState('');
  const roles=['Full Stack Developer','React.js Developer','Node.js Developer','MERN Stack Developer','AI Integration Developer'];
  const [ri,setRi]=useState(0);
  const [ci,setCi]=useState(0);
  const [del,setDel]=useState(false);
  useEffect(()=>{
    const cur=roles[ri];
    const t=setTimeout(()=>{
      if(!del){
        setTyped(cur.slice(0,ci+1));
        if(ci+1===cur.length)setTimeout(()=>setDel(true),1800);
        else setCi(c=>c+1);
      }else{
        setTyped(cur.slice(0,ci-1));
        if(ci-1===0){setDel(false);setRi(r=>(r+1)%roles.length);setCi(0);}
        else setCi(c=>c-1);
      }
    },del?45:90);
    return()=>clearTimeout(t);
  },[ci,del,ri]);

  return(
    <section id="hero" className="relative min-h-screen flex flex-col justify-center pt-20" style={{background:'radial-gradient(ellipse 80% 60% at 50% 0%,rgba(108,99,255,0.13) 0%,transparent 70%)'}}>
      <div className="absolute inset-0" style={{backgroundImage:'linear-gradient(rgba(108,99,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(108,99,255,0.04) 1px,transparent 1px)',backgroundSize:'60px 60px'}}/>
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            {DATA.personal.available&&(
              <div className="fade-up inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6" style={{background:'rgba(0,212,170,0.1)',border:'1px solid rgba(0,212,170,0.25)',color:'#00d4aa'}}>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"/>
                Available — Internship & Full-Time
              </div>
            )}
            <h1 className="fade-up-1 font-display font-bold text-white leading-none mb-3" style={{fontSize:'clamp(2.4rem,5.5vw,3.8rem)'}}>
              Badugu <span className="gradient-text">Shalem Raju</span>
            </h1>
            <div className="fade-up-2 flex items-center gap-2 mb-5" style={{minHeight:'2rem'}}>
              <span className="text-lg font-medium" style={{color:'var(--muted)'}}>{typed}</span>
              <span className="cursor text-xl font-bold" style={{color:'var(--accent)'}}>|</span>
            </div>
            <p className="fade-up-3 text-base leading-relaxed mb-8 max-w-md" style={{color:'var(--muted)'}}>
              B.Tech CSE graduate (2026) building real-world full-stack applications with React.js, Node.js, MongoDB, and AI integration. 3 live deployed projects · Open to work.
            </p>
            <div className="fade-up-4 flex flex-wrap gap-3 mb-8">
              <a href="#projects" className="px-6 py-3 rounded-full font-semibold text-sm text-white" style={{background:'var(--accent)'}}>View Projects</a>
              <a href={DATA.personal.github} target="_blank" className="px-6 py-3 rounded-full font-semibold text-sm" style={{border:'1px solid var(--border)',color:'var(--text)',transition:'border-color 0.2s'}} onMouseEnter={e=>e.target.style.borderColor='var(--accent)'} onMouseLeave={e=>e.target.style.borderColor='var(--border)'}>GitHub</a>
              <a href={`mailto:${DATA.personal.email}`} className="px-6 py-3 rounded-full font-semibold text-sm" style={{border:'1px solid var(--border)',color:'var(--text)',transition:'border-color 0.2s'}} onMouseEnter={e=>e.target.style.borderColor='var(--accent2)'} onMouseLeave={e=>e.target.style.borderColor='var(--border)'}>Email Me</a>
            </div>
            <div className="fade-up-4 grid grid-cols-4 gap-3">
              {DATA.personal.stats.map(s=>(
                <div key={s.label} className="text-center p-3 rounded-xl" style={{background:'rgba(255,255,255,0.03)',border:'1px solid var(--border)'}}>
                  <div className="font-display font-bold text-xl gradient-text">{s.value}</div>
                  <div className="text-xs mt-0.5" style={{color:'var(--muted)'}}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          {/* Right — Photo */}
          <div className="hidden md:flex justify-center">
            <div className="relative">
              <div className="w-72 h-80 rounded-2xl overflow-hidden" style={{border:'1px solid var(--border)',boxShadow:'0 0 80px rgba(108,99,255,0.2)'}}>
                <img src={DATA.personal.photo} alt="Badugu Shalem Raju" className="w-full h-full object-cover profile-photo"
                  onError={e=>{e.target.style.display='none';e.target.nextSibling.style.display='flex';}}/>
                <div className="avatar-ph w-full h-full" style={{display:'none'}}>
                  <span style={{fontSize:'52px'}}>👤</span>
                  <span style={{fontSize:'13px',color:'var(--muted)'}}>Add your photo</span>
                  <span style={{fontSize:'11px',color:'var(--muted)',opacity:0.6}}>public/images/shalem.jpg</span>
                </div>
              </div>
              <div className="absolute -top-3 -right-3 px-3 py-1.5 rounded-full text-xs font-bold text-white" style={{background:'var(--accent)'}}>Full Stack</div>
              <div className="absolute -bottom-3 -left-3 px-3 py-1.5 rounded-full text-xs font-bold" style={{background:'rgba(0,212,170,0.15)',border:'1px solid rgba(0,212,170,0.3)',color:'#00d4aa'}}>🤖 AI Integration</div>
            </div>
          </div>
        </div>
      </div>
      {/* Ticker */}
      <div className="relative z-10 mt-16 overflow-hidden py-4" style={{borderTop:'1px solid var(--border)',borderBottom:'1px solid var(--border)',background:'rgba(255,255,255,0.02)'}}>
        <div className="ticker-inner">
          {[...DATA.ticker,...DATA.ticker].map((t,i)=>(
            <span key={i} className="text-sm font-medium flex items-center gap-2" style={{color:'var(--muted)'}}>
              <span style={{color:'var(--accent)',fontSize:'14px'}}>⬡</span> {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
