import { useState } from "react";
import { DATA } from "../data/data";

function Contact(){
  const [sent,setSent]=useState(false);
  const [form,setForm]=useState({name:'',email:'',message:''});
  const handle=e=>{
    e.preventDefault();
    setSent(true);
    setForm({name:'',email:'',message:''});
    setTimeout(()=>setSent(false),4000);
  };
  const contacts=[
    {icon:'📧',label:'Email',value:DATA.personal.email,href:`mailto:${DATA.personal.email}`},
    {icon:'📱',label:'Phone',value:DATA.personal.phone,href:`tel:${DATA.personal.phone}`},
    {icon:'💼',label:'LinkedIn',value:'linkedin.com/in/shalem-raju-83678221b',href:DATA.personal.linkedin},
    {icon:'🐙',label:'GitHub',value:'github.com/Shalem-531',href:DATA.personal.github},
    {icon:'📍',label:'Location',value:DATA.personal.location,href:null},
  ];
  return(
    <section id="contact" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-sm font-semibold mb-2" style={{color:'var(--accent)'}}>Get In Touch</p>
            <h2 className="font-display text-4xl font-bold text-white mb-4">Let's work<br/>together.</h2>
            <p className="text-base leading-relaxed mb-8" style={{color:'var(--muted)'}}>Open to internships, entry-level Software Developer, and Full Stack Developer roles. Available to join immediately.</p>
            <div className="space-y-3">
              {contacts.map(item=>(
                <div key={item.label} className="flex items-center gap-4 p-4 rounded-xl" style={{background:'var(--surface)',border:'1px solid var(--border)'}}>
                  <span className="text-xl">{item.icon}</span>
                  <div>
                    <p className="text-xs mb-0.5" style={{color:'var(--muted)'}}>{item.label}</p>
                    {item.href
                      ?<a href={item.href} target={item.href.startsWith('http')?'_blank':''} className="text-sm font-semibold" style={{color:'var(--accent)'}}>{item.value}</a>
                      :<p className="text-sm font-semibold text-white">{item.value}</p>
                    }
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="p-8 rounded-2xl" style={{background:'var(--surface)',border:'1px solid var(--border)'}}>
            <h3 className="font-semibold text-white text-lg mb-6">Send a Message</h3>
            {sent&&<div className="mb-4 px-4 py-3 rounded-xl text-sm font-semibold" style={{background:'rgba(0,212,170,0.1)',border:'1px solid rgba(0,212,170,0.25)',color:'#00d4aa'}}>✅ Message sent! I'll reply soon.</div>}
            <form onSubmit={handle} className="space-y-4">
              {[
                {id:'name',label:'Your Name',type:'text',ph:'John Doe'},
                {id:'email',label:'Email Address',type:'email',ph:'john@example.com'},
              ].map(f=>(
                <div key={f.id}>
                  <label className="block text-xs font-medium mb-1.5" style={{color:'var(--muted)'}}>{f.label}</label>
                  <input type={f.type} value={form[f.id]} onChange={e=>setForm({...form,[f.id]:e.target.value})} required className="w-full px-4 py-3 rounded-xl text-sm" style={{border:'1px solid var(--border)',transition:'border-color 0.2s'}} placeholder={f.ph}
                    onFocus={e=>e.target.style.borderColor='var(--accent)'} onBlur={e=>e.target.style.borderColor='var(--border)'}/>
                </div>
              ))}
              <div>
                <label className="block text-xs font-medium mb-1.5" style={{color:'var(--muted)'}}>Message</label>
                <textarea value={form.message} onChange={e=>setForm({...form,message:e.target.value})} required rows={4} className="w-full px-4 py-3 rounded-xl text-sm resize-none" style={{border:'1px solid var(--border)',transition:'border-color 0.2s'}} placeholder="Hi Shalem, I'd like to..."
                  onFocus={e=>e.target.style.borderColor='var(--accent)'} onBlur={e=>e.target.style.borderColor='var(--border)'}/>
              </div>
              <button type="submit" className="w-full py-3.5 rounded-xl font-semibold text-sm text-white" style={{background:'var(--accent)',transition:'opacity 0.2s'}} onMouseEnter={e=>e.target.style.opacity='0.85'} onMouseLeave={e=>e.target.style.opacity='1'}>Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
