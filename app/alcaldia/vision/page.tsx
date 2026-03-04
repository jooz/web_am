import TopBar from '@/components/layout/TopBar';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function Page() {
    return (
        <>
            <TopBar />
            <Header />
            <main className='container mx-auto px-4 py-20 min-h-[60vh] text-center'>
                <h1 className='text-4xl font-bold text-brand-dark mb-4 uppercase'>Visión</h1>
                <div className='text-gray-600 max-w-2xl mx-auto space-y-4'>
                    <p className='text-lg leading-relaxed'>
                        Ser una Alcaldía de referencia en Venezuela, destacada por su alta capacidad de gobierno que le ha permitido impulsar, con la participación protagónica del poder popular expresado en los ciudadanos, organizados en Consejos Comunales y Comunas socialistas; el desarrollo social, económico, tecnológico, cultural y político sustentable y productivo del municipio, con base en sus potencialidades culturales, turísticas, mineras y agropecuarias, con sentido de responsabilidad, justicia, solidaridad, y un manejo transparente y eficiente de todos sus recursos
                    </p>
                </div>
            </main>
            <Footer />
        </>
    );
}
