"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const HERO_SLIDES = [
    {
        title: "SANTA ANA DE CORO: TESORO COLONIAL",
        subtitle: "Descubre la primera capital de Venezuela y su Casco Histórico, Patrimonio de la Humanidad.",
        image: "/casa-del-tesoro.jpg",
        link: "/noticias/recuperacion-casco-historico"
    },
    {
        title: "MÉDANOS DE CORO: NATURALEZA ÚNICA",
        subtitle: "Un desierto infinito que se funde con el Caribe, símbolo eterno de nuestra tierra mirandina.",
        image: "/coro.jpg",
        link: "/turismo"
    },
    {
        title: "GESTIÓN MIRANDA: CONSTRUYENDO EL FUTURO",
        subtitle: "Modernización y servicios eficientes para transformar la calidad de vida de nuestra gente.",
        image: "/coro2.webp",
        link: "/proyectos"
    }
];

export default function HeroSection() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative h-[500px] md:h-[650px] overflow-hidden">
            {HERO_SLIDES.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                        }`}
                >
                    <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        className="object-cover object-center scale-105"
                        priority={index === 0}
                    />
                    <div className="absolute inset-0 hero-gradient bg-black/40"></div>
                </div>
            ))}

            <div className="relative z-20 container mx-auto h-full flex flex-col justify-center px-4 md:px-12 text-white">
                <div className="max-w-4xl animate-fade-in">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-lg uppercase">
                        {HERO_SLIDES[currentSlide].title}
                    </h1>
                    <p className="mt-6 text-lg md:text-2xl max-w-2xl opacity-90 drop-shadow-md font-medium">
                        {HERO_SLIDES[currentSlide].subtitle}
                    </p>
                    <div className="mt-10">
                        <Link
                            href={HERO_SLIDES[currentSlide].link}
                            className="bg-brand-green hover:bg-green-600 text-white px-10 py-4 rounded-eight font-bold text-lg inline-block transition-all hover:scale-110 shadow-xl border-2 border-white/20"
                        >
                            Ver más información
                        </Link>
                    </div>
                </div>
            </div>

            {/* Carousel Dots */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-30">
                {HERO_SLIDES.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? "bg-white w-8" : "bg-white/40 hover:bg-white/70"
                            }`}
                    ></button>
                ))}
            </div>
        </section>
    );
}
