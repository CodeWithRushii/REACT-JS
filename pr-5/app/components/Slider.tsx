// components/Slider.tsx
'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type Slide = {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    image: string;
}

const slides: Slide[] = [
    {
        id: 1,
        title: "Smart Inventory Management",
        subtitle: "Real-Time Tracking",
        description: "Monitor your stock levels in real time. Get low-stock alerts and never run out of bestsellers again.",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d", // warehouse with boxes
    },
    {
        id: 2,
        title: "Bulk Product Import",
        subtitle: "CSV & API Support",
        description: "Easily add or update hundreds of products at once using our batch import tools. Save hours of manual work.",
        image: "https://images.unsplash.com/photo-1553413077-190dd305871c", // spreadsheet / data
    },
    {
        id: 3,
        title: "Analytics Dashboard",
        subtitle: "Actionable Insights",
        description: "Understand sales trends, seasonal demand, and inventory turnover with beautiful visualizations.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71", // analytics dashboard
    }
];

export default function Slider() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    useEffect(() => {
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
    }, [nextSlide]); // added nextSlide dependency

    return (
        <div className="relative h-screen w-full overflow-hidden bg-linear-to-br from-gray-900 to-gray-800">
            {/* Slides */}
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                        index === currentSlide
                            ? 'opacity-100 translate-x-0'
                            : index < currentSlide
                            ? 'opacity-0 -translate-x-full'
                            : 'opacity-0 translate-x-full'
                    }`}
                >
                    <div className="absolute inset-0 bg-black/40 z-10" />
                    <img
                        src={slide.image}
                        alt={slide.title}
                        className="h-full w-full object-cover"
                    />

                    {/* Content */}
                    <div className="absolute inset-0 z-20 flex items-center justify-center">
                        <div className="text-center text-white px-4 max-w-4xl mx-auto">
                            <span className="inline-block text-sm uppercase tracking-wider mb-4 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                                {slide.subtitle}
                            </span>
                            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
                                {slide.title}
                            </h1>
                            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                                {slide.description}
                            </p>
                        </div>
                    </div>
                </div>
            ))}

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-3 transition-all duration-300 group"
                aria-label="Previous slide"
            >
                <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-3 transition-all duration-300 group"
                aria-label="Next slide"
            >
                <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </button>
        </div>
    );
}