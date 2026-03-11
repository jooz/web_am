"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import { useUIStore } from "@/store/useUIStore";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export default function Header() {
    const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useUIStore();
    // Estado local para manejar qué submenú está abierto en la versión móvil
    const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

    const toggleSubmenu = (name: string) => {
        setOpenSubmenu(openSubmenu === name ? null : name);
    };

    const navLinks = [
        { name: "Inicio", href: "/" },
        {
            name: "Alcaldía",
            href: "#",
            hasDropdown: true,
            subLinks: [
                { name: "Misión", href: "/alcaldia/mision" },
                { name: "Visión", href: "/alcaldia/vision" },
                { name: "Directivos", href: "/alcaldia/organigrama" },
                { name: "Nuestro Alcalde", href: "/alcaldia/alcalde" },
            ]
        },
        /*{
            name: "Trámites", href: "#", hasDropdown: true,
            subLinks: [
                { name: "Terminal de Pasajero Pólicas Salas", href: "/terminal" },
            ]
        },*/
        {
            name: "M. Miranda",
            href: "#", // Cambiado a "#" porque ahora funciona como un contenedor de submenú
            hasDropdown: true,
            subLinks: [
                { name: "Municipio", href: "/municipio" },
                { name: "Efemérides", href: "/municipio/efemerides" },
                { name: "Símbolos", href: "/municipio/simbolos" },
            ]
        },
        { name: "Noticias", href: "/noticias" },
    ];

    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
                <div className="flex items-center">
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/logomiranda.jpeg"
                            alt="Logo Alcaldía de Miranda"
                            width={60}
                            height={60}
                            className="mr-2 object-contain"
                        />
                        <span className="ml-1 text-lg md:text-xl font-bold text-brand-dark tracking-tight hidden sm:block">
                            ALCALDÍA DE MIRANDA
                        </span>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center space-x-6">
                    {navLinks.map((link) => (
                        <div key={link.name} className="group relative py-2">
                            {link.hasDropdown ? (
                                <>
                                    <button className="nav-link flex items-center cursor-pointer">
                                        {link.name} <ChevronDown className="w-4 h-4 ml-1 group-hover:rotate-180 transition-transform duration-200" />
                                    </button>

                                    {/* Desktop Dropdown Menu */}
                                    {link.subLinks && (
                                        <div className="absolute left-0 top-full w-48 bg-white shadow-lg rounded-md overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left -translate-y-2 group-hover:translate-y-0 border border-gray-100">
                                            <div className="flex flex-col py-2">
                                                {link.subLinks.map((sublink) => (
                                                    <Link
                                                        key={sublink.name}
                                                        href={sublink.href}
                                                        className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                                                    >
                                                        {sublink.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </>
                            ) : (
                                <Link href={link.href} className={cn("nav-link", link.name === "Inicio" && "text-brand-blue")}>
                                    {link.name}
                                </Link>
                            )}
                        </div>
                    ))}
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="lg:hidden p-2 text-gray-700"
                    onClick={toggleMobileMenu}
                >
                    {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </nav>

            {/* Mobile Navigation Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg h-screen overflow-y-auto pb-20">
                    <div className="flex flex-col p-4">
                        {navLinks.map((link) => (
                            <div key={link.name} className="border-b border-gray-50 flex flex-col">
                                {link.hasDropdown ? (
                                    <>
                                        <button
                                            className="text-gray-700 font-medium py-3 flex justify-between items-center w-full text-left"
                                            onClick={() => toggleSubmenu(link.name)}
                                        >
                                            {link.name}
                                            <ChevronDown className={cn("w-4 h-4 transition-transform duration-200", openSubmenu === link.name && "rotate-180")} />
                                        </button>

                                        {/* Mobile Submenu Dropdown */}
                                        {openSubmenu === link.name && link.subLinks && (
                                            <div className="flex flex-col pl-4 pb-3 space-y-2 bg-gray-50/50">
                                                {link.subLinks.map((sublink) => (
                                                    <Link
                                                        key={sublink.name}
                                                        href={sublink.href}
                                                        className="text-gray-600 text-sm py-2 px-2 hover:text-blue-600 rounded-md"
                                                        onClick={closeMobileMenu}
                                                    >
                                                        {sublink.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    <Link
                                        href={link.href}
                                        className="text-gray-700 font-medium py-3 flex justify-between items-center"
                                        onClick={closeMobileMenu}
                                    >
                                        {link.name}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
}