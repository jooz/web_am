export interface Gaceta {
    id: string;
    number: string;
    date: string;
    title: string;
    pdfUrl: string;
}

export const GACETAS: Gaceta[] = [
    {
        id: "1",
        number: "Extraordinaria N° 450",
        date: "2024-02-15",
        title: "Presupuesto de Ingresos y Gastos Ejercicio Fiscal 2024",
        pdfUrl: "#"
    },
    {
        id: "2",
        number: "Ordinaria N° 128",
        date: "2024-01-10",
        title: "Nombramientos de tren ejecutivo y direcciones municipales",
        pdfUrl: "#"
    },
    {
        id: "3",
        number: "Extraordinaria N° 449",
        date: "2023-12-28",
        title: "Reforma Parcial de la Ordenanza de Actividades Económicas",
        pdfUrl: "#"
    }
];
