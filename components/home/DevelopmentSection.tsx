"use client";

import Link from "next/link";
import Image from "next/image";

export default function DevelopmentSection() {
    return (
        <section className="py-24 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-16">
                <div className="lg:w-1/2 relative">
                    <div className="absolute -top-6 -left-6 w-24 h-24 bg-brand-green/10 rounded-full -z-10 animate-pulse"></div>
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-blue/10 rounded-full -z-10 animate-pulse delay-700"></div>
                    <div className="relative w-full h-[400px] rounded-eight shadow-2xl overflow-hidden border-4 border-white transform -rotate-1 hover:rotate-0 transition-transform duration-500 z-10">
                        <Image
                            alt="Desarrollo Social Miranda"
                            src="/desarrollo-social.jpg"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
                <div className="lg:w-1/2">
                    <h2 className="section-title">Desarrollo Social</h2>
                    <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                        Atendemos las necesidades sociales del Municipio Miranda, implementando programas para el desarrollo integral de los ciudadanos, así como promover su concientización y participación, fortaleciendo los servicios necesarios que restituya los derechos y deberes en el marco legal vigente.
                    </p>
                    <div className="space-y-4 mb-10">
                        {["Gestión transparente", "Participación ciudadana", "Derechos restituidos"].map((item) => (
                            <div key={item} className="flex items-center text-gray-700">
                                <div className="w-2 h-2 rounded-full bg-brand-green mr-3"></div>
                                <span className="font-medium">{item}</span>
                            </div>
                        ))}
                    </div>
                    <Link
                        href="/desarrollo-social"
                        className="bg-brand-green text-white px-10 py-4 rounded-eight font-bold hover:bg-green-600 transition-all shadow-lg hover:shadow-green-200 inline-block"
                    >
                        Conoce más
                    </Link>
                </div>
            </div>
        </section>
    );
}
