import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const PROJECTS = [
    {
        title: "Servicio de psicología",
        description: "Brindamos apoyo integral para el bienestar emocional de los mirandinos con personal calificado...",
        image: "/proyecto-psicologia.jpg",
        status: "Activo"
    },
    {
        title: "Plan Coro Bonito",
        description: "Plan “Coro Bonito” realiza su primera entrega este 2025 El plan “Coro Bonito” inicia este 2025 con todo el ímpetu que el alcalde Henry Hernández le imprime.",
        image: "/chamos.jpeg",
        status: "En ejecución"
    },
    {
        title: "Programa PAM Miranda",
        description: "Asistencia médica gratuita las 24 horas y entrega periódica de medicamentos a domicilio...",
        image: "/proyecto-pam.jpg",
        status: "Permanente"
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
                            <div className="relative h-56 overflow-hidden">
                                <Image
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    src={project.image}
                                    fill
                                />
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
