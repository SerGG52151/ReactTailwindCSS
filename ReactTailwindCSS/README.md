# React + Vite + TypeScript

## Diseño actual

Hasta el momento, la página tiene un header fijo en la parte superior con fondo semitransparente, una barra lateral de navegación, una zona principal para las secciones de contenido y un footer que se sobrepobe al resto de componenetes.

El diseño de los componentes se mantuvo simple por el momento, con el potencial de ser mejorados con Hooks y Estados en un futuro. 

El layout de la página se mantuvo práctico, con visibilidad sencilla de los componentes en una sola pestaña. Se utilizaron principalmente colores índigo, azul, blanco y negro. Se recomienda visualizar la página sin modo oscuro para una mejor experiencia, la paleta de colores del modo oscuro es un punto a mejorar. 

## Utilidades de Tailwind usadas

- Tipografía y color: clases como `text-slate-700`, `text-slate-900`, `font-bold`, `text-xl`.
- Layout: `flex`, `flex-col`, `md:flex-row`, `container`, `items-center`, `justify-center`.
- Espaciado: `p-5`, `px-4`, `py-2`, `mb-4`, `mt-4`, `mx-auto`.
- Bordes y fondo: `bg-slate-100/50`, `bg-gray-100`, `border`, `border-slate-300`, `rounded`, `rounded-full`.
- Posicionamiento: `sticky`, `top-0`, `h-screen`, `overflow-auto`, `z-10`.
- Estados interactivos: `hover:text-slate-900`, `hover:bg-gray-200`, `transition`.

