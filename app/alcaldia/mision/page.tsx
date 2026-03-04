import TopBar from '@/components/layout/TopBar';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function Page() {
    return (
        <>
            <TopBar />
            <Header />
            <main className='container mx-auto px-4 py-20 min-h-[60vh] text-center'>
                <h1 className='text-4xl font-bold text-brand-dark mb-4 uppercase'>Mision</h1>
                <div className='text-gray-600 max-w-2xl mx-auto space-y-4'>
                    <p className='text-lg leading-relaxed'>
                        Promover el cumplimiento de las competencias establecidas legalmente, el desarrollo social, económico, tecnológico, cultural y político del municipio Miranda, de manera sustentable y productiva, con el propósito de satisfacer las necesidades individuales y colectivas de sus habitantes, a través de una administración transparente, eficiente, participativa, solidaria, y coordinada con los diferentes ámbitos de gobierno, el poder popular, el sector privado y los gremios.
                    </p>
                </div>
            </main>
            <Footer />
        </>
    );
}
