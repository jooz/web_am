import { Facebook, Instagram } from "lucide-react";

export default function FloatingSocialMenu() {
    const socialLinks = [
        {
            name: "Facebook",
            icon: <Facebook className="w-6 h-6" />,
            color: "bg-[#1877F2]",
            href: "https://www.facebook.com/alcaldiademirandacoro/"
        },
        {
            name: "Instagram",
            icon: <Instagram className="w-6 h-6" />,
            color: "bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]",
            href: "https://www.instagram.com/alcaldiademirandacoro/"
        },
    ];

    return (
        <div className="fixed right-6 bottom-24 flex flex-col space-y-3 z-[100]">
            {socialLinks.map((social) => (
                <a
                    key={social.name}
                    href={social.href}
                    target="_blank" // Abre en pestaña nueva
                    rel="noopener noreferrer" // Seguridad
                    className={`${social.color} w-12 h-12 rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 md:hover:scale-125 hover:-translate-x-2 transition-all duration-300 ring-2 ring-white/20`}
                    title={social.name}
                >
                    {social.icon}
                </a>
            ))}
        </div>
    );
}