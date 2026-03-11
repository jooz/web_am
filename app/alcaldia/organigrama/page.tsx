"use client";

import TopBar from '@/components/layout/TopBar';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';
import { useState } from 'react';

export default function Page() {
    const [showAll, setShowAll] = useState(false);
    const initialCount = 8;

    // Datos de los directivos con las fotos
    const directivos = [
        {
            id: 1,
            image: '/documentos/directivos/IMG_7063.JPG.jpeg',
            name: 'Directivo 1',
            description: 'Cargo y descripción del directivo'
        },
        {
            id: 2,
            image: '/documentos/directivos/IMG_7064.JPG.jpeg',
            name: 'Directivo 2',
            description: 'Cargo y descripción del directivo'
        },
        {
            id: 3,
            image: '/documentos/directivos/IMG_7065.JPG.jpeg',
            name: 'Directivo 3',
            description: 'Cargo y descripción del directivo'
        },
        {
            id: 4,
            image: '/documentos/directivos/IMG_7066.JPG.jpeg',
            name: 'Directivo 4',
            description: 'Cargo y descripción del directivo'
        },
        {
            id: 5,
            image: '/documentos/directivos/IMG_7067.JPG.jpeg',
            name: 'Directivo 5',
            description: 'Cargo y descripción del directivo'
        },
        {
            id: 6,
            image: '/documentos/directivos/IMG_7068.JPG.jpeg',
            name: 'Directivo 6',
            description: 'Cargo y descripción del directivo'
        },
        {
            id: 7,
            image: '/documentos/directivos/IMG_7069.JPG.jpeg',
            name: 'Directivo 7',
            description: 'Cargo y descripción del directivo'
        },
        {
            id: 8,
            image: '/documentos/directivos/IMG_7070.JPG.jpeg',
            name: 'Directivo 8',
            description: 'Cargo y descripción del directivo'
        },
        {
            id: 9,
            image: '/documentos/directivos/IMG_7071.JPG.jpeg',
            name: 'Directivo 9',
            description: 'Cargo y descripción del directivo'
        },
        {
            id: 10,
            image: '/documentos/directivos/IMG_7072.JPG.jpeg',
            name: 'Directivo 10',
            description: 'Cargo y descripción del directivo'
        },
        {
            id: 11,
            image: '/documentos/directivos/IMG_7073.JPG.jpeg',
            name: 'Directivo 11',
            description: 'Cargo y descripción del directivo'
        },
        {
            id: 12,
            image: '/documentos/directivos/IMG_7074.JPG.jpeg',
            name: 'Directivo 12',
            description: 'Cargo y descripción del directivo'
        },
        {
            id: 13,
            image: '/documentos/directivos/IMG_7075.JPG.jpeg',
            name: 'Directivo 13',
            description: 'Cargo y descripción del directivo'
        },
        {
            id: 14,
            image: '/documentos/directivos/IMG_7076.JPG.jpeg',
            name: 'Directivo 14',
            description: 'Cargo y descripción del directivo'
        },
        {
            id: 15,
            image: '/documentos/directivos/IMG_7199.JPG.jpeg',
            name: 'Directivo 15',
            description: 'Cargo y descripción del directivo'
        },
        {
            id: 16,
            image: '/documentos/directivos/IMG_7200.JPG.jpeg',
            name: 'Directivo 16',
            description: 'Cargo y descripción del directivo'
        },
        {
            id: 17,
            image: '/documentos/directivos/IMG_7201.JPG.jpeg',
            name: 'Directivo 17',
            description: 'Cargo y descripción del directivo'
        },
        {
            id: 18,
            image: '/documentos/directivos/IMG_7202.JPG.jpeg',
            name: 'Directivo 18',
            description: 'Cargo y descripción del directivo'
        },
        {
            id: 19,
            image: '/documentos/directivos/IMG_7203.JPG.jpeg',
            name: 'Directivo 19',
            description: 'Cargo y descripción del directivo'
        }
    ];

    const itemsToShow = showAll ? directivos : directivos.slice(0, initialCount);

    return (
        <>
            <TopBar />
            <Header />
            <main className='container mx-auto px-4 py-20 min-h-[60vh]'>
                <div className='text-center mb-16'>
                    <h1 className='text-4xl font-bold text-brand-dark mb-4 uppercase'>Directivos</h1>
                    <p className='text-gray-600 max-w-2xl mx-auto'>
                        Conozca a los directivos que conforman la administración municipal
                    </p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    {itemsToShow.map((directivo) => (
                        <article key={directivo.id} className='bg-white rounded-eight shadow-lg overflow-hidden transition-all hover:shadow-xl group border border-gray-100 flex flex-col h-full max-w-sm mx-auto'>
                            <div className='relative h-64 overflow-hidden'>
                                <Image
                                    src={directivo.image}
                                    alt={directivo.name}
                                    fill
                                    className='w-full h-full object-contain group-hover:scale-105 transition-transform duration-500'
                                />
                            </div>

                            <div className='p-8 flex flex-col flex-grow'>
                                <h3 className='text-xl font-bold text-brand-dark mb-4 group-hover:text-brand-blue transition-colors leading-snug'>
                                    {directivo.name}
                                </h3>

                                <p className='text-gray-600 text-sm mb-6 line-clamp-3'>
                                    {directivo.description}
                                </p>

                            </div>
                        </article>
                    ))}
                </div>

                {!showAll && directivos.length > initialCount && (
                    <div className='mt-16 text-center'>
                        <button
                            onClick={() => setShowAll(true)}
                            className='bg-brand-blue text-white px-12 py-4 rounded-eight font-bold hover:bg-brand-dark transition-all shadow-md inline-flex items-center group'
                        >
                            <svg className='w-5 h-5 mr-2 group-hover:translate-y-1 transition-transform' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
                            </svg>
                            Ver todos los directivos
                        </button>
                    </div>
                )}
            </main>
            <Footer />
        </>
    );
}