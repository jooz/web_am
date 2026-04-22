'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface NewsCarouselProps {
    images: { id: string, url: string }[];
    title: string;
}

export default function NewsCarousel({ images, title }: NewsCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    if (!images || images.length === 0) return null;

    return (
        <div className="relative group w-full h-[300px] md:h-[500px] mb-10 overflow-hidden rounded-xl shadow-lg border border-gray-100 bg-gray-50">
            {/* Slides */}
            <div 
                className="w-full h-full flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {images.map((img) => (
                    <div key={img.id} className="min-w-full h-full relative">
                        <img 
                            src={img.url} 
                            alt={title} 
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>

            {/* Navigation Arrows */}
            {images.length > 1 && (
                <>
                    <button 
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-brand-dark p-2 rounded-full shadow-md transition-all opacity-0 group-hover:opacity-100 z-10"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button 
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-brand-dark p-2 rounded-full shadow-md transition-all opacity-0 group-hover:opacity-100 z-10"
                    >
                        <ChevronRight size={24} />
                    </button>
                </>
            )}

            {/* Dots / Thumbnails */}
            {images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all ${
                                currentIndex === index 
                                    ? 'bg-brand-blue w-6' 
                                    : 'bg-white/60 hover:bg-white'
                            }`}
                        />
                    ))}
                </div>
            )}
            
            {/* Counter */}
            <div className="absolute top-4 right-4 bg-black/50 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">
                {currentIndex + 1} / {images.length}
            </div>
        </div>
    );
}
