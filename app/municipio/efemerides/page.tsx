import TopBar from '@/components/layout/TopBar';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';

export default function Page() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <TopBar />
            <Header />

            <main className="flex-grow">
                {/* Hero Section */}
                <div className="bg-brand-dark py-12 text-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center">
                            <h1 className="text-3xl md:text-5xl font-bold uppercase tracking-wider mb-2">Efemérides Municipales</h1>
                            <p className="text-brand-white/60 font-medium tracking-widest uppercase text-sm">Cronología de Nuestra Historia</p>
                        </div>
                    </div>
                </div>

                {/* Section 1: Fundación y Patrimonio (Images LEFT, Text RIGHT) */}
                <section className="py-16 md:py-24 bg-gray-50 overflow-hidden">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                            {/* Images Section */}
                            <div className="w-full lg:w-1/2 relative h-[400px] md:h-[500px] flex items-center justify-center">
                                <div className="relative w-full max-w-md h-full">
                                    <div className="absolute top-10 left-0 w-3/4 aspect-[4/3] z-10 transition-transform hover:z-40 hover:scale-105 duration-500 -rotate-6">
                                        <div className="bg-white p-3 shadow-2xl rounded-sm border border-gray-100">
                                            <div className="relative w-full h-full aspect-[4/3] overflow-hidden">
                                                <Image src="/casa-del-tesoro.jpg" alt="Centro Histórico Coro" fill className="object-cover" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute top-40 right-0 w-3/4 aspect-[4/3] z-20 transition-transform hover:z-40 hover:scale-105 duration-500 rotate-3">
                                        <div className="bg-white p-3 shadow-2xl rounded-sm border border-gray-100">
                                            <div className="relative w-full h-full aspect-[4/3] overflow-hidden">
                                                <Image src="/banner_colonial.png" alt="Arquitectura de Barro" fill className="object-cover" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="w-full lg:w-1/2 space-y-6">
                                <div className="space-y-8">
                                    <div>
                                        <div className="inline-block px-4 py-1 bg-brand-blue/10 text-brand-blue text-sm font-bold uppercase tracking-widest rounded-full mb-3">
                                            26 de Julio, 1527
                                        </div>
                                        <h2 className="text-3xl font-bold text-brand-dark mb-3">Fundación de Santa Ana de Coro</h2>
                                        <p className="text-gray-700 leading-relaxed text-lg text-justify">
                                            Fundada por Juan de Ampíes, es reconocida como la <strong>primera capital de Venezuela</strong> y el primer obispado de América del Sur. Un hito que marcó el inicio de la civilización colonial en estas tierras.
                                        </p>
                                    </div>
                                    <div className="p-6 bg-white rounded-2xl shadow-sm border border-blue-100">
                                        <div className="inline-block px-4 py-1 bg-brand-yellow/10 text-gray-800 text-xs font-bold uppercase tracking-widest rounded-full mb-2">
                                            09 de Diciembre, 1993
                                        </div>
                                        <h3 className="text-xl font-bold text-brand-dark mb-2">Patrimonio Cultural de la Humanidad</h3>
                                        <p className="text-gray-600 italic">
                                            La UNESCO declara a Coro y su puerto de La Vela como Patrimonio Mundial, honrando su excepcional arquitectura de barro y su valor histórico universal.
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* Section 2: La Federación y el Grito de Zamora (Text LEFT, Images RIGHT) */}
                <section className="py-16 md:py-24 bg-white overflow-hidden">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">

                            {/* Images Section */}
                            <div className="w-full lg:w-1/2 relative h-[400px] md:h-[500px] flex items-center justify-center">
                                <div className="relative w-full max-w-md h-full">
                                    <div className="absolute inset-0 z-10 transition-transform hover:scale-105 duration-500">
                                        <div className="bg-white p-3 shadow-2xl rounded-2xl overflow-hidden h-full">
                                            <Image src="/plaza.jpeg" alt="Grito de la Federación" fill className="object-cover" />
                                        </div>
                                    </div>
                                    <div className="absolute -bottom-6 -left-6 w-full h-full bg-brand-blue/5 rounded-2xl -z-10 -rotate-3"></div>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="w-full lg:w-1/2 space-y-6 text-lg">
                                <div className="inline-block px-4 py-1 bg-brand-blue/10 text-brand-blue text-sm font-bold uppercase tracking-widest rounded-full mb-2">
                                    20 de Febrero, 1859
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">Grito de la Federación</h2>
                                <div className="space-y-4 text-justify text-gray-700 leading-relaxed">
                                    <p>Coro fue el escenario de la proclamación de la Federación, marcando el inicio de la <strong>Guerra Federal</strong> con el histórico grito de Ezequiel Zamora. Este movimiento buscaba la igualdad social y la autonomía de las regiones.</p>
                                    <p>Cada año, durante el mes de febrero, el municipio celebra con orgullo estas fechas tradicionales, recordando el valor de quienes lucharon por un sistema federal y justo.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* Section 3: Francisco de Miranda y el Tricolor (Images LEFT, Text RIGHT) */}
                <section className="py-16 md:py-24 bg-gray-50 overflow-hidden">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                            {/* Images Section */}
                            <div className="w-full lg:w-1/2 relative h-[400px] md:h-[500px] flex items-center justify-center">
                                <div className="relative w-full max-w-md h-full">
                                    <div className="absolute inset-0 z-10 transition-transform hover:scale-105 duration-500">
                                        <div className="bg-white p-4 shadow-2xl rounded-sm border border-gray-100 h-full flex items-center justify-center">
                                            <Image src="/bandera_miranda.jpg" alt="Bandera Tricolor" width={500} height={350} className="object-contain" />
                                        </div>
                                    </div>
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-yellow/20 rounded-full blur-3xl -z-10"></div>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="w-full lg:w-1/2 space-y-6">
                                <div className="inline-block px-4 py-1 bg-brand-yellow/10 text-gray-800 text-sm font-bold uppercase tracking-widest rounded-full mb-2">
                                    12 de Marzo, 1806
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">Llegada de la Bandera Tricolor</h2>
                                <div className="space-y-4 text-justify text-gray-700 leading-relaxed text-lg">
                                    <p>El Precursor <strong>Francisco de Miranda</strong> arriba a la Vela de Coro a bordo del bergantín Leander.</p>
                                    <p>En este suelo sagrado se izó por primera vez la bandera tricolor venezolana, símbolo de esperanza y libertad que guiaría el destino de toda una nación en su gesta emancipadora.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* Section 4: Médanos y Tradición Religiosa (Text LEFT, Images RIGHT) */}
                <section className="py-16 md:py-24 bg-white overflow-hidden">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">

                            {/* Images Section */}
                            <div className="w-full lg:w-1/2 relative h-[400px] md:h-[500px] flex items-center justify-center">
                                <div className="relative w-full max-w-sm h-full">
                                    <div className="absolute top-10 left-0 w-3/4 aspect-[4/3] z-10 transition-transform hover:z-40 hover:scale-105 duration-500 -rotate-6">
                                        <div className="bg-white p-3 shadow-2xl rounded-sm border border-gray-100">
                                            <div className="relative w-full h-full aspect-[4/3] overflow-hidden">
                                                <Image src="/coro.jpg" alt="Médanos de Coro" fill className="object-cover" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute top-40 right-0 w-3/4 aspect-[4/3] z-20 transition-transform hover:z-40 hover:scale-105 duration-500 rotate-6">
                                        <div className="bg-white p-3 shadow-2xl rounded-sm border border-gray-100">
                                            <div className="relative w-full h-full aspect-[4/3] overflow-hidden">
                                                <Image src="/chamos.jpeg" alt="Tradición y Juventud" fill className="object-cover" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="w-full lg:w-1/2 space-y-8">
                                <div className="space-y-6">
                                    <div>
                                        <div className="inline-block px-4 py-1 bg-brand-blue/10 text-brand-blue text-sm font-bold uppercase tracking-widest rounded-full mb-3">
                                            06 de Febrero, 1974
                                        </div>
                                        <h2 className="text-3xl font-bold text-brand-dark mb-3">Parque Nacional Médanos de Coro</h2>
                                        <p className="text-gray-700 leading-relaxed text-lg text-justify">
                                            Se decreta formalmente su creación para proteger el ecosistema de dunas nómadas más importante del Caribe venezolano, un monumento natural que define nuestra identidad.
                                        </p>
                                    </div>
                                    <div className="pt-6 border-t border-gray-100">
                                        <div className="inline-block px-4 py-1 bg-brand-yellow/10 text-gray-800 text-sm font-bold uppercase tracking-widest rounded-full mb-3">
                                            26 de Julio
                                        </div>
                                        <h3 className="text-2xl font-bold text-brand-dark mb-3">Día de Santa Ana</h3>
                                        <p className="text-gray-700 leading-relaxed text-lg text-justify">
                                            Cada 26 de julio, la ciudad se viste de gala para celebrar a <strong>Santa Ana</strong>, su santa patrona, en una festividad que une la fe religiosa con la alegría del pueblo mirandino.
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
