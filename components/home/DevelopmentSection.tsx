"use client";

import Link from "next/link";
import Image from "next/image";

export default function DevelopmentSection() {
    return (
        <section className="py-20 bg-gray-50 overflow-hidden">
            {/* El contenedor max-w-[1500px] evita que en monitores gigantes se estire infinito */}
            <div className="max-w-[1500px] mx-auto px-6">

                {/* Eliminamos el Grid y usamos un solo bloque al 100% de ancho */}
                <div className="relative group overflow-hidden rounded-3xl shadow-2xl border-4 border-white">

                    {/* aspect-[21/9] es ideal para banners de ancho completo. 
          En móvil (h-[300px]) forzamos una altura mínima para que no sea una línea delgada. 
      */}
                    <div className="relative w-full h-[300px] md:h-auto md:aspect-[21/9] lg:aspect-[25/9]">
                        <Image
                            alt="Desarrollo Social Miranda"
                            src="/banner2.jpeg"
                            fill
                            /* 'object-cover' asegura que rellene todo el ancho sin dejar espacios */
                            className="object-cover transition-transform duration-1000 ease-in-out group-hover:scale-105"
                            priority
                        />

                        {/* Overlay sutil opcional: le da un toque premium al pasar el mouse */}
                        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500"></div>
                    </div>

                </div>
            </div>
        </section>
    )
}
