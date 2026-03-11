export interface SistemaExterno {
    id: string;
    title: string;
    description: string;
    url: string;
    category: string;
    image: string;
}

export const SISTEMAS_EXTERNOS: SistemaExterno[] = [
    {
        id: "1",
        title: "SERDECO - Sistema de Facturación",
        description: "Sistema de facturación de Aseo Urbano y Relleno Sanitario del Municipio Miranda",
        url: "https://serdeco.com.ve/",
        category: "Aseo Urbano",
        image: "/sederco.jpeg"
    },
    {
        id: "2",
        title: "SIGAT - Superintendencia Tributaria",
        description: "Superintendencia Integrada de Tributos del Municipio Miranda del Estado Falcón",
        url: "https://miranda.sigat.net/",
        category: "Tributos",
        image: "/STM.png"
    }
];
