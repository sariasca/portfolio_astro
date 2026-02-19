import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "Mi Portafolio",
    images: ["/projectImages/portafolio_web.webp"],
    description: "Sitio web personal desarrollado con Astro, React y Tailwind CSS",
    tags: ["Portafolio", "Web", "Frontend"],
    technologies: ["HTML", "Astro", "React", "TailwindCSS", "JavaScript", "TypeScript", "CSS"],  
  },
  {
    id: 2,
    title: "Web Traspaso de Negocios",
    images: ["/projectImages/negociotraspaso_web_1.webp", "/projectImages/negociotraspaso_web_2.webp"],
    description: `Solución web Fullstack para cliente real. Catálogo de negocios, formularios de contacto,
     panel de administración y despliegue completo.`,
    tags: ["Full Stack", "Web Real", "Cliente", "API REST"],
    technologies: ["Vite", "React", "TailwindCSS", "Node.js", "MongoDB", "Express"],
    link: "https://negocioentraspaso.com/"
  },
  {
    id: 3,
    title: "Editor de texto estilo Google Docs",
    images: ["/projectImages/editor_web.webp"],
    description: `Un editor de texto minimalista basado en Tiptap, con soporte para exportación a PDF 
    y posibilidad de insertar imágenes mediante URL.`,
    tags: ["Editor de texto", "Herramienta de productividad", "Frontend"],
    technologies: ["React", "JavaScript"],
    link: "https://editordetextosimple.netlify.app/"
  },
  {
    id: 4,
    title: "Aplicacion de gestión de tareas",
    images: ["/projectImages/taskapp/taskapp_1.webp", "/projectImages/taskapp/taskapp_2.webp", "/projectImages/taskapp/taskapp_3.webp"],
    description: `Aplicación web de gestión de tareas con funcionalidades como creación, edición, 
    eliminación y marcado de tareas como completadas.`,
    tags: ["Aplicación Web", "Full Stack", "Tareas", "API REST"],
    technologies: ["Vite", "React", "JavaScript", "TypeScript", "Spring", "PostgreSQL"],
    link: "https://taskapp-sariasca.netlify.app/",
    apiDoc: {
      url: "/docs/task-manager/index.html",
      label: "Ver Documentación API"
    }
  }
];