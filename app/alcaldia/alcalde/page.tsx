import TopBar from '@/components/layout/TopBar';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';

export default function Page() {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <TopBar />
            <Header />

            <main className="flex-grow">
                {/* Hero Section */}
                <div className="bg-brand-dark py-12 text-white">
                    <div className="container mx-auto">
                        <h1 className="text-3xl md:text-5xl font-bold uppercase tracking-wider text-center">Nuestro Alcalde</h1>
                    </div>
                </div>

                <div className="container mx-auto px-4 py-16">
                    <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">

                        {/* Image Section - Using the Mission-style photo pile or a refined version */}
                        <div className="w-full lg:w-5/12 relative h-[500px] flex items-center justify-center">
                            <div className="relative w-full max-w-sm h-full">
                                {/* Main Portrait */}
                                <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full aspect-[3/4] z-20 transition-transform hover:scale-105 duration-500">
                                    <div className="bg-white p-3 shadow-2xl rounded-sm border border-gray-100">
                                        <div className="relative w-full h-full aspect-[3/4] overflow-hidden">
                                            <Image
                                                src="/alcalde_henry.jpg"
                                                alt="Dr. Henry Hernández"
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="mt-4 text-center">
                                            <p className="text-xl font-bold text-brand-dark">Dr. Henry Hernández</p>
                                            <p className="text-brand-blue font-medium uppercase text-sm tracking-widest">Alcalde del Municipio Miranda</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Background decorations similar to mission page */}
                                <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-brand-yellow/20 rounded-full blur-3xl -z-10"></div>
                                <div className="absolute -top-10 -left-10 w-56 h-56 bg-brand-blue/10 rounded-full blur-3xl -z-10"></div>


                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="w-full lg:w-7/12 space-y-10">
                            <section>
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="h-8 w-1 bg-brand-blue"></div>
                                    <h2 className="text-2xl font-bold text-brand-dark uppercase tracking-wide">Formación Académica</h2>
                                </div>
                                <ul className="space-y-4 text-gray-700">
                                    <li className="flex gap-4">
                                        <div className="min-w-[4px] h-4 mt-1.5 bg-brand-yellow"></div>
                                        <p><strong>Año 2012:</strong> Universidad Nacional Experimental Francisco de Miranda. Magister Universidad Scientiarum en Micología.</p>
                                    </li>
                                    <li className="flex gap-4">
                                        <div className="min-w-[4px] h-4 mt-1.5 bg-brand-yellow"></div>
                                        <p>Universidad Central de Venezuela. Inmunología Experimental.</p>
                                    </li>
                                </ul>
                            </section>

                            <section>
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="h-8 w-1 bg-brand-blue"></div>
                                    <h2 className="text-2xl font-bold text-brand-dark uppercase tracking-wide">Experiencia Laboral</h2>
                                </div>
                                <div className="grid md:grid-cols-1 gap-4 text-gray-700">
                                    {[
                                        "Docente universitario en el área de ciencias de la salud (Trabajo Comunitario, Morfofuncionales, Microbiología).",
                                        "Responsable de Consejo Bolivariano Estadal de Salud.",
                                        "Responsable del Plan de Formación de Medicina Integral Comunitaria (Lara, Falcon, Yaracuy y Zulia).",
                                        "Responsable de la Fundación Misión Barrio Adentro Estado Falcón.",
                                        "Director del Hospital Universitario de Coro.",
                                        "Viceministro de Recursos, Tecnología y Regulación del Ministerio del Poder Popular para la Salud.",
                                        "Autoridad Única de Salud y Jefe del Gabinete Social en Estado Falcón.",
                                        "Secretario General de Gobierno de la Gobernación del Estado Falcón.",
                                        "Integrante de la Junta Directiva Nacional de los Seguros Sociales.",
                                        "Actual Alcalde del Municipio Miranda del Estado Falcón."
                                    ].map((item, index) => (
                                        <div key={index} className="flex gap-4 items-start">
                                            <div className="mt-2.5 w-1.5 h-1.5 rounded-full bg-brand-blue flex-shrink-0"></div>
                                            <p className="text-base">{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <section>
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="h-8 w-1 bg-brand-blue"></div>
                                    <h2 className="text-2xl font-bold text-brand-dark uppercase tracking-wide">Trayectoria Política</h2>
                                </div>
                                <div className="relative space-y-4 text-gray-700">
                                    <span className="absolute -top-10 -left-4 text-brand-blue/10 text-9xl font-serif select-none">"</span>
                                    <p className="leading-relaxed text-justify relative z-10">
                                        Integrante del equipo fundador de la Juventud del PSUV en el Estado Falcón, desempeñando responsabilidades en las comisiones de trabajo voluntario, asuntos internacionales y movilización. Ha servido como enlace de organización del PSUV y delegado en múltiples congresos del partido.
                                    </p>
                                    <p className="leading-relaxed text-justify font-medium italic relative z-10">
                                        "Comprometido con el desarrollo sustentable y social de nuestro Municipio Miranda."
                                    </p>
                                </div>
                            </section>

                            <div className="flex items-center gap-4 pt-8">
                                <div className="h-0.5 w-12 bg-brand-blue"></div>
                                <span className="text-sm font-bold uppercase tracking-widest text-brand-blue">Gestión Henry Hernández</span>
                            </div>
                        </div>

                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
