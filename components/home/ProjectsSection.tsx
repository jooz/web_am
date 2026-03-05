import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const PROJECTS = [
    {
        title: "Plan de Recuperación Vial y Asfaltado (Coro 500)",
        description: "El plan de asfaltado en la variante norte de Coro avanza a paso firme y ya supera las 3.000 toneladas de asfalto colocadas, una cifra que refleja el impulso sostenido de las políticas de infraestructura promovidas por el Gobierno Bolivariano en el estado Falcón.",
        image: "/proy-1.jpeg",
        video: "/proy1.mp4",
        status: "En ejecución"
    },
    {
        title: "Fortalecimiento de los Servicios Públicos (Agua y Electricidad)",
        description: "Bajo el esquema de Municipio Saludable, se están ejecutando proyectos de optimización en conjunto con la Gobernación: 1. Sustitución de colectores: Reemplazo de tuberías de aguas servidas en sectores críticos del centro histórico y la zona oeste. 2. Iluminación LED: Instalación de luminarias de última tecnología en las 7 parroquias del municipio para reforzar la seguridad nocturna y el ahorro energético.",
        image: "/proy-2.jpeg",
        video: "/proy2.mp4",
        status: "En ejecución"
    },
    {
        title: "Rehabilitación del Centro Histórico y Espacios Públicos",
        description: "Como parte de su Plan de Gobierno Coro Patrimonio Mundial, se están desarrollando obras de preservación y ornato: 1.Restauración de fachadas: Mantenimiento de las casonas coloniales y áreas peatonales del casco histórico (Patrimonio de la Humanidad). 2. Plazas y parques: Recuperación de espacios de esparcimiento para fomentar el turismo y la economía local, alineado con las metas de desarrollo sustentable del municipio.",
        image: "/proy-3.jpeg",
        video: "/proy3.mp4",
        status: "En ejecución"
    }
];

export default function ProjectsSection() {
    return (
        <section className="py-24 bg-white relative">
            <div className="container mx-auto px-4 text-center">
                <h2 className="section-title">Proyectos en nuestra comunidad</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-left">
                    {PROJECTS.map((project) => (
                        <div key={project.title} className="group bg-white border border-gray-100 rounded-eight overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                            <div className="relative h-[450px] overflow-hidden">
                                {project.video ? (
                                    <video
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        preload="auto"
                                        poster={project.image}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    >
                                        <source src={project.video} type="video/mp4" />
                                        Tu navegador no soporta el elemento de video.
                                    </video>
                                ) : (
                                    <Image
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        src={project.image}
                                        fill
                                    />
                                )}
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-brand-dark font-bold text-[10px] px-3 py-1 rounded-full shadow-sm">
                                    {project.status}
                                </div>
                            </div>
                            <div className="p-8 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold text-brand-dark mb-4 group-hover:text-brand-blue transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-gray-500 mb-6 leading-relaxed flex-grow">
                                    {project.description}
                                </p>
                                <Link
                                    href="/proyectos"
                                    className="text-brand-blue font-bold text-xs uppercase tracking-widest flex items-center group-hover:translate-x-1 transition-transform"
                                >
                                    Ver más detalles
                                    <ArrowUpRight className="ml-1 w-3 h-3" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16">
                    <Link
                        href="/proyectos"
                        className="border-2 border-brand-green text-brand-green hover:bg-brand-green hover:text-white px-12 py-3 rounded-eight font-bold transition-all inline-block shadow-sm"
                    >
                        Ver todos los proyectos
                    </Link>
                </div>
            </div>
        </section>
    );
}
