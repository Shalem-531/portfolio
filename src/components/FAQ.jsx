import { useState } from "react";
import { DATA } from "../data/data";

function FAQ(){
  const [open,setOpen]=useState(null);
  return(
    <section id="faq" className="py-24" style={{background:'rgba(255,255,255,0.015)'}}>
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold mb-2" style={{color:'var(--accent)'}}>Common Questions</p>
          <h2 className="font-display text-4xl font-bold text-white">FAQs</h2>
        </div>
        <div className="space-y-3">
          {DATA.faqs.map((f,i)=>(
            <div key={i} className="rounded-xl overflow-hidden" style={{border:'1px solid var(--border)',background:'var(--surface)'}}>
              <button className="w-full text-left px-6 py-4 flex justify-between items-center" onClick={()=>setOpen(open===i?null:i)}>
                <span className="font-medium text-white text-sm pr-4">{f.q}</span>
                <span className="text-xl flex-shrink-0 transition-transform" style={{color:'var(--accent)',transform:open===i?'rotate(45deg)':'rotate(0deg)',transition:'transform 0.3s'}}>+</span>
              </button>
              {open===i&&(
                <div className="px-6 pb-5 text-sm leading-relaxed" style={{color:'var(--muted)'}}>{f.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
