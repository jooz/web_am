"use client";

import { useState, useEffect, useRef } from "react";
import { MessageSquare, X, Send, Bot, User, Loader2 } from "lucide-react";
import Image from "next/image";

export default function ChatBubble() {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [config, setConfig] = useState<any>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        if (isOpen) {
            scrollToBottom();
        }
    }, [messages, isOpen]);

    useEffect(() => {
        const fetchConfig = async () => {
            try {
                const adminUrl = process.env.NEXT_PUBLIC_ADMIN_API_URL || "http://localhost:3000";
                const res = await fetch(`${adminUrl}/api/chat-config`);
                const data = await res.json();
                setConfig(data);

                // Si hay mensaje de bienvenida y no hay mensajes aún, añadirlo
                if (data.welcomeMessage && messages.length === 0) {
                    setMessages([{ role: "assistant", content: data.welcomeMessage }]);
                }
            } catch (err) {
                console.error("Error fetching chat config:", err);
            }
        };
        fetchConfig();
    }, []);

    const toggleChat = () => setIsOpen(!isOpen);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!message.trim() || isLoading) return;

        const userMsg = { role: "user", content: message };
        const newMessages = [...messages, userMsg];
        setMessages(newMessages);
        setMessage("");
        setIsLoading(true);

        try {
            const adminUrl = process.env.NEXT_PUBLIC_ADMIN_API_URL || "http://localhost:3000";
            const response = await fetch(`${adminUrl}/api/chat`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ messages: newMessages }),
            });

            if (!response.ok) throw new Error("API Error");

            const data = await response.json();
            if (data.reply) {
                setMessages([...newMessages, { role: "assistant", content: data.reply }]);
            } else {
                setMessages([...newMessages, { role: "assistant", content: "Lo siento, tuve un problema al procesar tu mensaje." }]);
            }
        } catch (err) {
            setMessages([...newMessages, { role: "assistant", content: "Error de conexión con el asistente. Por favor, intenta más tarde." }]);
            console.error("Chat Error:", err);
        } finally {
            setIsLoading(false);
        }
    };

    // Si el chat está desactivado en la configuración, no mostrar nada
    if (config && config.enabled === false) return null;

    return (
        <div className="fixed bottom-6 right-6 z-[110] flex flex-col items-end">
            {/* Chat Window */}
            {isOpen && (
                <div className="mb-4 w-[350px] sm:w-[400px] h-[550px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-100 animate-in fade-in slide-in-from-bottom-4 duration-300">
                    {/* Header */}
                    <div className="bg-[#1a2b4b] p-4 flex items-center justify-between text-white">
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
                                <h3 className="font-bold text-sm">{config?.botName || "Asistente Virtual"}</h3>
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
                    <div className="flex-1 p-4 overflow-y-auto bg-gray-50 flex flex-col space-y-4 shadow-inner">
                        {messages.map((msg, idx) => (
                            <div key={idx} className={`flex items-start space-x-2 ${msg.role === 'user' ? 'justify-end' : ''}`}>
                                {msg.role === 'assistant' && (
                                    <div className="w-8 h-8 rounded-full bg-brand-blue/10 flex items-center justify-center flex-shrink-0">
                                        <Bot className="w-5 h-5 text-[#1a2b4b]" />
                                    </div>
                                )}
                                <div className={`p-3 rounded-2xl shadow-sm border ${msg.role === 'user'
                                    ? 'bg-[#1a2b4b] text-white rounded-tr-none border-blue-900'
                                    : 'bg-white text-gray-700 rounded-tl-none border-gray-200'
                                    } max-w-[85%] whitespace-pre-wrap`}>
                                    <p className="text-sm leading-relaxed">
                                        {msg.content}
                                    </p>
                                </div>
                                {msg.role === 'user' && (
                                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                                        <User className="w-5 h-5 text-gray-500" />
                                    </div>
                                )}
                            </div>
                        ))}
                        {isLoading && (
                            <div className="flex items-start space-x-2">
                                <div className="w-8 h-8 rounded-full bg-brand-blue/10 flex items-center justify-center flex-shrink-0">
                                    <Bot className="w-5 h-5 text-[#1a2b4b]" />
                                </div>
                                <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 flex items-center gap-2 text-gray-400 text-sm">
                                    <Loader2 className="w-4 h-4 animate-spin" />
                                    <span>Escribiendo...</span>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <div className="p-4 border-t border-gray-100 bg-white shadow-2xl">
                        <form
                            onSubmit={handleSubmit}
                            className="flex items-center space-x-2"
                        >
                            <input
                                type="text"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Escribe tu consulta aquí..."
                                className="flex-1 bg-gray-100 border-none rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-[#1a2b4b] outline-none transition-all placeholder:text-gray-400"
                                disabled={isLoading}
                            />
                            <button
                                type="submit"
                                className="bg-[#1a2b4b] text-white p-2 rounded-xl hover:bg-[#2a3b5b] transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                                disabled={isLoading || !message.trim()}
                            >
                                <Send className="w-4 h-4" />
                            </button>
                        </form>
                        <p className="text-[10px] text-gray-400 mt-2 text-center leading-tight">
                            Gestión que construye.
                        </p>
                    </div>
                </div>
            )}

            {/* Floating Toggle Button */}
            <button
                onClick={toggleChat}
                className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 ${isOpen
                    ? "bg-white text-gray-800 scale-90 rotate-90"
                    : "bg-[#1a2b4b] text-white hover:scale-110 shadow-lg"
                    } group ring-4 ring-transparent hover:ring-[#1a2b4b]/20`}
            >
                {isOpen ? (
                    <X className="w-6 h-6" />
                ) : (
                    <div className="relative">
                        <MessageSquare className="w-7 h-7" />
                        <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 border-2 border-[#1a2b4b] rounded-full animate-pulse"></span>
                    </div>
                )}
            </button>
        </div>
    );
}
