"use client";

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

    const navLinks = [
        { name: "Inicio", href: "/" },
        { name: "Alcaldía", href: "#", hasDropdown: true },
        { name: "Trámites", href: "#", hasDropdown: true },
        { name: "M. Miranda", href: "/municipio", hasDropdown: true },
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
                            className="mr-2 object-contain rounded-full"
                        />
                        <span className="ml-1 text-lg md:text-xl font-bold text-brand-dark tracking-tight hidden sm:block">
                            Alcaldía de Miranda
                        </span>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center space-x-6">
                    {navLinks.map((link) => (
                        <div key={link.name} className="group relative">
                            {link.hasDropdown ? (
                                <button className="nav-link flex items-center">
                                    {link.name} <ChevronDown className="w-4 h-4 ml-1" />
                                </button>
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
                    <div className="flex flex-col p-4 space-y-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-gray-700 font-medium py-2 border-b border-gray-50 flex justify-between items-center"
                                onClick={closeMobileMenu}
                            >
                                {link.name}
                                {link.hasDropdown && <ChevronDown className="w-4 h-4" />}
                            </Link>
                        ))}

                    </div>
                </div>
            )}
        </header>
    );
}
