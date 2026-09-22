import React from "react";
import { DATA } from "../data/data";

function Skills(){
  return(
    <section id="skills" className="py-24" style={{background:'rgba(255,255,255,0.015)'}}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <p className="text-sm font-semibold mb-2" style={{color:'var(--accent)'}}>What I Know</p>
          <h2 className="font-display text-4xl font-bold text-white mb-3">Technical Skills</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {DATA.skills.map(s=>(
            <div key={s.cat} className="p-6 rounded-2xl" style={{background:'var(--surface)',border:'1px solid var(--border)'}}>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xl">{s.icon}</span>
                <h3 className="font-semibold text-white">{s.cat}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {s.items.map(item=>(
                  <span key={item} className="skill-pill text-xs px-2.5 py-1.5 rounded-lg" style={{background:'rgba(255,255,255,0.04)',border:'1px solid var(--border)',color:'var(--muted)'}}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
