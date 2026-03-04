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
                        <h1 className="text-3xl md:text-5xl font-bold uppercase tracking-wider text-center">Municipio Miranda</h1>
                    </div>
                </div>

                {/* Section 1: Orígenes e Identidad Indígena (Images LEFT, Text RIGHT on LG) */}
                <section className="py-16 md:py-24 bg-gray-50 overflow-hidden">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                            {/* Images Section (Left on LG, First on Mobile) */}
                            <div className="w-full lg:w-1/2 relative h-[400px] md:h-[500px] flex items-center justify-center">
                                <div className="relative w-full max-w-md h-full">
                                    {/* Photo 1 */}
                                    <div className="absolute top-10 left-0 w-3/4 aspect-[4/3] z-10 transition-transform hover:z-40 hover:scale-105 duration-500 -rotate-6">
                                        <div className="bg-white p-3 shadow-2xl rounded-sm border border-gray-100">
                                            <div className="relative w-full h-full aspect-[4/3] overflow-hidden">
                                                <Image
                                                    src="/coro.jpg"
                                                    alt="Coro Histórico"
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    {/* Photo 2 */}
                                    <div className="absolute top-40 right-0 w-3/4 aspect-[4/3] z-20 transition-transform hover:z-40 hover:scale-105 duration-500 rotate-3">
                                        <div className="bg-white p-3 shadow-2xl rounded-sm border border-gray-100">
                                            <div className="relative w-full h-full aspect-[4/3] overflow-hidden">
                                                <Image
                                                    src="/casa-del-tesoro.jpg"
                                                    alt="Casa del Tesoro"
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    {/* Photo 3 */}
                                    <div className="absolute top-0 right-10 w-2/3 aspect-[4/3] z-30 transition-transform hover:z-40 hover:scale-105 duration-500 rotate-12">
                                        <div className="bg-white p-3 shadow-2xl rounded-sm border border-gray-100">
                                            <div className="relative w-full h-full aspect-[4/3] overflow-hidden">
                                                <Image
                                                    src="/banner_colonial.png"
                                                    alt="Arquitectura de Barro"
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Decorative blurs */}
                                    <div className="absolute bottom-10 right-20 w-32 h-32 bg-brand-blue/10 rounded-full blur-3xl -z-10"></div>
                                </div>
                            </div>

                            {/* Content Section (Right on LG) */}
                            <div className="w-full lg:w-1/2 space-y-6">
                                <div className="inline-block px-4 py-1 bg-brand-blue/10 text-brand-blue text-sm font-bold uppercase tracking-widest rounded-full mb-2">
                                    Nuestras Raíces
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">Orígenes e Identidad Indígena</h2>
                                <div className="space-y-4 text-justify text-gray-700 leading-relaxed text-lg">
                                    <p>Antes de la llegada de los españoles, el territorio estaba poblado por dos naciones principales: los <strong>Caquetíos</strong> en las llanuras y costas, y los <strong>Jirajaras</strong> en las montañas.</p>
                                    <p>La Nación Caquetía fue descrita como noble, pacífica y de gran estatura. Eran expertos agricultores que desarrollaron sistemas de riego avanzados, como el "buco" (dique) en los márgenes del río Coro para conducir agua a sus cultivos.</p>
                                    <p>El nombre "Coro" proviene de un vocablo arahuaco que significa <strong>"lugar del viento"</strong>. El Gran Diao Manaure era el jefe máximo de los Caquetíos, considerado casi un dios por su pueblo.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* Section 2: Fundación y Periodo Colonial (Text LEFT, Images RIGHT on LG) */}
                <section className="py-16 md:py-24 bg-white overflow-hidden">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">

                            {/* Images Section (Right on LG, First on Mobile) */}
                            <div className="w-full lg:w-1/2 relative h-[400px] md:h-[500px] flex items-center justify-center">
                                <div className="relative w-full max-w-md h-full">
                                    <div className="absolute top-10 left-0 w-3/4 aspect-[4/3] z-10 transition-transform hover:z-40 hover:scale-105 duration-500 rotate-6">
                                        <div className="bg-white p-3 shadow-2xl rounded-sm border border-gray-100">
                                            <div className="relative w-full h-full aspect-[4/3] overflow-hidden">
                                                <Image src="/plaza.jpeg" alt="Plaza Bolívar de Coro" fill className="object-cover" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute top-40 right-0 w-3/4 aspect-[4/3] z-20 transition-transform hover:z-40 hover:scale-105 duration-500 -rotate-3">
                                        <div className="bg-white p-3 shadow-2xl rounded-sm border border-gray-100">
                                            <div className="relative w-full h-full aspect-[4/3] overflow-hidden">
                                                <Image src="/coro2.webp" alt="Vía Colonial" fill className="object-cover" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute top-0 right-10 w-2/3 aspect-[4/3] z-30 transition-transform hover:z-40 hover:scale-105 duration-500 -rotate-12">
                                        <div className="bg-white p-3 shadow-2xl rounded-sm border border-gray-100">
                                            <div className="relative w-full h-full aspect-[4/3] overflow-hidden">
                                                <Image src="/casa-del-tesoro.jpg" alt="Centro Histórico" fill className="object-cover" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute top-20 left-10 w-40 h-40 bg-brand-yellow/10 rounded-full blur-3xl -z-10"></div>
                                </div>
                            </div>

                            {/* Content Section (Left on LG) */}
                            <div className="w-full lg:w-1/2 space-y-6">
                                <div className="inline-block px-4 py-1 bg-brand-yellow/10 text-gray-800 text-sm font-bold uppercase tracking-widest rounded-full mb-2">
                                    Historia Colonial
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">Fundación y Periodo Colonial</h2>
                                <div className="space-y-4 text-justify text-gray-700 leading-relaxed text-lg">
                                    <p>Coro es reconocida como la ciudad más antigua de Venezuela, con una fundación de hecho atribuida a <strong>Juan de Ampiés Ávila el 26 de julio de 1527</strong>. Se denominó Santa Ana de Coro por coincidir con el día de esa santa en el calendario católico.</p>
                                    <p>A diferencia de otras conquistas violentas, la fundación de Coro se basó en un pacto de paz y respeto mutuo entre Juan de Ampiés y el <strong>Diao Manaure</strong>, sentando un precedente de diplomacia en el nuevo mundo.</p>
                                    <p>En este territorio se celebró la primera misa en tierra firme del continente americano junto a la Cruz de San Clemente. En 1531, el Papa Clemente VII la elevó a <strong>Sede Episcopal</strong>, siendo la primera diócesis de Sudamérica.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* Section 3: Evolución Político-Administrativa (Images LEFT, Text RIGHT on LG) */}
                <section className="py-16 md:py-24 bg-gray-50 overflow-hidden">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                            {/* Images Section (Left on LG, First on Mobile) */}
                            <div className="w-full lg:w-1/2 relative h-[400px] md:h-[500px] flex items-center justify-center">
                                <div className="relative w-full max-w-md h-full">
                                    <div className="absolute top-10 left-0 w-3/4 aspect-[4/3] z-10 transition-transform hover:z-40 hover:scale-105 duration-500 -rotate-6">
                                        <div className="bg-white p-3 shadow-2xl rounded-sm border border-gray-100">
                                            <div className="relative w-full h-full aspect-[4/3] overflow-hidden">
                                                <Image src="/Avenida.jpeg" alt="Coro Moderna" fill className="object-cover" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute top-40 right-0 w-3/4 aspect-[4/3] z-20 transition-transform hover:z-40 hover:scale-105 duration-500 rotate-3">
                                        <div className="bg-white p-3 shadow-2xl rounded-sm border border-gray-100">
                                            <div className="relative w-full h-full aspect-[4/3] overflow-hidden">
                                                <Image src="/turismo.png" alt="Monumentos" fill className="object-cover" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute top-0 right-10 w-2/3 aspect-[4/3] z-30 transition-transform hover:z-40 hover:scale-105 duration-500 rotate-12">
                                        <div className="bg-white p-3 shadow-2xl rounded-sm border border-gray-100">
                                            <div className="relative w-full h-full aspect-[4/3] overflow-hidden">
                                                <Image src="/banner.png" alt="Símbolos Regionales" fill className="object-cover" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Content Section (Right on LG) */}
                            <div className="w-full lg:w-1/2 space-y-8 text-lg">
                                <div>
                                    <div className="inline-block px-4 py-1 bg-brand-blue/10 text-brand-blue text-sm font-bold uppercase tracking-widest rounded-full mb-4">
                                        Evolución
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6">Evolución Político-Administrativa</h2>
                                </div>
                                <div className="space-y-6">
                                    <div className="flex gap-6 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold text-xl">1</div>
                                        <div>
                                            <h4 className="font-bold text-brand-dark text-xl mb-1">Capitalidad</h4>
                                            <p className="text-gray-600">Fue la capital de la Provincia de Venezuela hasta 1815, centralizando el poder político del país.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-6 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold text-xl">2</div>
                                        <div>
                                            <h4 className="font-bold text-brand-dark text-xl mb-1">Federalismo</h4>
                                            <p className="text-gray-600">En 1874 pasó a llamarse Estado Falcón, consolidándose como un pilar del Gobierno Federal.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-6 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold text-xl">3</div>
                                        <div>
                                            <h4 className="font-bold text-brand-dark text-xl mb-1">Patrimonio Mundial</h4>
                                            <p className="text-gray-600">UNESCO incluyó a Coro como Patrimonio Cultural Mundial en 1993 por su excepcional arquitectura de barro.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* Section 4: Cultura y Tradiciones (Text LEFT, Images RIGHT on LG) */}
                <section className="py-16 md:py-24 bg-white overflow-hidden">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">

                            {/* Images Section (Right on LG, First on Mobile) */}
                            <div className="w-full lg:w-1/2 relative h-[400px] md:h-[500px] flex items-center justify-center">
                                <div className="relative w-full max-w-md h-full">
                                    <div className="absolute top-10 left-0 w-3/4 aspect-[4/3] z-10 transition-transform hover:z-40 hover:scale-105 duration-500 rotate-6">
                                        <div className="bg-white p-3 shadow-2xl rounded-sm border border-gray-100">
                                            <div className="relative w-full h-full aspect-[4/3] overflow-hidden">
                                                <Image src="/noticia-educacion.jpg" alt="Educación Mirandina" fill className="object-cover" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute top-40 right-0 w-3/4 aspect-[4/3] z-20 transition-transform hover:z-40 hover:scale-105 duration-500 -rotate-3">
                                        <div className="bg-white p-3 shadow-2xl rounded-sm border border-gray-100">
                                            <div className="relative w-full h-full aspect-[4/3] overflow-hidden">
                                                <Image src="/firma_titulos.jpeg" alt="Actos Culturales" fill className="object-cover" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute top-0 right-10 w-2/3 aspect-[4/3] z-30 transition-transform hover:z-40 hover:scale-105 duration-500 -rotate-12">
                                        <div className="bg-white p-3 shadow-2xl rounded-sm border border-gray-100">
                                            <div className="relative w-full h-full aspect-[4/3] overflow-hidden">
                                                <Image src="/chamos.jpeg" alt="Identidad Mirandina" fill className="object-cover" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Content Section (Left on LG) */}
                            <div className="w-full lg:w-1/2 space-y-6">
                                <div className="inline-block px-4 py-1 bg-brand-yellow/10 text-gray-800 text-sm font-bold uppercase tracking-widest rounded-full mb-2">
                                    Cultura y Saber
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">Hitos Educativos y Culturales</h2>
                                <div className="space-y-4 text-justify text-gray-700 leading-relaxed text-lg">
                                    <h3 className="text-2xl font-bold text-brand-blue pt-4">Educación</h3>
                                    <p>En 1833 se creó el <strong>Colegio Nacional de Coro</strong> bajo el gobierno de José Antonio Páez, institución de la cual egresaron figuras fundamentales de la historia nacional como Juan Crisóstomo Falcón.</p>

                                    <h3 className="text-2xl font-bold text-brand-blue pt-4">Tradiciones</h3>
                                    <p>El <strong>dulce de leche</strong> se destaca como una tradición de identidad cultural incalculable y una de las principales fuentes de orgullo y economía local para las familias del municipio.</p>
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
