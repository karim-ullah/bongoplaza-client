import Link from "next/link";
import React from "react";
import { FiZap } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/20 pt-16 pb-8 mt-auto">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-12">
            <div className="col-span-2 space-y-5">
              <Link href="/" className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shadow-md shadow-primary/30">
                  <FiZap className="w-4 h-4 text-primary-foreground" />
                </div>
                <span className="text-xl font-display font-bold tracking-tight text-foreground">BONGOPLAZA</span>
              </Link>
              <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
                Premium gadgets for people who refuse to compromise. Free shipping on everything over $99.
              </p>
              <div className="flex items-center gap-2.5">
                {[["TW", "Twitter"], ["IG", "Instagram"], ["YT", "YouTube"], ["DC", "Discord"]].map(([abbr, label]) => (
                  <button key={abbr} aria-label={label} className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center text-[11px] font-bold font-mono text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all">
                    {abbr}
                  </button>
                ))}
              </div>
            </div>
            {[
              { title: "Shop", links: [{ label: "All Products", to: "/shop" }, { label: "Deals", to: "/shop?filter=sale" }, { label: "New Arrivals", to: "/shop?filter=new" }, { label: "Best Sellers", to: "/shop" }] },
              { title: "Company", links: [{ label: "About Us", to: "/" }, { label: "Blog", to: "/" }, { label: "Careers", to: "/" }, { label: "Press", to: "/" }] },
              { title: "Support", links: [{ label: "Help Center", to: "/" }, { label: "Track Order", to: "/account" }, { label: "Returns", to: "/" }, { label: "Contact Us", to: "/" }] },
            ].map(col => (
              <div key={col.title} className="space-y-4">
                <div className="text-[11px] font-bold uppercase tracking-widest text-foreground">{col.title}</div>
                <ul className="space-y-2.5">
                  {col.links.map(({ label, to }) => (
                    <li key={label}>
                      <Link href={to} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-border">
            <p className="text-xs text-muted-foreground">© 2026 Bongoplaza Inc. All rights reserved.</p>
            <div className="flex items-center gap-6">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(link => (
                <a key={link} href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">{link}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
