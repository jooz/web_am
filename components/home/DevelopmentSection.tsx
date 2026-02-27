"use client";

import Link from "next/link";
import Image from "next/image";

export default function DevelopmentSection() {
    return (
        <section className="py-20 bg-gray-50 overflow-hidden">
            {/* Contenedor ancho para que ambas se vean grandes de lado a lado */}
            <div className="max-w-[1500px] mx-auto px-6">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">

                    {/* Contenedor Imagen 1 */}
                    <div className="relative group overflow-hidden rounded-2xl shadow-lg border border-white">
                        {/* 'aspect-[16/10]' asegura una proporción idéntica para ambas */}
                        <div className="relative w-full aspect-[16/10] md:aspect-[16/9]">
                            <Image
                                alt="Desarrollo Social Miranda"
                                src="/banner.png"
                                fill
                                /* 'object-cover' llena todo el espacio sin deformar */
                                className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                            />
                        </div>
                    </div>

                    {/* Contenedor Imagen 2 */}
                    <div className="relative group overflow-hidden rounded-2xl shadow-lg border border-white">
                        {/* MISMA proporción exacta que la primera */}
                        <div className="relative w-full aspect-[16/10] md:aspect-[16/9]">
                            <Image
                                alt="Radio Desarrollo Social"
                                src="/radio.jpeg"
                                fill
                                /* Al usar 'object-cover', esta imagen se recortará para coincidir en tamaño */
                                className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
