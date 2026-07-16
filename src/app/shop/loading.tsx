import SkeletonPart from '@/components/shop/SkeletonPart';
import React from 'react';

export default function loading () {
    return (
        <div className="container grid grid-cols-1 md:grid-cols-4 gap-4 mt-10">
      {Array.from({ length: 8 }).map((_, index) => (
        <SkeletonPart key={index} />
      ))}
    </div>
    );
};

