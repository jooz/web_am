import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

const SERVICES = [
    {
        title: "Atencion Social",
        subtitle: "Haz tu vida más fácil",
        image: "/atencion_ciudadano.jpeg",
        href: "/atencionSocial"
    },
    {
        title: "Atención al ciudadano",
        subtitle: "Realiza tu reporte o denuncia",
        image: "/servicio-atencion.jpg",
        href: "/atencion-ciudadano"
    },
    {
        title: "Turismo y recreación",
        subtitle: "Descubre todos los rincones",
        image: "/servicio-turismo.jpg",
        href: "/turismo"
    }
];

export default function ServicesSection() {
    return (
        <section className="bg-white py-20 border-t border-b">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-16 text-brand-dark">
                    ¡Disfruta de todo lo que Miranda tiene para ti!
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {SERVICES.map((service) => (
                        <Link
                            key={service.title}
                            href={service.href}
                            className="relative h-96 group overflow-hidden rounded-eight cursor-pointer shadow-lg block"
                        >
                            <Image
                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                src={service.image}
                                alt={service.title}
                                fill
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 flex flex-col justify-end">
                                <p className="text-white/80 text-sm font-medium mb-1">{service.subtitle}</p>
                                <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-tight">{service.title}</h3>
                                <div className="w-12 h-12 border-2 border-white/50 rounded-full flex items-center justify-center text-white group-hover:bg-white group-hover:text-brand-blue transition-all duration-300 transform group-hover:scale-110">
                                    <ChevronRight className="w-6 h-6" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
