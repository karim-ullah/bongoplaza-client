import { Button, Checkbox } from '@heroui/react';
import Link from 'next/link';
import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

const PromoBanner = () => {
    return (
        <section className="container">
        <div className="relative overflow-hidden rounded-3xl bg-card border border-primary/15">
          <div className="absolute -right-32 -top-32 w-[400px] h-[400px] rounded-full bg-primary/8 blur-[80px] pointer-events-none" />
          <div className="absolute -left-20 bottom-0 w-[300px] h-[300px] rounded-full bg-violet-500/8 blur-[60px] pointer-events-none" />
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-8 sm:p-12">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs text-primary font-mono uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                Flash Sale — 24 Hours Only
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-foreground">
                ArcBook Pro 15 — <span className="text-primary">$400 Off</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed max-w-md">
                The most powerful laptop in its class. M4 Ultra chip, 36-hour battery, 2TB SSD. Only 47 units remaining.
              </p>
              <ul className="space-y-1.5">
                {["Free expedited shipping", "Extended 3-year warranty", "Free USB-C hub included"].map(f => (
                  <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Checkbox className="w-4 h-4 text-primary shrink-0" />{f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col items-center md:items-end gap-5">
              <div className="text-center md:text-right">
                <div className="text-5xl font-display font-extrabold text-foreground">$1,799</div>
                <div className="text-muted-foreground text-lg line-through font-mono mt-1">$2,199</div>
                <div className="inline-block mt-2 px-3 py-1 bg-rose-500/15 text-rose-400 text-xs font-bold rounded-full border border-rose-500/20">Save $400 — 18% off</div>
              </div>
              
                <Button>
                  <Link href={'/shop'} className='flex items-center gap-2'>
                  Grab the Deal <BsArrowRight className="w-4 h-4" />
                  </Link>
                  </Button> 
            </div>
          </div>
        </div>
      </section>

    );
};

export default PromoBanner;