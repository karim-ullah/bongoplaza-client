import React from 'react';
import { CiStar } from 'react-icons/ci';

const Testimonial = () => {
    const TESTIMONIALS = [
  {
    name: "Marcus Chen", role: "Creative Director", initials: "MC", rating: 5,
    text: "Ordered the SoundCore Pro X and it arrived next morning. Build quality is exceptional — I've tried every major brand and this is the only pair I've kept for over a year.",
  },
  {
    name: "Priya Sharma", role: "Software Engineer", initials: "PS", rating: 5,
    text: "The ArcBook Pro handles my entire dev setup without breaking a sweat. Best investment I've made this year, and the customer support was genuinely helpful when I had questions.",
  },
  {
    name: "Jordan Rivera", role: "Fitness Coach", initials: "JR", rating: 5,
    text: "VeloWatch S5 tracks everything I need and the battery lasts nearly two weeks. Returned my previous smartwatch after one day with this one.",
  },
];
    return (
        <section className="py-20 border-t border-border">
        <div className="container">
          <div className="text-center space-y-3 mb-14">
            <div className="text-xs text-primary font-mono uppercase tracking-widest">Customer Reviews</div>
            <h2 className="text-4xl font-display font-bold tracking-tight text-foreground">Trusted by Millions</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="bg-card border border-border rounded-2xl p-6 space-y-5 hover:border-primary/25 transition-colors">
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <CiStar key={j} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3 pt-1">
                  <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center text-xs font-bold text-primary font-mono shrink-0">{t.initials}</div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                  <div className="ml-auto">
                    <div className="text-[10px] font-mono text-primary/60 bg-primary/8 px-2 py-0.5 rounded-full">Verified</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
};

export default Testimonial;