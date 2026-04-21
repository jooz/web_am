import TopBar from '@/components/layout/TopBar';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

const API_URL = process.env.NEXT_PUBLIC_NEWS_API_URL;

async function getAllNews() {
    try {
        const res = await fetch(`${API_URL}/news`, {
            next: { revalidate: 60 },
        });
        if (!res.ok) return [];
        return await res.json();
    } catch (error) {
        console.error('Error fetching all news:', error);
        return [];
    }
}

export default async function NoticiasPage() {
    const newsData = await getAllNews();

    return (
        <>
            <TopBar />
            <Header />
            <main className='container mx-auto px-4 py-20 min-h-[60vh]'>
                <div className="text-center mb-12">
                    <h1 className='text-4xl font-bold text-brand-dark mb-4 uppercase'>Noticias</h1>
                    <p className='text-gray-600 max-w-2xl mx-auto'>
                        Mantente informado de todos los avances, obras y anuncios importantes de nuestra gestión en el Municipio Miranda.
                    </p>
                </div>

                {newsData.length === 0 ? (
                    <div className="text-center text-gray-400 py-16">
                        No hay noticias publicadas en este momento.
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {newsData.map((news: any) => {
                            const imageUrl = news.image?.startsWith('/') ? `${API_URL}${news.image}` : (news.image || '/noticia1.jpeg');

                            return (
                                <article key={news.id} className="bg-white rounded-eight shadow-md overflow-hidden hover:shadow-lg transition-all group border border-gray-100 flex flex-col h-full">
                                    <Link href={`/noticias/${news.slug}`} className="block relative h-56 overflow-hidden shrink-0">
                                        <img
                                            src={imageUrl}
                                            alt={news.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute top-4 left-4 bg-brand-blue text-white text-[10px] font-bold px-2 py-1 rounded uppercase shadow-sm">
                                            {news.category || 'General'}
                                        </div>
                                    </Link>
                                    <div className="p-6 flex flex-col flex-grow">
                                        <time className="text-xs text-gray-500 mb-2 font-medium">
                                            {new Date(news.createdAt).toLocaleDateString('es-VE')}
                                        </time>
                                        <h3 className="text-xl font-bold text-brand-dark mb-3 line-clamp-2">
                                            <Link href={`/noticias/${news.slug}`} className="hover:text-brand-blue transition-colors">
                                                {news.title}
                                            </Link>
                                        </h3>
                                        <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow whitespace-pre-line">
                                            {news.excerpt}
                                        </p>
                                        <Link
                                            href={`/noticias/${news.slug}`}
                                            className="text-brand-blue font-bold text-sm hover:underline inline-flex items-center group/btn mt-auto"
                                        >
                                            <span>Leer más</span>
                                            <svg className="w-4 h-4 ml-1 transform group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </Link>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                )}
            </main>
            <Footer />
        </>
    );
}
