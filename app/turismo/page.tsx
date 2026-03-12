import TopBar from '@/components/layout/TopBar';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';

export default function TurismoPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <TopBar />
            <Header />

            <main className="flex-grow">
                {/* Hero Section */}
                <div className="bg-brand-dark py-12 text-white">
                    <div className="container mx-auto px-4">
                        <h1 className="text-3xl md:text-5xl font-bold uppercase tracking-wider text-center">Turismo en Miranda</h1>
                        <p className="text-center mt-4 text-brand-white font-medium tracking-widest uppercase text-sm">Explora la Raíz de Venezuela</p>
                    </div>
                </div>
                {/* Section 1: Coro Histórico (Concepto y Casonas) */}
                <section className="py-16 md:py-24 bg-gray-50 overflow-hidden">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-20">

                            {/* Images Section */}
                            <div className="w-full lg:w-1/2 relative h-[400px] md:h-[500px] flex items-center justify-center">
                                <div className="relative w-full max-w-md h-full">
                                    <div className="absolute top-10 left-0 w-3/4 aspect-[4/3] z-10 transition-transform hover:z-40 hover:scale-105 duration-500 -rotate-6">
                                        <div className="bg-white p-3 shadow-2xl rounded-sm border border-gray-100">
                                            <div className="relative w-full h-full aspect-[4/3] overflow-hidden">
                                                <Image
                                                    src="/Balcón de los Arcaya.jpg"
                                                    alt="Balcón de los Arcaya"
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute top-40 right-0 w-3/4 aspect-[4/3] z-20 transition-transform hover:z-40 hover:scale-105 duration-500 rotate-3">
                                        <div className="bg-white p-3 shadow-2xl rounded-sm border border-gray-100">
                                            <div className="relative w-full h-full aspect-[4/3] overflow-hidden">
                                                <Image
                                                    src="/Casa de las Ventanas de Hierro.jpg"
                                                    alt="Casa de las Ventanas de Hierro"
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute top-0 right-10 w-2/3 aspect-[4/3] z-30 transition-transform hover:z-40 hover:scale-105 duration-500 rotate-12">
                                        <div className="bg-white p-3 shadow-2xl rounded-sm border border-gray-100">
                                            <div className="relative w-full h-full aspect-[4/3] overflow-hidden">
                                                <Image
                                                    src="/Casa de las Cien Ventanas.jpg"
                                                    alt="Casa de las Cien Ventanas"
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute bottom-10 right-20 w-32 h-32 bg-brand-blue/10 rounded-full blur-3xl -z-10"></div>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="w-full lg:w-1/2 space-y-6">
                                <div className="inline-block px-4 py-1 bg-brand-blue/10 text-brand-blue text-sm font-bold uppercase tracking-widest rounded-full mb-2">
                                    Patrimonio Mundial
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">Coro: Arquitectura de Tierra</h2>
                                <div className="space-y-4 text-justify text-gray-700 leading-relaxed text-lg">
                                    <p>El Valor Universal Excepcional de Coro, declarado por la UNESCO en 1993, radica en sus construcciones de tierra perfectamente adaptadas al clima árido. Utilizando técnicas como el <strong>Adobe</strong> (barro y paja) y el <strong>Bahareque</strong>, la ciudad ha preservado su esencia colonial por siglos.</p>
                                    <p>Su trazado urbano irregular, influenciado por el periodo de los <strong>Welser</strong> (1528-1546), rompe con el esquema tradicional de damero español, creando una atmósfera medieval única en el Caribe.</p>
                                </div>
                            </div>
                        </div>

                        {/* Specific Points Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 group hover:shadow-xl transition-all">
                                <div className="relative h-48 w-full rounded-xl overflow-hidden mb-4">
                                    <Image src="/Casa de las Ventanas de Hierro.jpg" alt="Casa de las Ventanas de Hierro" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                                </div>
                                <h3 className="text-xl font-bold text-brand-dark mb-2">Casa de las Ventanas de Hierro</h3>
                                <p className="text-gray-600 text-sm">Famosa por su portal de 8 metros de altura y sus rejas de hierro importadas de Santo Domingo en el siglo XVIII.</p>
                            </div>

                            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 group hover:shadow-xl transition-all">
                                <div className="relative h-48 w-full rounded-xl overflow-hidden mb-4">
                                    <Image src="/Balcón de los Arcaya.jpg" alt="Balcón de los Arcaya" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                                </div>
                                <h3 className="text-xl font-bold text-brand-dark mb-2">Balcón de los Arcaya</h3>
                                <p className="text-gray-600 text-sm">Ejemplar magnífico de arquitectura civil con un extenso balcón techado. Hoy sede del Museo de Fósiles.</p>
                            </div>

                            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 group hover:shadow-xl transition-all">
                                <div className="relative h-48 w-full rounded-xl overflow-hidden mb-4">
                                    <Image src="/Casa del Sol.jpg" alt="Casa del Sol" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                                </div>
                                <h3 className="text-xl font-bold text-brand-dark mb-2">Casa del Sol</h3>
                                <p className="text-gray-600 text-sm">Data del siglo XVII, recibe su nombre por el emblema solar sobre su dintel. Funciona como centro cultural.</p>
                            </div>

                            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 group hover:shadow-xl transition-all">
                                <div className="relative h-48 w-full rounded-xl overflow-hidden mb-4">
                                    <Image src="/Casa del Tesoro.jpg" alt="Casa del Tesoro" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                                </div>
                                <h3 className="text-xl font-bold text-brand-dark mb-2">Casa del Tesoro</h3>
                                <p className="text-gray-600 text-sm">Envuelta en leyendas sobre túneles defensivos, es una de las estructuras más emblemáticas del casco histórico.</p>
                            </div>

                            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 group hover:shadow-xl transition-all">
                                <div className="relative h-48 w-full rounded-xl overflow-hidden mb-4">
                                    <Image src="/Casa de las Cien Ventanas.jpg" alt="Casa de las Cien Ventanas" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                                </div>
                                <h3 className="text-xl font-bold text-brand-dark mb-2">Casa de las Cien Ventanas</h3>
                                <p className="text-gray-600 text-sm">Arquitectura funcional de inicios del siglo XX, testigo de la evolución urbana de Coro hacia la modernidad.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 2: Templos (Text LEFT, Images RIGHT on LG) */}
                <section className="py-16 md:py-24 bg-white overflow-hidden">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">

                            {/* Images Section */}
                            <div className="w-full lg:w-1/2 relative h-[400px] md:h-[500px] flex items-center justify-center">
                                <div className="relative w-full max-w-md h-full">
                                    <div className="absolute top-10 left-0 w-3/4 aspect-[4/3] z-10 transition-transform hover:z-40 hover:scale-105 duration-500 rotate-6">
                                        <div className="bg-white p-3 shadow-2xl rounded-sm border border-gray-100">
                                            <div className="relative w-full h-full aspect-[4/3] overflow-hidden">
                                                <Image src="/Iglesia_de_San_Francisco_en_Coro.jpeg" alt="Iglesia de San Francisco" fill className="object-cover" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute top-40 right-0 w-3/4 aspect-[4/3] z-20 transition-transform hover:z-40 hover:scale-105 duration-500 -rotate-3">
                                        <div className="bg-white p-3 shadow-2xl rounded-sm border border-gray-100">
                                            <div className="relative w-full h-full aspect-[4/3] overflow-hidden">
                                                <Image src="/fotos-quito-iglesia-san-francisco.jpg" alt="Detalle Iglesia de San Francisco" fill className="object-cover" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute top-0 right-10 w-2/3 aspect-[4/3] z-30 transition-transform hover:z-40 hover:scale-105 duration-500 -rotate-12">
                                        <div className="bg-white p-3 shadow-2xl rounded-sm border border-gray-100">
                                            <div className="relative w-full h-full aspect-[4/3] overflow-hidden">
                                                <Image src="/iglesia san clemente.jpg" alt="Iglesia San Clemente" fill className="object-cover" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute top-20 left-10 w-40 h-40 bg-brand-yellow/10 rounded-full blur-3xl -z-10"></div>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="w-full lg:w-1/2 space-y-6">
                                <div className="inline-block px-4 py-1 bg-brand-yellow/10 text-gray-800 text-sm font-bold uppercase tracking-widest rounded-full mb-2">
                                    Centro de Fe
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">La Primada de Sudamérica</h2>
                                <div className="space-y-4 text-justify text-gray-700 leading-relaxed text-lg">
                                    <p>Coro alberga la sede del primer obispado de Sudamérica (1531). La <strong>Catedral de Santa Ana</strong>, iniciada a finales del siglo XVI, destaca por su estilo renacentista y es el ejemplo más importante de arquitectura religiosa anterior a 1713 en el país.</p>
                                    <p>La <strong>Iglesia de San Clemente</strong> resguarda la Cruz de cují que presidió la primera misa en 1527, mientras que la <strong>Iglesia de San Francisco</strong> posee la torre más alta (50m) y el alfarje mudéjar más bello de Venezuela.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* Section 3: Naturaleza (Images LEFT, Text RIGHT on LG) */}
                <section className="py-16 md:py-24 bg-gray-50 overflow-hidden">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                            {/* Images Section */}
                            <div className="w-full lg:w-1/2 relative h-[400px] md:h-[500px] flex items-center justify-center">
                                <div className="relative w-full max-w-md h-full">
                                    <div className="absolute top-10 left-0 w-3/4 aspect-[4/3] z-10 transition-transform hover:z-40 hover:scale-105 duration-500 -rotate-6">
                                        <div className="bg-white p-3 shadow-2xl rounded-sm border border-gray-100">
                                            <div className="relative w-full h-full aspect-[4/3] overflow-hidden">
                                                <Image src="/medano de coro.jpg" alt="Médanos de Coro" fill className="object-cover" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute top-40 right-0 w-3/4 aspect-[4/3] z-20 transition-transform hover:z-40 hover:scale-105 duration-500 rotate-3">
                                        <div className="bg-white p-3 shadow-2xl rounded-sm border border-gray-100">
                                            <div className="relative w-full h-full aspect-[4/3] overflow-hidden">
                                                <Image src="/medano de coro2.jpeg" alt="Médanos de Coro 2" fill className="object-cover" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute top-0 right-10 w-2/3 aspect-[4/3] z-30 transition-transform hover:z-40 hover:scale-105 duration-500 rotate-12">
                                        <div className="bg-white p-3 shadow-2xl rounded-sm border border-gray-100">
                                            <div className="relative w-full h-full aspect-[4/3] overflow-hidden">
                                                <Image src="/medano de coro4.jpg" alt="Médanos de Coro 4" fill className="object-cover" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="w-full lg:w-1/2 space-y-8 text-lg">
                                <div>
                                    <div className="inline-block px-4 py-1 bg-brand-blue/10 text-brand-blue text-sm font-bold uppercase tracking-widest rounded-full mb-4">
                                        Naturaleza Viva
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6">El Desierto a las Puertas de la Ciudad</h2>
                                </div>
                                <div className="space-y-6 text-gray-700">
                                    <p>El <strong>Parque Nacional Médanos de Coro</strong> es una maravilla de dunas móviles que pueden superar los 8 m.s.n.m. Ideal para sandboarding, fotografía y caminatas, este ecosistema xerófilo es la carta de presentación natural de Falcón.</p>
                                    <div className="flex gap-6 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold text-xl">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l.707.707M6.343 6.344l.707.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-brand-dark text-xl mb-1">Mejor Hora</h4>
                                            <p className="text-gray-600 text-base">Se recomienda visitar en horas de baja radiación solar (mañana o tarde) y portar hidratación constante.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-6 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold text-xl">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-brand-dark text-xl mb-1">Gestión</h4>
                                            <p className="text-gray-600 text-base">El parque es administrado por INPARQUES, garantizando la preservación de este ambiente árido único.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* Section 4: Logística (Text LEFT, Images RIGHT on LG) */}
                <section className="py-16 md:py-24 bg-white overflow-hidden">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">

                            {/* Images Section */}
                            <div className="w-full lg:w-1/2 relative h-[400px] md:h-[500px] flex items-center justify-center">
                                <div className="relative w-full max-w-md h-full">
                                    <div className="absolute top-10 left-0 w-3/4 aspect-[4/3] z-10 transition-transform hover:z-40 hover:scale-105 duration-500 rotate-6">
                                        <div className="bg-white p-3 shadow-2xl rounded-sm border border-gray-100">
                                            <div className="relative w-full h-full aspect-[4/3] overflow-hidden">
                                                <Image src="/gastronomía-chivo.jpg" alt="Gastronomía - Chivo" fill className="object-cover" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute top-40 right-0 w-3/4 aspect-[4/3] z-20 transition-transform hover:z-40 hover:scale-105 duration-500 -rotate-3">
                                        <div className="bg-white p-3 shadow-2xl rounded-sm border border-gray-100">
                                            <div className="relative w-full h-full aspect-[4/3] overflow-hidden">
                                                <Image src="/Dulce de Leche de cabra.jpg" alt="Dulce de Leche de Cabra" fill className="object-cover" />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="w-full lg:w-1/2 space-y-6">
                                <div className="inline-block px-4 py-1 bg-brand-yellow/10 text-gray-800 text-sm font-bold uppercase tracking-widest rounded-full mb-2">
                                    Experiencia Coriana
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">Cultura y Sabores</h2>
                                <div className="space-y-4 text-justify text-gray-700 leading-relaxed text-lg">
                                    <p>La identidad del mirandino se expresa en su gastronomía: el <strong>Chivo</strong> (en coco o talkarí), el <strong>Selse Coriano</strong> y el inigualable <strong>Dulce de Leche de cabra</strong> son paradas obligatorias.</p>
                                    <p>En 2026, planifica tu viaje considerando una duración de 4.5h desde Valencia. Evita traslados nocturnos y disfruta de la hospitalidad de un pueblo que celebra con fervor las Fiestas de Santa Ana cada 26 de julio.</p>
                                    <div className="bg-brand-blue/5 p-6 rounded-2xl border border-brand-blue/10 mt-8">
                                        <h4 className="font-bold text-brand-dark mb-2">Datos para tu Viaje 2026</h4>
                                        <ul className="list-disc list-inside space-y-1 text-base text-gray-600">
                                            <li><strong>Clima:</strong> Cálido y seco (25°C - 34°C).</li>
                                            <li><strong>Vientos:</strong> Ráfagas de hasta 46 km/h.</li>
                                            <li><strong>Combustible:</strong> Salir con tanque lleno desde Valencia.</li>
                                        </ul>
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

