import TopBar from '@/components/layout/TopBar';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function Page() {
    return (
        <>
            <TopBar />
            <Header />
            <main className='container mx-auto px-4 py-20 min-h-[60vh] text-center'>
                <h1 className='text-4xl font-bold text-brand-dark mb-4 uppercase'>Turismo</h1>
                <p className='text-gray-600 max-w-2xl mx-auto'>
                    Esta sección está siendo desarrollada para brindar mejores servicios digitales a los ciudadanos del Municipio Miranda.
                </p>
            </main>
            <Footer />
        </>
    );
}
