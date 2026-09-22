import { useState, useEffect } from "react";
import { DATA } from "../data/data";

function Navbar(){
  const [scrolled,setScrolled]=useState(false);
  const [open,setOpen]=useState(false);
  useEffect(()=>{
    const fn=()=>setScrolled(window.scrollY>30);
    window.addEventListener('scroll',fn);
    return ()=>window.removeEventListener('scroll',fn);
  },[]);
  const links=[{l:"Projects",h:"#projects"},{l:"Skills",h:"#skills"},{l:"About",h:"#about"},{l:"Contact",h:"#contact"}];
  return(
    <>
    <nav style={{background:scrolled?'rgba(8,8,16,0.96)':'transparent',backdropFilter:scrolled?'blur(16px)':'none',borderBottom:scrolled?'1px solid var(--border)':'none',transition:'all 0.3s'}} className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <a href="#hero" className="font-display text-xl font-bold text-white">BSR<span style={{color:'var(--accent)'}}>.</span></a>
        <div className="hidden md:flex items-center gap-8">
          {links.map(l=><a key={l.l} href={l.h} className="nav-link text-sm font-medium" style={{color:'var(--muted)',transition:'color 0.2s'}} onMouseEnter={e=>e.target.style.color='var(--text)'} onMouseLeave={e=>e.target.style.color='var(--muted)'}>{l.l}</a>)}
        </div>
        <div className="hidden md:flex gap-3">
          <a href={DATA.personal.github} target="_blank" className="text-sm font-medium px-4 py-2 rounded-full" style={{border:'1px solid var(--border)',color:'var(--muted)',transition:'all 0.2s'}} onMouseEnter={e=>{e.target.style.borderColor='var(--accent)';e.target.style.color='var(--text)'}} onMouseLeave={e=>{e.target.style.borderColor='var(--border)';e.target.style.color='var(--muted)'}}>GitHub</a>
          <a href={`mailto:${DATA.personal.email}`} className="text-sm font-medium px-4 py-2 rounded-full text-white" style={{background:'var(--accent)'}}>Hire Me</a>
        </div>
        <button className="md:hidden text-white text-xl" onClick={()=>setOpen(!open)}>{open?'✕':'☰'}</button>
      </div>
    </nav>
    {open&&(
      <div className="fixed inset-0 z-40 flex flex-col pt-20 px-6" style={{background:'rgba(8,8,16,0.98)',backdropFilter:'blur(20px)'}}>
        {links.map(l=><a key={l.l} href={l.h} onClick={()=>setOpen(false)} className="py-4 text-lg font-medium border-b" style={{color:'var(--text)',borderColor:'var(--border)'}}>{l.l}</a>)}
        <div className="flex gap-3 mt-6">
          <a href={DATA.personal.github} target="_blank" className="flex-1 text-center py-3 rounded-xl text-sm font-medium" style={{border:'1px solid var(--border)',color:'var(--text)'}}>GitHub</a>
          <a href={`mailto:${DATA.personal.email}`} className="flex-1 text-center py-3 rounded-xl text-sm font-medium text-white" style={{background:'var(--accent)'}}>Hire Me</a>
        </div>
      </div>
    )}
    </>
  );
}

export default Navbar;
