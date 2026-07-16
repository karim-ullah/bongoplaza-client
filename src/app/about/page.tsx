import React from 'react';
import { BiGlobe, BiPackage } from 'react-icons/bi';
import { CiStar } from 'react-icons/ci';
import { FiUsers } from 'react-icons/fi';



const page = () => {
    const TEAM = [
  { name: "Aiko Tanaka", role: "Co-Founder & CEO", initials: "AT", bio: "Former Apple product lead. 15 years shaping hardware that people actually love.", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&auto=format" },
  { name: "Daniel Osei", role: "Co-Founder & CTO", initials: "DO", bio: "Ex-Google engineer. Built the infrastructure that powers our real-time inventory system.", image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=300&h=300&fit=crop&auto=format" },
  { name: "Lena Müller", role: "Head of Curation", initials: "LM", bio: "Tests every product before it hits the site. If Lena doesn't approve it, you won't see it.", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&auto=format" },
  { name: "Ravi Suresh", role: "Head of Logistics", initials: "RS", bio: "Obsessed with getting your order to you faster than you think possible.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&auto=format" },
];
    return (
        <div className='container py-10'>
            <section className="relative py-24 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-primary/6 blur-[120px] pointer-events-none" />
        <div className=" relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="text-xs text-primary font-mono uppercase tracking-widest">Our Story</div>
            <h1 className="text-5xl sm:text-6xl font-display font-extrabold tracking-tight text-foreground leading-[0.95]">
              We exist because<br />
              <span className="text-primary">tech deserves better.</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
              VORTEX started with a simple frustration: buying premium gadgets online was a mess of counterfeits, overpriced middlemen, and 7-day shipping. We built the store we always wanted.
            </p>
          </div>
        </div>
      </section>


      <div className="border-y border-border bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: BiPackage, value: "50K+", label: "Products Listed" },
              { icon: FiUsers, value: "2M+", label: "Active Members" },
              { icon: CiStar, value: "4.9", label: "Average Rating" },
              { icon: BiGlobe, value: "40", label: "Countries Shipped" },
            ].map(({ icon: Icon, value, label }) => (
              <div key={label} className="space-y-2">
                <Icon className="w-5 h-5 text-primary mx-auto" />
                <div className="text-4xl font-display font-extrabold text-foreground">{value}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Team ── */}
      <section className="py-20 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-14">
            <div className="text-xs text-primary font-mono uppercase tracking-widest">The People</div>
            <h2 className="text-4xl font-display font-bold tracking-tight text-foreground">Meet the Team</h2>
            <p className="text-muted-foreground max-w-sm mx-auto">Small team, obsessive standards.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM.map(person => (
              <div key={person.name} className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/25 transition-all hover:shadow-xl hover:shadow-black/30">
                <div className="aspect-square overflow-hidden bg-accent/50">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 space-y-2">
                  <div>
                    <div className="text-sm font-display font-bold text-foreground">{person.name}</div>
                    <div className="text-xs text-primary font-mono">{person.role}</div>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{person.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
        </div>
    );
};

export default page;