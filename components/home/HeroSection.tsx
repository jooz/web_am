"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const HERO_SLIDES = [
    {
        title: "",
        subtitle: "",
        image: "/portada.png",
        link: "/"
    },
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
    const [showText, setShowText] = useState(false);

    useEffect(() => {
        // Al cargar o cambiar de slide, ocultamos el texto primero
        setShowText(false);

        // Esperamos un momento (ej. 600ms) para que la imagen cargue/transicione
        const textTimer = setTimeout(() => {
            setShowText(true);
        }, 600);

        const slideTimer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
        }, 5000);

        return () => {
            clearInterval(slideTimer);
            clearTimeout(textTimer);
        };
    }, [currentSlide]); // El efecto se dispara cada vez que cambia el slide

    return (
        <section className="relative w-full bg-black overflow-hidden" style={{ aspectRatio: '1080 / 617' }}>
            {HERO_SLIDES.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                        }`}
                >
                    <Image
                        src={slide.image}
                        alt={slide.title || "Hero Image"}
                        fill
                        className="object-cover object-center"
                        priority={index === 0}
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-black/30 pointer-events-none"></div>
                </div>
            ))}

            <div className="relative z-20 container mx-auto h-full flex flex-col justify-center px-4 md:px-12 text-white">
                {HERO_SLIDES[currentSlide].title && (
                    <div className={cn(
                        "max-w-4xl transition-all duration-1000 transform",
                        showText ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    )}>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-lg uppercase">
                            {HERO_SLIDES[currentSlide].title}
                        </h1>
                        <p className="mt-6 text-lg md:text-2xl max-w-2xl opacity-90 drop-shadow-md font-medium">
                            {HERO_SLIDES[currentSlide].subtitle}
                        </p>
                        <div className="mt-10">
                            <Link
                                href={HERO_SLIDES[currentSlide].link}
                                className="bg-brand-green hover:bg-green-600 text-white px-10 py-4 rounded-lg font-bold text-lg inline-block transition-all hover:scale-110 shadow-xl border-2 border-white/20"
                            >
                                Ver más información
                            </Link>
                        </div>
                    </div>
                )}
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

// Función auxiliar cn (puedes usar la que ya tienes en tu proyecto)
function cn(...inputs: any[]) {
    return inputs.filter(Boolean).join(" ");
}