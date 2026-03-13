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
            image: '/documentos/directivos/IMG_7072.JPG.jpeg',
            name: 'Luis Gerardo Chávez Noroño',
            description: 'Director del Despacho del Alcalde: Abogado con experiencia en gestión pública y administración tributaria. Coordina el funcionamiento del despacho del alcalde y la articulación institucional de las distintas dependencias municipales.'
        },

        {
            id: 2,
            image: '/documentos/directivos/IMG_7064.JPG.jpeg',
            name: 'Cruz Hernández',
            description: 'Presidenta del Instituto Municipal de Patrimonio: Encargada de promover la preservación y protección del patrimonio histórico, cultural y arquitectónico del municipio, fortaleciendo la identidad y memoria colectiva de Miranda.'
        },
        {
            id: 3,
            image: '/documentos/directivos/IMG_7065.JPG.jpeg',
            name: 'Rosalymar Romero',
            description: 'Jefa de la Oficina de Talento Humano: Abogada y asesora de seguros con experiencia en gestión administrativa. Desde Talento Humano promueve el fortalecimiento institucional y el desarrollo del capital humano de la alcaldía.'
        },
        {
            id: 4,
            image: '/documentos/directivos/IMG_7066.JPG.jpeg',
            name: 'Lidiberlis Colina',
            description: 'Directora de Protección Civil en el municipio Miranda: Responsable de la coordinación de las acciones de prevención, atención y gestión de riesgos en el municipio. Desde Protección Civil trabaja junto a las comunidades para fortalecer la cultura preventiva y garantizar una respuesta oportuna ante emergencias y desastres naturales.'
        },
        {
            id: 5,
            image: '/documentos/directivos/IMG_7067.JPG.jpeg',
            name: 'Inés Lourdes Yánez García',
            description: 'Presidenta del Consejo Municipal de Derechos del Niño, Niña y Adolescente: Profesional comprometida con la protección integral de la infancia y la adolescencia. Desde el Consejo Municipal promueve políticas y acciones orientadas a garantizar los derechos de los niños, niñas y adolescentes del municipio.'
        },
        {
            id: 6,
            image: '/documentos/directivos/IMG_7068.JPG.jpeg',
            name: 'Karliana José García Cumare',
            description: 'Secretaria de Hacienda: Profesional con sólida formación en administración y gerencia financiera. Doctora en Ciencias Gerenciales y especialista en gestión de recursos públicos, orientada a fortalecer la eficiencia financiera y la transparencia en la administración municipal'
        },
        {
            id: 7,
            image: '/documentos/directivos/IMG_7069.JPG.jpeg',
            name: 'Jaires Noroño',
            description: 'Secretario de Ambiente/Encargado del Plan Miranda sin Botes: Ingeniero comprometido con la protección ambiental y el desarrollo sostenible del municipio. Desde la Secretaría de Ambiente impulsa políticas de conservación y lidera el Plan Miranda Sin Botes, iniciativa orientada a mejorar el sistema de drenajes y prevenir inundaciones en las comunidades.'
        },
        {
            id: 8,
            image: '/documentos/directivos/IMG_7070.JPG.jpeg',
            name: 'Baldemar García Medina',
            description: 'Secretario de Desarrollo Agrícola, Pecuario y Pesquero: Licenciado en Gestión Social con formación técnica en administración y planificación sociocomunitaria. Trabaja en el impulso de la producción agrícola, pecuaria y pesquera para fortalecer la economía local y la soberanía alimentaria.'
        },
        {
            id: 9,
            image: '/documentos/directivos/IMG_7071.JPG.jpeg',
            name: 'Rómulo Alirio Hernández Hernández',
            description: 'Secretario Territorial: Encargado de la articulación territorial entre la alcaldía y las comunidades. Su gestión fortalece la organización popular y la planificación del desarrollo local.'
        },
        {
            id: 10,
            image: '/documentos/directivos/IMG_7063.JPG.jpeg',
            name: 'José David Pernalete Jiménez',
            description: 'Síndico Procurador Municipal: Abogado encargado de la defensa jurídica de los intereses del municipio. Su labor se centra en garantizar el cumplimiento de la legalidad en las actuaciones administrativas de la alcaldía.'
        },
        {
            id: 11,
            image: '/documentos/directivos/IMG_7073.JPG.jpeg',
            name: 'Jhoan Moreno',
            description: 'Secretario Político de la Alcaldía: Dirigente comprometido con la organización política y el fortalecimiento del proyecto bolivariano en el municipio. Desde la Secretaría Política impulsa la articulación entre el gobierno municipal, las fuerzas sociales y el poder popular.'
        },
        {
            id: 12,
            image: '/documentos/directivos/IMG_7074.JPG.jpeg',
            name: 'Pablo José García Valera',
            description: 'Secretario de Seguridad Ciudadana: Abogado y especialista en gerencia pública con formación en ciencias policiales y derechos humanos. Lidera las políticas de seguridad ciudadana orientadas a la protección del pueblo y al fortalecimiento de la convivencia en el municipio.'
        },
        {
            id: 13,
            image: '/documentos/directivos/IMG_7075.JPG.jpeg',
            name: 'Juan Carlos Jiménez',
            description: 'Presidente del Instituto Municipal de Tránsito y Transporte: Responsable de la planificación y regulación del tránsito y transporte en el municipio. Desde el instituto impulsa acciones para mejorar la movilidad urbana y la seguridad vial.'
        },
        {
            id: 14,
            image: '/documentos/directivos/IMG_7076.JPG.jpeg',
            name: 'Elis Manuel Romero Bonalde',
            description: 'Superintendente Tributario del Municipio Miranda: Responsable de la administración y fiscalización de los tributos municipales. Trabaja para fortalecer la recaudación y optimizar los ingresos destinados al desarrollo del municipio.'
        },
        {
            id: 15,
            image: '/documentos/directivos/IMG_7199.JPG.jpeg',
            name: 'Eduardo José Polanco',
            description: 'Director General del Cuerpo Policial Bolivariano del Municipio Miranda: Encargado de dirigir y coordinar las acciones del cuerpo policial municipal. Su gestión se centra en garantizar la seguridad ciudadana, la prevención del delito y la protección del pueblo mirandino.'
        },
        {
            id: 16,
            image: '/documentos/directivos/IMG_7200.JPG.jpeg',
            name: 'Reynni José Bonaldes Romero',
            description: 'Presidente del Instituto municipal de Hábitat: Ingeniero civil con formación técnica en mecánica industrial. Desde el Instituto de Hábitat impulsa proyectos orientados al desarrollo urbano, el mejoramiento de viviendas y el fortalecimiento de la infraestructura del municipio'
        },
        {
            id: 17,
            image: '/documentos/directivos/IMG_7201.JPG.jpeg',
            name: 'Johan Oviedo',
            description: 'Presidente de FONDESMIRANDA: Responsable de dirigir el Fondo de Desarrollo del Municipio Miranda (FONDESMIRANDA). Desde esta institución impulsa programas y proyectos orientados al fortalecimiento del desarrollo económico local, el apoyo a iniciativas productivas y el bienestar de las comunidades.'
        },
        {
            id: 18,
            image: '/documentos/directivos/IMG_7202.JPG.jpeg',
            name: 'Bita Margarita Sivira',
            description: 'Secretaria de Bienestar Social: Licenciada en Educación Inicial, magíster en Desarrollo Comunitario y doctora en Ciencias de la Educación. Impulsa políticas sociales orientadas a la atención integral de las comunidades y al fortalecimiento del tejido social.'
        },
        {
            id: 19,
            image: '/documentos/directivos/IMG_7203.JPG.jpeg',
            name: 'Edgar Partidas',
            description: 'Presidente del Terminal de Pasajeros Polica Salas: Responsable de la administración y funcionamiento del principal terminal terrestre del municipio. Desde su gestión trabaja para garantizar un servicio de transporte organizado, seguro y eficiente para los usuarios.'
        },
        {
            id: 20,
            image: '/documentos/directivos/maria_amaya.jpeg',
            name: 'María Auxiliadora Amaya',
            description: 'Presidenta del Instituto Autónomo de Cementerios: Encargada de la administración y mantenimiento de los cementerios municipales. Su labor se orienta a garantizar servicios dignos, ordenados y respetuosos para las familias mirandinas.'
        },
        {
            id: 21,
            image: '/documentos/directivos/douglas_perez.jpeg',
            name: 'Douglas Raúl Pérez Bravo',
            description: 'Presidente del Instituto Autónomo Matadero Industrial: Médico cirujano y especialista en nefrología. Dirige el matadero industrial municipal, promoviendo procesos sanitarios adecuados y contribuyendo a la seguridad alimentaria de la población.'
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
                                <h3 className='text-xl font-bold text-brand-dark mb-2 group-hover:text-brand-blue transition-colors leading-snug'>
                                    {directivo.name}
                                </h3>

                                <p className='text-gray-600 text-sm mb-4 line-clamp-9 text-justify'>
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