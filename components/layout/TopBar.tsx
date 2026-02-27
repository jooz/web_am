import Link from "next/link";

export default function TopBar() {
    return (
        <div className="bg-brand-dark text-white py-2 px-4 md:px-12 text-xs flex justify-between items-center">
            <div className="flex items-center space-x-4">

            </div>
            <div className="hidden md:flex space-x-6">
                <Link href="/gacetas" className="hover:underline">Gacetas Municipales</Link>
                <Link href="/ordenanzas" className="hover:underline">Ordenanzas</Link>
                <div className="flex items-center space-x-4">
                    <span className="text-yellow-300">Número de emergencia: <strong>0268-2545624</strong></span>
                </div>
            </div>
        </div>
    );
}
