"use client";

import { useState } from "react";
import { MessageSquare, X, Send, Bot, User } from "lucide-react";
import Image from "next/image";

export default function ChatBubble() {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState("");

    const toggleChat = () => setIsOpen(!isOpen);

    return (
        <div className="fixed bottom-6 right-6 z-[110] flex flex-col items-end">
            {/* Chat Window */}
            {isOpen && (
                <div className="mb-4 w-[350px] sm:w-[400px] h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-100 animate-in fade-in slide-in-from-bottom-4 duration-300">
                    {/* Header */}
                    <div className="bg-brand-blue p-4 flex items-center justify-between text-white">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden">
                                <Image
                                    src="/logomiranda.jpeg"
                                    alt="Logo Miranda"
                                    width={32}
                                    height={32}
                                    className="object-contain"
                                />
                            </div>
                            <div>
                                <h3 className="font-bold text-sm">Asistente Virtual</h3>
                                <div className="flex items-center space-x-1">
                                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                                    <span className="text-[10px] opacity-90">En línea ahora</span>
                                </div>
                            </div>
                        </div>
                        <button
                            onClick={toggleChat}
                            className="p-1 hover:bg-white/20 rounded-lg transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Messages Area */}
                    <div className="flex-1 p-4 overflow-y-auto bg-gray-50 flex flex-col space-y-4">
                        {/* Welcome Message */}
                        <div className="flex items-start space-x-2">
                            <div className="w-8 h-8 rounded-full bg-brand-blue/10 flex items-center justify-center flex-shrink-0">
                                <Bot className="w-5 h-5 text-brand-blue" />
                            </div>
                            <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 max-w-[80%]">
                                <p className="text-sm text-gray-700">
                                    ¡Hola! Soy el asistente inteligente de la Alcaldía de Miranda. ¿En qué puedo ayudarte hoy?
                                    Puedo informarte sobre trámites, noticias o servicios municipales.
                                </p>
                            </div>
                        </div>

                        {/* Sample User Message */}
                        <div className="flex items-start space-x-2 justify-end">
                            <div className="bg-brand-blue text-white p-3 rounded-2xl rounded-tr-none shadow-md max-w-[80%]">
                                <p className="text-sm">¿Cuáles son las noticias del día?</p>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                                <User className="w-5 h-5 text-gray-500" />
                            </div>
                        </div>
                    </div>

                    {/* Input Area */}
                    <div className="p-4 border-t border-gray-100 bg-white">
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                // Logic for sending message will go here
                                setMessage("");
                            }}
                            className="flex items-center space-x-2"
                        >
                            <input
                                type="text"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Escribe tu consulta aquí..."
                                className="flex-1 bg-gray-100 border-none rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-brand-blue outline-none transition-all"
                            />
                            <button
                                type="submit"
                                className="bg-brand-blue text-white p-2 rounded-xl hover:bg-brand-dark transition-colors shadow-lg shadow-brand-blue/20"
                            >
                                <Send className="w-4 h-4" />
                            </button>
                        </form>
                        <p className="text-[10px] text-gray-400 mt-2 text-center">
                            Desarrollado con IA para el Municipio Miranda
                        </p>
                    </div>
                </div>
            )}

            {/* Floating Toggle Button */}
            <button
                onClick={toggleChat}
                className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 ${isOpen
                        ? "bg-white text-brand-dark scale-90 rotate-90"
                        : "bg-brand-blue text-white hover:scale-110 hover:shadow-brand-blue/40"
                    } group group-hover:ring-4 ring-brand-blue/10`}
            >
                {isOpen ? (
                    <X className="w-6 h-6" />
                ) : (
                    <div className="relative">
                        <MessageSquare className="w-7 h-7" />
                        <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 border-2 border-brand-blue rounded-full"></span>
                    </div>
                )}
            </button>
        </div>
    );
}
