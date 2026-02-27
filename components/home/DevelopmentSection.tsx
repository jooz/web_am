"use client";

import Link from "next/link";
import Image from "next/image";

export default function DevelopmentSection() {
    return (
        <section className="py-20 bg-gray-50 overflow-hidden">
            {/* Contenedor extra ancho para que las fotos sean grandes */}
            <div className="max-w-[1500px] mx-auto px-6">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Imagen 1 - Sin "efecto tarjeta" */}
                    <div className="relative group flex justify-center items-center">
                        {/* Contenedor invisible: solo define el tamaño */}
                        <div className="relative w-full h-[400px] md:h-[550px] lg:h-[700px] overflow-hidden rounded-xl">
                            <Image
                                alt="Desarrollo Social Miranda"
                                src="/banner.png"
                                fill
                                /* "object-contain" para no cortar, y quitamos bordes/fondos */
                                className="object-contain transition-transform duration-700 ease-out group-hover:scale-110"
                            />
                        </div>
                    </div>

                    {/* Imagen 2 - Sin "efecto tarjeta" */}
                    <div className="relative group flex justify-center items-center">
                        <div className="relative w-full h-[400px] md:h-[550px] lg:h-[700px] overflow-hidden rounded-xl">
                            <Image
                                alt="Radio Desarrollo Social"
                                src="/radio.jpeg"
                                fill
                                className="object-contain transition-transform duration-700 ease-out group-hover:scale-110"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
