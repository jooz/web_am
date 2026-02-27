"use client";

import Link from "next/link";
import Image from "next/image";

const NEWS_MOCK = [
    {
        id: "1",
        title: "La medicina no es solo una profesión, es mi forma de vida",
        excerpt: "Para mí, la medicina no es solo una profesión, es mi forma de vida. Más allá de la oficina, mi mayor satisfacción sigue siendo ponerme la bata y atender a mi gente cara a cara. Ser médico es mi raíz; servirles, mi mayor pasión",
        image: "/noticia1.jpeg",
        category: "Salud",
        slug: "la-medicina-no-es-solo-una-profesion-es-mi-forma-de-vida"
    },
    {
        id: "2",
        title: "Unidad Territorial de Seguridad y Cuadrantes de Paz",
        excerpt: "Encuentro clave con los responsables de la Unidad Territorial de Seguridad y Cuadrantes de Paz donde revisamos el funcionamiento en cada sector en nuestro municipio para que la respuesta sea inmediata y efectiva.",
        image: "/noticia2.jpeg",
        category: "Seguridad",
        slug: "unidad-territorial-de-seguridad-y-cuadrantes-de-paz"
    },
    {
        id: "3",
        title: "Consolidación de la Plaza Federación",
        excerpt: "Esta plaza fue pensada para todos: con wifi gratuito, accesos inclusivos para personas con discapacidad y áreas que invitan a compartir sin barreras. Además, sembramos árboles porque creemos en ciudades más humanas, donde el desarrollo camine de la mano con el cuidado del ambiente.",
        image: "/plaza.jpeg",
        category: "Obras",
        slug: "consolidacion-de-la-plaza-federacion"
    },
    {
        id: "4",
        title: "Anuncios en Materia Económica",
        excerpt: "Firmamos el decreto para la CREACIÓN DEL OBSERVATORIO MUNICIPAL DE ECONOMÍA Y ESTADÍSTICA, una herramienta técnica que nos permitirá planificar con datos reales...",
        image: "/firma_titulos.jpeg",
        category: "Economía",
        slug: "anuncios-en-materia-economica"
    },
    {
        id: "5",
        title: "Firmamos más de 300 títulos de propiedad",
        excerpt: "Con profunda emoción, este martes nos dedicamos a firmar más de 300 títulos de propiedad para hombres y mujeres de nuestras comunidades del municipio Miranda....",
        image: "/firma.jpeg",
        category: "Vialidad",
        slug: "plan-asfaltado-comunidades-rurales"
    },
    {
        id: "6",
        title: "Paso firme en la avenida Pinto Salinas",
        excerpt: "Supervisamos los trabajos de bacheo, para recuperar esta importante arteria vial de Coro y así garantizar calles dignas y un tránsito seguro para todos.",
        image: "/bacheo.jpeg",
        category: "Obras",
        slug: "fomentando-deporte-recreacion"
    }
];

export default function NewsSection() {
    return (
        <main className="container mx-auto px-4 py-16">
            <h2 className="section-title mb-12">Últimas noticias</h2>

            {/* News Grid: 3 columns, 2 rows (on desktop) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {NEWS_MOCK.map((news) => (
                    <article key={news.id} className="bg-white rounded-eight shadow-md overflow-hidden hover:shadow-lg transition-all group border border-gray-100">
                        <div className="relative h-48 overflow-hidden">
                            <Image
                                src={news.image}
                                alt={news.title}
                                fill
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute top-4 left-4 bg-brand-blue text-white text-[10px] font-bold px-2 py-1 rounded uppercase">
                                {news.category}
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-brand-dark mb-3 line-clamp-2 min-h-[3.5rem]">
                                {news.title}
                            </h3>
                            <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                                {news.excerpt}
                            </p>
                            <Link
                                href={`/noticias/${news.slug}`}
                                className="text-brand-blue font-bold text-sm hover:underline inline-flex items-center"
                            >
                                Leer más
                            </Link>
                        </div>
                    </article>
                ))}
            </div>

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
