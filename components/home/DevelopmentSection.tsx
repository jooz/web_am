"use client";

import Link from "next/link";
import Image from "next/image";

export default function DevelopmentSection() {
    return (
        <section className="py-20 bg-gray-50 overflow-hidden">
            {/* Contenedor extra ancho para maximizar el espacio de lectura */}
            <div className="max-w-[1400px] mx-auto px-4">

                {/* Grid de 2 columnas con espacio (gap) ajustado */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

                    {/* Imagen 1 */}
                    <div className="relative group bg-white rounded-2xl shadow-xl overflow-hidden border-4 border-white">
                        {/* Altura fija alta para que el texto sea legible */}
                        <div className="relative w-full h-[450px] lg:h-[600px]">
                            <Image
                                alt="Desarrollo Social Miranda"
                                src="/banner.png"
                                fill
                                /* "object-contain" para que NO se corte ni un milímetro de información */
                                className="object-contain p-2 transition-transform duration-700 ease-in-out group-hover:scale-110"
                            />
                        </div>
                    </div>

                    {/* Imagen 2 */}
                    <div className="relative group bg-white rounded-2xl shadow-xl overflow-hidden border-4 border-white">
                        <div className="relative w-full h-[450px] lg:h-[600px]">
                            <Image
                                alt="Radio Desarrollo Social"
                                src="/radio.jpeg"
                                fill
                                className="object-contain p-2 transition-transform duration-700 ease-in-out group-hover:scale-110"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
