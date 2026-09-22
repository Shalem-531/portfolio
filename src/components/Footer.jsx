import React from "react";
import { DATA } from "../data/data";

function Footer(){
  return(
    <footer className="py-10" style={{borderTop:'1px solid var(--border)'}}>
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <p className="font-display text-lg font-bold text-white">Badugu Shalem Raju</p>
          <p className="text-xs mt-0.5" style={{color:'var(--muted)'}}>Full Stack Developer · Open to Work</p>
        </div>
        <div className="flex gap-6">
          {[
            {l:'GitHub',h:DATA.personal.github},
            {l:'LinkedIn',h:DATA.personal.linkedin},
            {l:'Email',h:`mailto:${DATA.personal.email}`},
          ].map(item=>(
            <a key={item.l} href={item.h} target={item.h.startsWith('http')?'_blank':''} className="text-sm" style={{color:'var(--muted)',transition:'color 0.2s'}} onMouseEnter={e=>e.target.style.color='var(--text)'} onMouseLeave={e=>e.target.style.color='var(--muted)'}>{item.l}</a>
          ))}
        </div>
        <p className="text-xs" style={{color:'var(--muted)'}}>© 2026 Badugu Shalem Raju</p>
      </div>
    </footer>
  );
}

export default Footer;
