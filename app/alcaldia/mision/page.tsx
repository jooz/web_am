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
                {/* Hero Section simple */}
                <div className="bg-brand-dark py-12 text-white">
                    <div className="container mx-auto">
                        <h1 className="text-3xl md:text-5xl font-bold uppercase tracking-wider text-center">Nuestra Misión</h1>
                    </div>
                </div>

                <div className="container mx-auto px-4 py-16">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                        {/* Content Section */}
                        <div className="w-full lg:w-1/2 space-y-8">
                            <div className="relative">
                                <span className="absolute -top-10 -left-4 text-brand-blue/10 text-9xl font-serif select-none">"</span>

                                <p className="text-lg text-gray-700 leading-relaxed italic">
                                    Promover el cumplimiento de las competencias establecidas legalmente, el desarrollo social, económico, tecnológico, cultural y político del municipio Miranda, de manera sustentable y productiva, con el propósito de satisfacer las necesidades individuales y colectivas de sus habitantes, a través de una administración transparente, eficiente, participativa, solidaria, y coordinada con los diferentes ámbitos de gobierno, el poder popular, el sector privado y los gremios
                                </p>
                            </div>



                            <div className="flex items-center gap-4 pt-4">
                                <div className="h-0.5 w-12 bg-brand-blue"></div>
                                <span className="text-sm font-bold uppercase tracking-widest text-brand-blue">Alcaldía de Miranda</span>
                            </div>
                        </div>

                        {/* Interactive Photo Pile Section */}
                        <div className="w-full lg:w-1/2 relative h-[500px] flex items-center justify-center">
                            <div className="relative w-full max-w-md h-full">

                                {/* Photo 1 - Bottom/Left */}
                                <div className="absolute top-10 left-0 w-3/4 aspect-[4/3] z-10 transition-transform hover:z-40 hover:scale-105 duration-500 -rotate-6">
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

                                {/* Photo 2 - Middle/Right */}
                                <div className="absolute top-40 right-0 w-3/4 aspect-[4/3] z-20 transition-transform hover:z-40 hover:scale-105 duration-500 rotate-3">
                                    <div className="bg-white p-3 shadow-2xl rounded-sm border border-gray-100">
                                        <div className="relative w-full h-full aspect-[4/3] overflow-hidden">
                                            <Image
                                                src="/coro.jpg"
                                                alt="Centro Histórico de Coro"
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Photo 3 - Top/Center */}
                                <div className="absolute top-0 right-10 w-2/3 aspect-[4/3] z-30 transition-transform hover:z-40 hover:scale-105 duration-500 rotate-12">
                                    <div className="bg-white p-3 shadow-2xl rounded-sm border border-gray-100">
                                        <div className="relative w-full h-full aspect-[4/3] overflow-hidden">
                                            <Image
                                                src="/Avenida.jpeg"
                                                alt="Avenida Los Médanos"
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Subtle decorative elements */}
                                <div className="absolute bottom-10 right-20 w-32 h-32 bg-brand-yellow/20 rounded-full blur-3xl -z-10"></div>
                                <div className="absolute top-20 left-10 w-40 h-40 bg-brand-blue/10 rounded-full blur-3xl -z-10"></div>
                            </div>
                        </div>

                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

