import { MessageCircle, Facebook, Youtube, Twitter } from "lucide-react";

export default function FloatingSocialMenu() {
    const socialLinks = [
        { name: "WhatsApp", icon: <MessageCircle className="w-6 h-6" />, color: "bg-[#25D366]", href: "#" },
        { name: "Facebook", icon: <Facebook className="w-6 h-6" />, color: "bg-[#1877F2]", href: "#" },
        { name: "YouTube", icon: <Youtube className="w-6 h-6" />, color: "bg-[#FF0000]", href: "#" },
        { name: "Twitter", icon: <Twitter className="w-6 h-6" />, color: "bg-[#1DA1F2]", href: "#" },
    ];

    return (
        <div className="fixed right-6 bottom-24 flex flex-col space-y-3 z-[100]">
            {socialLinks.map((social) => (
                <a
                    key={social.name}
                    href={social.href}
                    className={`${social.color} w-12 h-12 rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-125 hover:-translate-x-2 transition-all duration-300 ring-2 ring-white/20`}
                    title={social.name}
                >
                    {social.icon}
                </a>
            ))}
        </div>
    );
}
