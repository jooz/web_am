# Documento de Requisitos del Producto (PRD) - Portal Alcaldía de Miranda

## 1. Visión General
Desarrollo del portal institucional de la **Alcaldía del Municipio Miranda (Coro, Falcón)**. La plataforma busca modernizar la interacción entre el ciudadano y el gobierno municipal, centralizando servicios, noticias y gestión bajo una estética premium y futurista (Glassmorphism, gradientes suaves y animaciones fluidas).

**Identidad:** Fusión entre modernidad tecnológica y el valor histórico del Patrimonio de la Humanidad (Coro).

---

## 2. Estado Actual de la Implementación
El proyecto se encuentra en una fase avanzada de estructura y maquetación de secciones clave, con un enfoque renovado en la atención social y ciudadana directa.

### Módulos Implementados (Frontend):
*   **Home Dinámico:** Secciones de Hero (Carousel), Noticias, Servicios, Desarrollo Municipal y Proyectos.
*   **Sistema de Navegación:** TopBar (Contacto), Header (Navegación Principal), Footer Institucional.
*   **Rutas de Usuario:** 
    *   `/noticias`: Feed de noticias institucionales.
    *   `/atencionSocial`: Portal para el registro y consulta de ayudas sociales y donaciones médicas.
    *   `/atencion-ciudadano`: Sistema para el registro de denuncias y reportes ciudadanos.
    *   `/turismo`: Promoción del casco histórico y atractivos locales.
    *   `/proyectos`: Galería de obras en ejecución.
*   **Componentes de Interacción:** 
    *   `ChatBubble`: Asistente virtual con IA.
    *   `FloatingSocialMenu`: Acceso rápido a redes sociales.

---

## 3. Arquitectura de Archivos y Carpetas (Actualizado)
Se sigue un patrón de **Clean Architecture** adaptado a Next.js (App Router). Se han eliminado los módulos PAM y SEMAT para centralizar la gestión en las áreas de Atención.

```bash
/
├── app/                  # Rutas y páginas de la aplicación
│   ├── atencion-ciudadano/ # Registro de denuncias e incidencias
│   ├── atencionSocial/   # Ayudas sociales y donaciones médicas
│   ├── noticias/         # Blog y noticias municipales
│   ├── turismo/          # Contenido cultural y turístico
│   ├── layout.tsx        # Layout raíz (Fuentes, Providers)
│   └── page.tsx          # Landing page principal
├── components/           # Componentes reutilizables
│   ├── home/             # Secciones específicas del Landing Page
│   ├── layout/           # Elementos persistentes (Header, Footer, Nav)
│   └── ui/               # Componentes atómicos (Botones, Cards, Inputs)
├── prisma/               # Configuración de Base de Datos y Modelos
│   └── schema.prisma     # Definición de la estructura de datos
├── public/               # Activos estáticos (Imágenes, SVGs, Logos)
├── store/                # Gestión de estado global (Zustand)
└── tsconfig.json         # Configuración de TypeScript
```

---

## 4. Estructura de Base de Datos (Mapeo)
La base de datos en **PostgreSQL** refleja el nuevo modelo de gestión directa:

| Sección UI | Modelo Prisma | Propósito |
| :--- | :--- | :--- |
| **Atención Social** | `SocialAssistance` | Registro de donaciones médicas y ayudas con gestión de estados (enums). |
| **Atención Ciudadana** | `Report` | Denuncias de servicios públicos con prioridad y evidencias. |
| **Chatbot IA** | `KnowledgeBase` | Base de conocimientos para respuestas automáticas y escalables. |
| **Noticias** | `News` | Blog institucional con categorías y slugs únicos. |
| **Proyectos** | `Project` | Seguimiento de obras públicas. |
| **Gestión de Identidad** | `User` | Soporte para múltiples roles (Admin, Operador, Ciudadano). |

---

## 5. Áreas de la Página y Funcionalidad
### 5.1 Atención Social (Nueva Centralización)
*   **Registro de Solicitudes:** Formulario para ciudadanos que requieren ayudas médicas o donaciones.
*   **Consulta de Estado:** Sistema mediante número de cédula o código para verificar el estatus de la donación/ayuda.

### 5.2 Atención al Ciudadano
*   **Denuncias:** Canal oficial para reportar fallas en servicios públicos, infraestructura o quejas ciudadanas.
*   **Seguimiento:** Capacidad de adjuntar evidencias (fotos) y recibir notificaciones de progreso.

---

## 6. Stack Tecnológico Operativo
*   **Framework:** Next.js 16.1.6
*   **Base de Datos:** PostgreSQL con Prisma ORM (Tipado estricto con Enums).
*   **Identidad:** Soporte escalable para NextAuth con roles diferenciados.
*   **IA:** Modelo de datos preparado para integración de RAG (Retrieval-Augmented Generation) vía `KnowledgeBase`.

---

## 7. Próximas Implementaciones
1.  **Refactorización de Modelos:** Actualizar `schema.prisma` para incluir `SocialAssistance` y `CitizenReport`.
2.  **Formularios Inteligentes:** Implementar validaciones y carga de archivos en las áreas de atención.
3.  **Dashboard Admin:** Panel para que la Alcaldía procese las ayudas y denuncias.