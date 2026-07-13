import { Button } from '@heroui/react';
import Image from 'next/image';
import React from 'react';

const Hero = () => {
    return (
        <section className='py-18'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 container'>
                {/* left */}
                <div>
                    <span className='bg-[#00D9F5]/10 px-4 py-2 rounded-full font-exo2 text-sm font-mono uppercase border border-[#00D9F5]/20'>New Arrivals — Summer 2025</span>
                    <h1 className='font-exo2 font-extrabold text-7xl text-[#E8EDF8] mt-8'>Tech That <span className='text-[#00D9F5]'>Moves</span> <br /> with you</h1>
                    <p className='font-dmSans text-lg font-normal text-[#6B7A99] my-8'>Premium gadgets curated for people who demand the best. From edge-of-art audio to the thinnest laptops ever made — delivered next day.</p>

                    <div className='space-x-3'>
                        <Button>Shop Now</Button>
                        <Button variant='secondary'>View Details</Button>
                    </div>
                </div>
                {/* right */}
                <div className='flex flex-col items-end justify-center'>
                    <Image className='rounded-xl' src={'https://images.unsplash.com/photo-1595303526913-c7037797ebe7?w=900&h=640&fit=crop&auto=format'} width={500} height={500} alt='Hero img'></Image>
                </div>
            </div>
        </section>
    );
};

export default Hero;