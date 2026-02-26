import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const footerLinks = [
        { name: "Inicio", href: "/" },
        { name: "Alcaldía", href: "/alcaldia" },
        { name: "Trámites", href: "/tramites" },
        { name: "Turismo", href: "/turismo" },
        { name: "El Municipio", href: "/municipio" },
        { name: "Noticias", href: "/noticias" },
        { name: "Atención", href: "/atencion-ciudadano" },
    ];

    return (
        <footer className="bg-brand-dark text-white pt-16 pb-8">
            <div className="container mx-auto px-4 text-center">
                <div className="mb-8">
                    <Image
                        src="/logomiranda.jpeg"
                        alt="Logo Alcaldía de Miranda"
                        width={80}
                        height={80}
                        className="mx-auto rounded-full p-1 bg-white"
                    />
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-12 text-sm uppercase font-semibold">
                    {footerLinks.map((link) => (
                        <Link key={link.name} href={link.href} className="hover:text-brand-yellow transition-colors">
                            {link.name}
                        </Link>
                    ))}
                </div>

                <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center text-xs opacity-70">
                    <p>© {currentYear} Alcaldía del Municipio Miranda. Todos los derechos reservados.</p>
                    <p className="mt-4 md:mt-0">Diseñado para la gestión transparente y eficiente.</p>
                </div>
            </div>
        </footer>
    );
}
