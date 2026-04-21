import React from 'react';
import TopBar from '@/components/layout/TopBar';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

interface PageProps {
    params: { slug: string };
}

const API_URL = process.env.NEXT_PUBLIC_NEWS_API_URL || 'http://localhost:3000';

async function getNewsBySlug(slug: string) {
    try {
        const res = await fetch(`${API_URL}/news?slug=${slug}`, {
            next: { revalidate: 60 }, // ISR: Revaldar cada 60s
        });
        if (!res.ok) return null;
        const data = await res.json();
        return data.length > 0 ? data[0] : null;
    } catch (error) {
        console.error('Error fetching news:', error);
        return null;
    }
}

export default async function NewsDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const news = await getNewsBySlug(slug);

    if (!news) {
        return (
            <>
                <TopBar />
                <Header />
                <main className='container mx-auto px-4 py-20 min-h-[60vh] text-center'>
                    <h1 className='text-4xl font-bold text-gray-800 mb-4'>Noticia no encontrada</h1>
                    <p className='text-gray-600 mb-8'>Lo sentimos, no pudimos encontrar la noticia que estabas buscando.</p>
                    <Link href="/noticias" className="text-brand-blue hover:underline font-bold">
                        Volver a Noticias
                    </Link>
                </main>
                <Footer />
            </>
        );
    }

    // Handle image path correctly for API external host
    const imageUrl = news.image?.startsWith('/') ? `${API_URL}${news.image}` : (news.image || '/placeholder-news.jpg');

    return (
        <>
            <TopBar />
            <Header />
            <main className='container mx-auto px-4 py-16 min-h-[70vh]'>
                <article className="max-w-4xl mx-auto bg-white rounded-eight shadow-lg overflow-hidden border border-gray-100 p-8">
                    <header className="mb-8 border-b pb-6">
                        <div className="flex items-center text-sm text-brand-blue font-bold uppercase mb-4">
                            <span className="bg-blue-50 px-3 py-1 rounded-full">{news.category || 'General'}</span>
                            <span className="mx-2 text-gray-400">•</span>
                            <time className="text-gray-500 font-normal">
                                {new Date(news.createdAt).toLocaleDateString('es-VE', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}
                            </time>
                        </div>
                        <h1 className='text-4xl md:text-5xl font-bold text-brand-dark leading-tight mb-6'>
                            {news.title}
                        </h1>
                        <p className="text-xl text-gray-600 font-light italic border-l-4 border-brand-green pl-4 whitespace-pre-line text-justify">
                            {news.excerpt}
                        </p>
                    </header>

                    {news.image && (
                        <div className="w-full h-auto mb-10 overflow-hidden rounded-lg">
                            <img
                                src={imageUrl}
                                alt={news.title}
                                className="w-full max-h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    )}

                    <div
                        className="prose prose-lg max-w-none text-gray-700 leading-relaxed whitespace-pre-line text-justify"
                        dangerouslySetInnerHTML={{ __html: news.content }}
                    />
                </article>

                <div className="max-w-4xl mx-auto mt-12 text-center">
                    <Link href="/noticias" className="inline-block bg-brand-green text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition-colors shadow-md">
                        Volver a Noticias
                    </Link>
                </div>
            </main>
            <Footer />
        </>
    );
}
