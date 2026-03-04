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
                            <h1 className="text-3xl md:text-5xl font-bold uppercase tracking-wider mb-2">Símbolos Municipales</h1>
                            <p className="text-brand-white/60 font-medium tracking-widest uppercase text-sm">Identidad y Orgullo Mirandino</p>
                        </div>
                    </div>
                </div>

                {/* Section 1: La Bandera (Images LEFT, Text RIGHT on LG) */}
                <section className="py-16 md:py-24 bg-gray-50 overflow-hidden">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                            {/* Images Section */}
                            <div className="w-full lg:w-1/2 relative h-[400px] md:h-[500px] flex items-center justify-center">
                                <div className="relative w-full max-w-md h-full">
                                    <div className="absolute inset-0 z-10 transition-transform hover:scale-105 duration-500">
                                        <div className="bg-white p-4 shadow-2xl rounded-sm border border-gray-100 h-full">
                                            <div className="relative w-full h-full overflow-hidden">
                                                <Image
                                                    src="/bandera_miranda.jpg"
                                                    alt="Bandera del Municipio Miranda"
                                                    fill
                                                    className="object-contain"
                                                />
                                            </div>
                                            <div className="mt-4 text-center">
                                                <p className="text-xs text-gray-400 italic">Bandera Oficial del Municipio Miranda</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-blue/10 rounded-full blur-3xl -z-10"></div>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="w-full lg:w-1/2 space-y-6">
                                <div className="inline-block px-4 py-1 bg-brand-blue/10 text-brand-blue text-sm font-bold uppercase tracking-widest rounded-full mb-2">
                                    Decreto N° 34 (16-01-2004)
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">La Bandera Municipal</h2>
                                <div className="space-y-4 text-justify text-gray-700 leading-relaxed text-lg">
                                    <p>La bandera está compuesta por tres franjas horizontales que representan la diversidad ecológica del municipio:</p>
                                    <ul className="space-y-3">
                                        <li><strong className="text-brand-dark">Franja Beige Arena:</strong> Representa la llanura árida y los médanos de Coro, maravilla natural donde descansa la raza autóctona Caquetía.</li>
                                        <li><strong className="text-brand-dark">Franja Azul Marino:</strong> Representa el Mar Caribe y el Golfete de Coro, vínculo histórico entre el viejo y el nuevo mundo.</li>
                                        <li><strong className="text-brand-dark">Franja Verde:</strong> Representa los valles y montañas de la Sierra, fuente inagotable de agua y cultura coriana.</li>
                                    </ul>
                                    <p>En el tercio derecho, tres triángulos representan la mezcla de las tres etnias (Indígena, Blanca y Negra) que dieron origen a nuestro pueblo. A la izquierda, una <strong className="text-brand-dark">ventana colonial</strong> simboliza el barro milenario de nuestro patrimonio, con una cruz que recuerda la primera misa y cuatro estrellas que iluminan el arte, la ciencia y nuestras tradiciones.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* Section 2: El Escudo (Text LEFT, Images RIGHT on LG) */}
                <section className="py-16 md:py-24 bg-white overflow-hidden">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">

                            {/* Images Section */}
                            <div className="w-full lg:w-1/2 relative h-[400px] md:h-[500px] flex items-center justify-center">
                                <div className="relative w-full max-w-sm h-full">
                                    <div className="absolute inset-0 z-10 transition-transform hover:scale-105 duration-500">
                                        <div className="bg-white p-4 shadow-2xl rounded-sm border border-gray-100 h-full">
                                            <div className="relative w-full h-full overflow-hidden">
                                                <Image
                                                    src="/escudo_miranda.jpg"
                                                    alt="Escudo del Municipio Miranda"
                                                    fill
                                                    className="object-contain"
                                                />
                                            </div>
                                            <div className="mt-4 text-center">
                                                <p className="text-xs text-gray-400 italic">Escudo de la Ciudad de Coro</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute -top-6 -left-6 w-32 h-32 bg-brand-yellow/10 rounded-full blur-3xl -z-10"></div>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="w-full lg:w-1/2 space-y-6">
                                <div className="inline-block px-4 py-1 bg-brand-yellow/10 text-gray-800 text-sm font-bold uppercase tracking-widest rounded-full mb-2">
                                    Real Cédula (20-03-1815)
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">Escudo de Armas</h2>
                                <div className="space-y-4 text-justify text-gray-700 leading-relaxed text-lg">
                                    <p>El escudo oficial del municipio y de la ciudad de Coro presenta un <strong className="text-brand-dark">campo azul</strong> donde figura <strong className="text-brand-dark">Santa Ana</strong> de pie, sosteniendo a la <strong className="text-brand-dark">Virgen</strong> en sus brazos.</p>
                                    <p>Santa Ana porta una diadema de oro y la Virgen una corona del mismo metal, simbolizando la protección divina y la profunda tradición religiosa de la primera sede episcopal de Sudamérica.</p>
                                    <p>Este símbolo fue otorgado por la corona española en reconocimiento a la fidelidad y el valor de la ciudad en momentos históricos cruciales, siendo entregado formalmente al Cabildo para su uso perpetuo.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* Section 3: El Himno (Images LEFT, Text RIGHT on LG) */}
                <section className="py-16 md:py-24 bg-gray-50 overflow-hidden">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                            {/* Extra Image or Decorative Section */}
                            <div className="w-full lg:w-1/2 flex items-center justify-center">
                                <div className="bg-brand-dark p-8 md:p-12 rounded-3xl shadow-2xl text-white relative overflow-hidden group">
                                    <div className="relative z-10 text-center space-y-4">
                                        <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                                            <svg className="w-10 h-10 text-brand-yellow" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-2xl font-bold italic">"El gran nombre de Miranda lo lleva nuestra alcaldía..."</h3>
                                        <p className="text-brand-white/40 text-sm uppercase tracking-widest italic">Himno Oficial</p>
                                    </div>
                                    {/* Abstract shapes */}
                                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-blue/20 rounded-full blur-2xl"></div>
                                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-yellow/20 rounded-full blur-2xl"></div>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="w-full lg:w-1/2 space-y-6">
                                <div className="inline-block px-4 py-1 bg-brand-blue/10 text-brand-blue text-sm font-bold uppercase tracking-widest rounded-full mb-2">
                                    Voz del Pueblo
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">Himno del Municipio</h2>
                                <p className="text-gray-600 italic">Letra: Delia María de Arellano (Nony) | Música: Maximiliano Suarez</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                                    <div className="space-y-2 p-6 bg-white rounded-2xl shadow-sm border-l-4 border-brand-yellow">
                                        <h4 className="font-bold text-brand-blue uppercase text-sm tracking-widest mb-3">Coro</h4>
                                        <div className="text-gray-700 italic leading-relaxed">
                                            El gran nombre de Miranda<br />
                                            Lo lleva nuestra alcaldía,<br />
                                            Y fue Manaure faro radiante<br />
                                            De esta tierra caquetia.
                                        </div>
                                    </div>
                                    <div className="space-y-2 p-6 bg-white rounded-2xl shadow-sm border-l-4 border-brand-blue">
                                        <h4 className="font-bold text-brand-blue uppercase text-sm tracking-widest mb-3">Estrofa I</h4>
                                        <div className="text-gray-700 italic leading-relaxed">
                                            Fue Juan de Ampíes hombre valiente<br />
                                            Que con sus manos el demarcó<br />
                                            En tierra firme sitio escogido<br />
                                            Y a nuestro Coro así lo fundó.
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* Section 4: Médanos de Coro (Text LEFT, Images RIGHT on LG) */}
                <section className="py-16 md:py-24 bg-white overflow-hidden">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">

                            {/* Images Section */}
                            <div className="w-full lg:w-1/2 relative h-[400px] md:h-[500px] flex items-center justify-center">
                                <div className="relative w-full max-w-md h-full">
                                    <div className="absolute inset-0 z-10 transition-transform hover:scale-105 duration-500">
                                        <div className="bg-white p-3 shadow-2xl rounded-2xl overflow-hidden h-full">
                                            <Image
                                                src="/coro.jpg"
                                                alt="Parque Nacional Médanos de Coro"
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    </div>
                                    <div className="absolute -bottom-4 -left-4 w-3/4 h-3/4 bg-brand-yellow/20 rounded-2xl -z-10 rotate-3"></div>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="w-full lg:w-1/2 space-y-6">
                                <div className="inline-block px-4 py-1 bg-brand-yellow/10 text-gray-800 text-sm font-bold uppercase tracking-widest rounded-full mb-2">
                                    Patrimonio Natural
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">Monumento: Médanos de Coro</h2>
                                <div className="space-y-4 text-justify text-gray-700 leading-relaxed text-lg">
                                    <p>Declarado Parque Nacional el <strong className="text-brand-dark">6 de febrero de 1974</strong>, este desierto de arena es el símbolo geográfico más emblemático de nuestro municipio y de todo el estado Falcón.</p>
                                    <p>Con una superficie de 91.280 hectáreas, alberga un ecosistema único de clima cálido y semiárido, donde la fauna compuesta por turpiales, cardenales corianos e iguanas convive con la flora xerófila de cujíes y cardones.</p>
                                    <p>Sus dunas cambiantes, movidas por los vientos alisios, representan el alma nómada y resistente de nuestra tierra, siendo el principal atractivo turístico y orgullo de los mirandinos.</p>
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
