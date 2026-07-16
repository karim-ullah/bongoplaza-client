import React from 'react';

const Brands = () => {
    return (
        <div className="border-b border-border">
        <div className="container py-10">
          <p className="text-xs text-muted-foreground text-center uppercase tracking-widest font-mono mb-6">Official Retailer For</p>
          <div className="flex items-center justify-center flex-wrap gap-x-10 gap-y-4">
            {["Sony", "Apple", "Samsung", "Bose", "DJI", "Logitech", "Razer", "Anker"].map(b => (
              <span key={b} className="text-muted-foreground/40 hover:text-muted-foreground font-display font-bold text-lg tracking-widest transition-colors cursor-pointer">
                {b.toUpperCase()}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
};

export default Brands;