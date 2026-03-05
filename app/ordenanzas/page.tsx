"use client";

import Image from "next/image";
import { Download, Calendar, FileText, ChevronDown } from "lucide-react";
import { ORDENANZAS } from "@/data/ordenanzas";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useState } from "react";

export default function OrdenanzasPage() {
    const [showAll, setShowAll] = useState(false);
    const initialCount = 6;
    const itemsToShow = showAll ? ORDENANZAS : ORDENANZAS.slice(0, initialCount);

    return (
        <>
            <Header />
            <main className="min-h-screen bg-gray-50 pb-20">
                {/* Hero Section */}
                <div className="bg-brand-dark text-white py-20">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Ordenanzas Municipales</h1>
                        <p className="text-gray-300 max-w-2xl mx-auto">
                            Consulte y descargue el marco legal que rige nuestro municipio Miranda.
                            Transparencia y acceso a la información para todos los ciudadanos.
                        </p>
                    </div>
                </div>

                <div className="container mx-auto px-4 -mt-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {itemsToShow.map((item) => (
                            <article key={item.id} className="bg-white rounded-eight shadow-lg overflow-hidden transition-all hover:shadow-xl group border border-gray-100 flex flex-col h-full">
                                <div className="relative h-56 overflow-hidden">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    {/* Category / Download Button Overlay */}
                                    <a
                                        href={item.pdfUrl}
                                        className="absolute top-4 left-4 bg-brand-green hover:bg-green-600 text-white text-[10px] font-bold px-3 py-2 rounded-full uppercase flex items-center shadow-md transition-colors"
                                    >
                                        <Download className="w-3 h-3 mr-1" />
                                        PDF: {item.category}
                                    </a>
                                </div>

                                <div className="p-8 flex flex-col flex-grow">
                                    <div className="flex items-center text-gray-400 text-xs mb-3">
                                        <Calendar className="w-3 h-3 mr-1" />
                                        {item.date}
                                    </div>

                                    <h3 className="text-xl font-bold text-brand-dark mb-4 group-hover:text-brand-blue transition-colors leading-snug">
                                        {item.title}
                                    </h3>

                                    <p className="text-gray-600 text-sm mb-6 line-clamp-3">
                                        {item.description}
                                    </p>

                                    <div className="mt-auto">
                                        <a
                                            href={item.pdfUrl}
                                            className="w-full bg-gray-100 text-brand-dark hover:bg-brand-dark hover:text-white flex items-center justify-center py-3 rounded-eight font-bold text-xs uppercase tracking-widest transition-all"
                                        >
                                            <FileText className="w-4 h-4 mr-2" />
                                            Descargar Ordenanza
                                        </a>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                    {!showAll && ORDENANZAS.length > initialCount && (
                        <div className="mt-16 text-center">
                            <button
                                onClick={() => setShowAll(true)}
                                className="bg-brand-blue text-white px-12 py-4 rounded-eight font-bold hover:bg-brand-dark transition-all shadow-md inline-flex items-center group"
                            >
                                <ChevronDown className="w-5 h-5 mr-2 group-hover:translate-y-1 transition-transform" />
                                Ver todas las ordenanzas
                            </button>
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </>
    );
}
