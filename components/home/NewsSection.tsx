"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, MessageCircle, Youtube, Instagram } from "lucide-react";

const NEWS_MOCK = [
    {
        id: "1",
        title: "Miranda apuesta a la protección animal con nuevo registro",
        excerpt: "La Alcaldía de Miranda, a través de su consejo de protección, anunció el inicio de...",
        image: "/noticia-animal.jpg",
        category: "Protección Animal",
        slug: "proteccion-animal-registro"
    },
    {
        id: "2",
        title: "Excelencia educativa con la apertura del liceo municipal",
        excerpt: "El Alcalde anunció la inauguración de nuevos espacios para el fortalecimiento de...",
        image: "/noticia-educacion.jpg",
        category: "Educación",
        slug: "apertura-liceo-municipal"
    }
];

export default function NewsSection() {
    return (
        <main className="container mx-auto px-4 py-16">
            <div className="flex flex-col lg:flex-row gap-12">
                {/* Left: News Grid */}
                <div className="lg:w-2/3">
                    <h2 className="section-title">Últimas noticias</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {NEWS_MOCK.map((news) => (
                            <article key={news.id} className="bg-white rounded-eight shadow-md overflow-hidden hover:shadow-lg transition-all group border border-gray-100">
                                <div className="relative h-48 overflow-hidden">
                                    <Image
                                        src={news.image}
                                        alt={news.title}
                                        fill
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 left-4 bg-brand-blue text-white text-[10px] font-bold px-2 py-1 rounded uppercase">
                                        {news.category}
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-brand-dark mb-3 line-clamp-2 min-h-[3.5rem]">
                                        {news.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                                        {news.excerpt}
                                    </p>
                                    <Link
                                        href={`/noticias/${news.slug}`}
                                        className="text-brand-blue font-bold text-sm hover:underline inline-flex items-center"
                                    >
                                        Leer más
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                    <div className="mt-12 text-center">
                        <Link
                            href="/noticias"
                            className="bg-brand-green text-white px-8 py-3 rounded-eight font-bold hover:bg-green-600 transition-colors inline-block"
                        >
                            Ver todas
                        </Link>
                    </div>
                </div>

                {/* Right: Sidebar */}
                <div className="lg:w-1/3 space-y-8">
                    {/* PAM Card */}
                    <div className="bg-brand-green text-white p-8 rounded-eight text-center shadow-lg transform hover:-translate-y-1 transition-transform">
                        <h3 className="text-2xl font-bold mb-4">Programa de Asistencia Médica (PAM)</h3>
                        <p className="mb-6 opacity-90">Atención gratuita para todos los mirandinos. Regístrate aquí.</p>
                        <Link
                            href="/pam/registro"
                            className="bg-white text-brand-green px-8 py-3 rounded-eight font-bold inline-block hover:bg-gray-100 transition-colors shadow-md"
                        >
                            Registrarse
                        </Link>
                    </div>

                    {/* Social Feed Placeholder */}
                    <div className="bg-white p-6 rounded-eight border border-gray-200 shadow-sm">
                        <h3 className="text-center font-bold text-gray-700 mb-6 flex items-center justify-center">
                            <span className="w-8 h-[1px] bg-gray-300 mr-2"></span>
                            @alcaldiademiranda
                            <span className="w-8 h-[1px] bg-gray-300 ml-2"></span>
                        </h3>
                        <div className="grid grid-cols-2 gap-3">
                            {[
                                "/social-1.jpg",
                                "/social-2.jpg",
                                "/social-3.jpg",
                                "/social-4.jpg"
                            ].map((img, i) => (
                                <div key={i} className="aspect-square bg-gray-100 rounded-eight overflow-hidden group cursor-pointer relative">
                                    <Image
                                        src={img}
                                        alt={`Social feed ${i}`}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-brand-blue/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-center space-x-4 mt-8">
                            <div className="w-10 h-10 bg-[#1877F2] rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform cursor-pointer shadow-md" title="Facebook">
                                <Facebook className="w-5 h-5" />
                            </div>
                            <div className="w-10 h-10 bg-[#25D366] rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform cursor-pointer shadow-md" title="WhatsApp">
                                <MessageCircle className="w-5 h-5" />
                            </div>
                            <div className="w-10 h-10 bg-[#FF0000] rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform cursor-pointer shadow-md" title="YouTube">
                                <Youtube className="w-5 h-5" />
                            </div>
                            <div className="w-10 h-10 bg-[#E4405F] rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform cursor-pointer shadow-md" title="Instagram">
                                <Instagram className="w-5 h-5" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
