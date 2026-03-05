import Image from "next/image";
import { Download, Calendar, FileText, Search } from "lucide-react";
import { GACETAS } from "@/data/gacetas";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function GacetasPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-gray-50 pb-20">
                {/* Hero Section */}
                <div className="bg-brand-dark text-white py-20">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Gacetas Municipales</h1>
                        <p className="text-gray-300 max-w-2xl mx-auto">
                            Registro oficial de las decisiones, decretos y actos administrativos
                            emanados de la Alcaldía de Miranda.
                        </p>
                    </div>
                </div>

                {/* Filter/Search Bar Placeholder */}
                <div className="container mx-auto px-4 -mt-8 mb-12">
                    <div className="bg-white rounded-eight shadow-lg p-6 flex flex-col md:flex-row gap-4 items-center border border-gray-100">
                        <div className="relative flex-grow w-full">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Buscar por número o título..."
                                className="w-full pl-12 pr-4 py-3 rounded-eight border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-blue"
                            />
                        </div>
                        <button className="bg-brand-blue text-white px-8 py-3 rounded-eight font-bold hover:bg-brand-dark transition-colors w-full md:w-auto">
                            Filtrar
                        </button>
                    </div>
                </div>

                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {GACETAS.map((gaceta) => (
                            <article key={gaceta.id} className="bg-white rounded-eight shadow-md overflow-hidden hover:shadow-lg transition-all border border-gray-100 flex flex-col h-full">
                                <div className="p-8">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="bg-brand-green/10 text-brand-green text-[10px] font-bold px-3 py-1 rounded-full uppercase">
                                            Oficial
                                        </div>
                                        <div className="flex items-center text-gray-400 text-xs">
                                            <Calendar className="w-3 h-3 mr-1" />
                                            {gaceta.date}
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        <span className="text-brand-blue font-bold text-sm block mb-1">{gaceta.number}</span>
                                        <h3 className="text-xl font-bold text-brand-dark leading-snug">
                                            {gaceta.title}
                                        </h3>
                                    </div>

                                    <div className="mt-8">
                                        <a
                                            href={gaceta.pdfUrl}
                                            className="inline-flex items-center text-brand-blue font-bold text-sm hover:underline"
                                        >
                                            <FileText className="w-4 h-4 mr-2" />
                                            Ver documento completo
                                        </a>
                                    </div>
                                </div>
                                <div className="mt-auto border-t border-gray-50 p-4 bg-gray-50/50">
                                    <a
                                        href={gaceta.pdfUrl}
                                        className="w-full flex items-center justify-center space-x-2 text-xs font-bold text-gray-500 hover:text-brand-blue uppercase tracking-widest transition-colors"
                                    >
                                        <Download className="w-4 h-4" />
                                        <span>Descargar PDF</span>
                                    </a>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
