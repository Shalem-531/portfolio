import React from "react";
import { DATA } from "../data/data";

function Projects(){
  return(
    <section id="projects" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <p className="text-sm font-semibold mb-2" style={{color:'var(--accent)'}}>What I've Built</p>
          <h2 className="font-display text-4xl font-bold text-white mb-3">Featured Projects</h2>
          <p className="text-base max-w-lg" style={{color:'var(--muted)'}}>My projects are live and deployed — built end-to-end, solo, from scratch.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DATA.projects.map(p=>(
            <div key={p.id} className="project-card rounded-2xl overflow-hidden" style={{background:'var(--surface)',border:'1px solid var(--border)'}}>
              {/* Image */}
              <div className="relative overflow-hidden" style={{height:'220px'}}>
                <img src={p.image} alt={p.title} className="w-full h-full object-cover"
                  onError={e=>{e.target.style.display='none';e.target.nextSibling.style.display='flex';}}/>
                <div className="img-ph w-full h-full" style={{display:'none'}}>
                  <span style={{fontSize:'32px'}}>🖼️</span>
                  <span style={{fontSize:'13px',color:'var(--muted)'}}>Upload project screenshot</span>
                  <span style={{fontSize:'11px',color:'var(--muted)',opacity:0.6}}>public/{p.image}</span>
                </div>
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-bold text-white" style={{background:'rgba(108,99,255,0.9)'}}>{p.badge}</div>
                <div className="absolute top-3 right-3 text-xs px-2.5 py-1 rounded-full" style={{background:'rgba(0,0,0,0.65)',backdropFilter:'blur(8px)',color:'var(--muted)'}}>{p.category}</div>
              </div>
              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-white mb-1">{p.title}</h3>
                <p className="text-sm mb-3" style={{color:'var(--accent)'}}>{p.subtitle}</p>
                <p className="text-sm leading-relaxed mb-4" style={{color:'var(--muted)'}}>{p.description}</p>
                <ul className="space-y-1.5 mb-5">
                  {p.highlights.map((h,i)=>(
                    <li key={i} className="flex items-start gap-2 text-sm" style={{color:'var(--muted)'}}>
                      <span style={{color:'var(--accent2)',marginTop:'2px',flexShrink:0}}>▹</span>{h}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {p.tech.map(t=>(
                    <span key={t} className="skill-pill text-xs px-2.5 py-1 rounded-md" style={{background:'rgba(255,255,255,0.04)',border:'1px solid var(--border)',color:'var(--muted)'}}>{t}</span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a href={p.live} target="_blank" className="flex-1 text-center py-2.5 rounded-xl text-sm font-semibold text-white" style={{background:'var(--accent)',transition:'opacity 0.2s'}} onMouseEnter={e=>e.target.style.opacity='0.85'} onMouseLeave={e=>e.target.style.opacity='1'}>Live Demo →</a>
                  <a href={p.github} target="_blank" className="flex-1 text-center py-2.5 rounded-xl text-sm font-semibold" style={{border:'1px solid var(--border)',color:'var(--text)',transition:'border-color 0.2s'}} onMouseEnter={e=>e.target.style.borderColor='var(--accent)'} onMouseLeave={e=>e.target.style.borderColor='var(--border)'}>GitHub →</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
