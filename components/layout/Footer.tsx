import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    const currentYear = new Date().getFullYear();



    return (
        <footer className="bg-brand-dark text-white pt-8 pb-8">
            <div className="container mx-auto px-4 text-center">
                <div className="mb-4">
                    <Image
                        src="/logomiranda.jpeg"
                        alt="Logo Alcaldía de Miranda"
                        width={80}
                        height={80}
                        className="mx-auto"
                    />
                </div>

                <div className="mb-2">
                    <h2 className="text-2xl font-bold mb-2">Alcaldía del Municipio Miranda</h2>
                    <p className="text-lg">Correo: gobiernoquetransforma2026@gmail.com</p>
                    <p className="text-lg">Teléfono: +58 0268-2545624</p>
                    <p className="text-lg">Dirección: Calle Principal, Coro, Falcón, Venezuela</p>
                </div>



                <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center text-xs opacity-70">
                    <p>© {currentYear} Alcaldía del Municipio Miranda. Todos los derechos reservados.</p>
                    <p className="mt-4 md:mt-0">Diseñado para la gestión transparente y eficiente.</p>
                    <p className="mt-4 md:mt-0">Desarrollado por Grupo Jooz (+58 414-6274986, +58 412-7924589).</p>
                </div>
            </div>
        </footer>
    );
}
