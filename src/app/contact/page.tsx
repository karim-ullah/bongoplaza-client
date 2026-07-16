import React from 'react';
import { BiMessageSquare, BiPhone } from 'react-icons/bi';
import { FaMailchimp } from 'react-icons/fa';

const ContactPage = () => {
    const CONTACT_CHANNELS = [
  {
    icon: BiMessageSquare,
    title: "Live Chat",
    desc: "Talk to a real human right now.",
    detail: "Available 24 / 7",
    action: "Start Chat",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: FaMailchimp,
    title: "Email",
    desc: "We reply within 4 business hours.",
    detail: "support@vortex.com",
    action: "Send Email",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
  },
  {
    icon: BiPhone,
    title: "Phone",
    desc: "Speak to someone directly.",
    detail: "+1 (800) 867-5309",
    action: "Call Now",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
];
    return (
        <div className='container py-10'>
            <section className="relative py-20 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[400px] h-[300px] bg-primary/6 blur-[100px] pointer-events-none" />
        <div className="relative z-10 text-center space-y-4">
          <div className="text-xs text-primary font-mono uppercase tracking-widest">Get in Touch</div>
          <h1 className="text-5xl sm:text-6xl font-display font-extrabold tracking-tight text-foreground">
            We&apos;re here to help.
          </h1>
          <p className="text-lg text-muted-foreground max-w-md mx-auto leading-relaxed">
            Real support from real humans. Pick the channel that works for you — or send us a message below.
          </p>
        </div>
      </section>

      <div className=" pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {CONTACT_CHANNELS.map(({ icon: Icon, title, desc, detail, action, color, bg }) => (
            <div key={title} className="bg-card border border-border rounded-2xl p-6 space-y-4 hover:border-primary/25 transition-all group">
              <div className={`w-11 h-11 rounded-xl ${bg} flex items-center justify-center`}>
                <Icon className={`w-5 h-5 ${color}`} />
              </div>
              <div>
                <h3 className="text-base font-display font-bold text-foreground">{title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{desc}</p>
                <p className={`text-sm font-mono font-semibold mt-1 ${color}`}>{detail}</p>
              </div>
              <button className="text-sm font-semibold text-foreground hover:text-primary transition-colors flex items-center gap-1.5 group-hover:gap-2.5">
                {action} <span className="transition-all">→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
        </div>
    );
};

export default ContactPage;