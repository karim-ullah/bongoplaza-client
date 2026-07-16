'use client'
import React, { useState } from 'react';
import { BiCheck } from 'react-icons/bi';

const NewsLetter = () => {
    const [email, setEmail] = useState<string>("");
  const [subscribed, setSubscribed] = useState<boolean>(false);
    return (
        <section className="container">
        <div className="relative overflow-hidden bg-card border border-border rounded-3xl p-10 sm:p-16 text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-primary/5 blur-[60px] pointer-events-none" />
          <div className="relative z-10 space-y-6">
            <div className="text-xs text-primary font-mono uppercase tracking-widest">Stay in the Loop</div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-foreground max-w-xl mx-auto">
              Get Early Access to Drops & Exclusive Deals
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">Join 2 million subscribers. No spam — just signal.</p>
            {subscribed ? (
              <div className="flex items-center justify-center gap-2 px-6 py-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-400 max-w-sm mx-auto">
                <BiCheck className="w-5 h-5" />
                <span className="font-semibold">You&apos;re in! Welcome to VORTEX.</span>
              </div>
            ) : (
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  onKeyDown={e => e.key === "Enter" && email.includes("@") && setSubscribed(true)}
                  placeholder="you@example.com"
                  className="flex-1 px-4 py-3 bg-background border border-border rounded-xl text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                />
                <button
                  onClick={() => email.includes("@") && setSubscribed(true)}
                  className="px-6 py-3 bg-primary text-primary-foreground font-bold text-sm rounded-xl hover:opacity-90 active:scale-[0.98] transition-all shadow-lg shadow-primary/25 whitespace-nowrap"
                >
                  Subscribe
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    );
};

export default NewsLetter;