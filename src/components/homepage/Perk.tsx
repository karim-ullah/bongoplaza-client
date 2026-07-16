import React from 'react';
import { BiShield } from 'react-icons/bi';
import { FaTruck } from 'react-icons/fa';
import { FiRefreshCw, FiZap } from 'react-icons/fi';

const Perk = () => {
    return (
        <div className="border-y border-border bg-card/20">
        <div className="container py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { icon: FaTruck, label: "Free Shipping", sub: "On orders over $99" },
              { icon: BiShield, label: "2-Year Warranty", sub: "On all products" },
              { icon: FiRefreshCw, label: "60-Day Returns", sub: "No questions asked" },
              { icon: FiZap, label: "24/7 Support", sub: "Live chat & phone" },
            ].map(({ icon: Icon, label, sub }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">{label}</div>
                  <div className="text-xs text-muted-foreground">{sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
};

export default Perk;