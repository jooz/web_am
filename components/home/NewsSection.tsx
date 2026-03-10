import Link from "next/link";
import Image from "next/image";

const API_URL = process.env.NEXT_PUBLIC_NEWS_API_URL || 'http://localhost:3000';

async function getRecentNews() {
    try {
        const res = await fetch(`${API_URL}/news`, {
            next: { revalidate: 60 },
        });
        if (!res.ok) return [];
        const data = await res.json();
        // Return only the top 6 news articles for the homepage
        return data.slice(0, 6);
    } catch (error) {
        console.error('Error fetching recent news:', error);
        return [];
    }
}

export default async function NewsSection() {
    const newsData = await getRecentNews();

    return (
        <main className="container mx-auto px-4 py-16">
            <h2 className="section-title mb-12">Últimas noticias</h2>

            {newsData.length === 0 ? (
                <div className="text-center text-gray-500 py-8">
                    <p>No hay noticias recientes disponibles en este momento.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {newsData.map((news: any) => {
                        const imageUrl = news.image?.startsWith('/') ? `${API_URL}${news.image}` : (news.image || '/noticia1.jpeg');

                        return (
                            <article key={news.id} className="bg-white rounded-eight shadow-md overflow-hidden hover:shadow-lg transition-all group border border-gray-100">
                                <Link href={`/noticias/${news.slug}`} className="block relative h-48 overflow-hidden">
                                    <img
                                        src={imageUrl}
                                        alt={news.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 left-4 bg-brand-blue text-white text-[10px] font-bold px-2 py-1 rounded uppercase shadow-sm">
                                        {news.category || 'General'}
                                    </div>
                                </Link>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-brand-dark mb-3 line-clamp-2 min-h-[3.5rem]">
                                        <Link href={`/noticias/${news.slug}`} className="hover:text-brand-blue transition-colors">
                                            {news.title}
                                        </Link>
                                    </h3>
                                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                                        {news.excerpt}
                                    </p>
                                    <Link
                                        href={`/noticias/${news.slug}`}
                                        className="text-brand-blue font-bold text-sm hover:underline inline-flex items-center group/btn"
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

            <div className="mt-12 text-center">
                <Link
                    href="/noticias"
                    className="bg-brand-green text-white px-8 py-3 rounded-eight font-bold hover:bg-green-600 transition-colors inline-block shadow-md"
                >
                    Ver todas las noticias
                </Link>
            </div>
        </main>
    );
}
