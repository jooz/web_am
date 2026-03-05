export interface Ordenanza {
    id: string;
    title: string;
    date: string;
    category: string;
    description: string;
    image: string;
    pdfUrl: string;
}

export const ORDENANZAS: Ordenanza[] = [
    {
        id: "1",
        title: "Ordenanza Superintendencia Tributaria",
        date: "2025-10-15",
        category: "Tributos",
        description: "Creación, Funcionamiento y Regulación de la Superintendencia Integrada de Tributos del Municipio Miranda",
        image: "/proy-2.jpeg", // Using existing project images for mockup
        pdfUrl: "documentos/ordenanzas/ORDENANZA SUPERINTENDENCIA TRIBUTARIA.pdf"
    }
];
