import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import "./globals.css";

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Alcaldía del Municipio Miranda - Gestión que Construye",
  description: "Portal institucional de la Alcaldía del Municipio Miranda, Coro, Falcón. Trámites, noticias y servicios al ciudadano.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${publicSans.variable} font-sans antialiased bg-gray-50`}>
        {children}
      </body>
    </html>
  );
}
