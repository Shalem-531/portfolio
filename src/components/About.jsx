import React from "react";
import { DATA } from "../data/data";

function About(){
  return(
    <section id="about" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <p className="text-sm font-semibold mb-2" style={{color:'var(--accent)'}}>Background</p>
          <h2 className="font-display text-4xl font-bold text-white mb-3">About Me</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-base leading-relaxed mb-4" style={{color:'var(--muted)'}}>I'm a B.Tech Computer Science graduate (2026) from Ongole, Andhra Pradesh. Over the past year I've been building and shipping full-stack web applications — not just following tutorials, but solving real problems end to end.</p>
            <p className="text-base leading-relaxed mb-4" style={{color:'var(--muted)'}}>My most recent project, <span className="text-white font-semibold">Local Service Hub</span>, integrates Google Gemini AI to automatically match customer problems to services. It has three different user roles, a category approval workflow, and a full booking system — all built solo from scratch.</p>
            <p className="text-base leading-relaxed mb-8" style={{color:'var(--muted)'}}>I completed a virtual internship at <span className="text-white font-semibold">EduSkills Foundation (AICTE)</span> and hold certifications in Full Stack MERN and AWS Cloud (Grade O — Outstanding). I'm actively looking for internship or entry-level Software Developer roles.</p>
            <div className="grid grid-cols-2 gap-3">
              {[
                {l:'Name',v:'Badugu Shalem Raju'},{l:'Degree',v:'B.Tech CSE 2026'},
                {l:'CGPA',v:'7.8 / 10'},{l:'Location',v:'Ongole, AP'},
                {l:'Email',v:'shalembadugu@gmail.com'},{l:'Status',v:'Open to Work 🟢'},
              ].map(item=>(
                <div key={item.l} className="p-3 rounded-xl" style={{background:'rgba(255,255,255,0.03)',border:'1px solid var(--border)'}}>
                  <p className="text-xs mb-1" style={{color:'var(--muted)'}}>{item.l}</p>
                  <p className="text-sm font-semibold text-white">{item.v}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-5">
            {/* Experience */}
            <div className="p-6 rounded-2xl" style={{background:'var(--surface)',border:'1px solid var(--border)'}}>
              <h4 className="font-semibold text-white mb-4 flex items-center gap-2">💼 Experience</h4>
              {DATA.experience.map(e=>(
                <div key={e.role}>
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <p className="font-semibold text-white text-sm">{e.role}</p>
                      <p className="text-xs mt-0.5" style={{color:'var(--accent)'}}>{e.company} — {e.type}</p>
                    </div>
                    <span className="text-xs ml-2 flex-shrink-0 px-2 py-1 rounded-lg" style={{background:'rgba(108,99,255,0.1)',color:'var(--accent)'}}>{e.period}</span>
                  </div>
                  <ul className="space-y-1.5">
                    {e.points.map((pt,i)=>(
                      <li key={i} className="flex gap-2 text-xs" style={{color:'var(--muted)'}}>
                        <span style={{color:'var(--accent2)',flexShrink:0}}>▹</span>{pt}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            {/* Certifications */}
            <div className="p-6 rounded-2xl" style={{background:'var(--surface)',border:'1px solid var(--border)'}}>
              <h4 className="font-semibold text-white mb-4 flex items-center gap-2">🏅 Certifications</h4>
              <div className="space-y-3">
                {DATA.certs.map(c=>(
                  <div key={c.title} className="p-3 rounded-xl flex items-start gap-3" style={{background:'rgba(255,255,255,0.03)',border:'1px solid var(--border)'}}>
                    <span className="text-xl">{c.icon}</span>
                    <div>
                      <p className="text-sm font-semibold text-white">{c.title}</p>
                      <p className="text-xs mt-0.5" style={{color:'var(--muted)'}}>{c.issuer}</p>
                      <p className="text-xs mt-1" style={{color:'var(--accent)'}}>{c.date}</p>
                      {c.grade&&<p className="text-xs mt-0.5" style={{color:'#4ade80'}}>{c.grade}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Education */}
            <div className="p-6 rounded-2xl" style={{background:'var(--surface)',border:'1px solid var(--border)'}}>
              <h4 className="font-semibold text-white mb-4 flex items-center gap-2">🎓 Education</h4>
              <div className="space-y-3">
                {DATA.education.map((e,i)=>(
                  <div key={e.degree} className="flex justify-between items-start pb-3" style={{borderBottom:i<DATA.education.length-1?'1px solid var(--border)':'none'}}>
                    <div>
                      <p className="text-sm font-semibold text-white">{e.degree}</p>
                      <p className="text-xs mt-0.5" style={{color:'var(--muted)'}}>{e.inst}</p>
                    </div>
                    <div className="text-right ml-4 flex-shrink-0">
                      <p className="text-xs font-semibold" style={{color:'var(--accent)'}}>{e.grade}</p>
                      <p className="text-xs mt-0.5" style={{color:'var(--muted)'}}>{e.period}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
