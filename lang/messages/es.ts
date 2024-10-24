const data = {
  home: {
    title: 'react-intl-lil',
    subtitle:
      'La internacionalización estática más sencilla para React y Next.js',
    developer: 'Desarrollado por ',
    sum: {
      title: 'Resumen',
      data: 'En esta se guía se muestra la implementación de react-intl-lil en un sitio web estático desarrollado con next js y typescript. Esta pagina web fue desarrollado con las tecnologías mencionadas en esta guía, puedes encontrar el código fuente en el siguiente ',
      repository: 'repositorio',
    },
    inst: {
      title: 'Instalación',
      data: 'react-intl-lil se puede instalar fácilmente mediante:',
    },
    config: {
      title: 'Configuración',
      data: 'react-intl-lil solo necesita los siguientes archivos',
      files: [
        {
          data: 'Lenguaje, estos archivos contendrán la información correspondiente a cada idioma',
          file: '@/lang/messages/es.ts \n\nconst data = { \n  home: { \n    title: "Bienvenido a react-intl-lil", \n    // Soporte para {{valores dinámicos}} \n    version: "Versión actual: {{version}}", \n    // Soporte para arreglos\n    features:[ \n      {title:"Multi lenguaje", data:"Soporte para uno o mas lenguajes"} \n      {title:"Local Storage", data:"Para persistencia entre sesiones"} \n    ] \n  }, \n};\nexport default data;',
        },
        {
          data: 'Configuración, este archivo tendrá la siguiente estructura y se utiliza para seleccionar las siguientes propiedades:',
          file: '@/lang/config.ts \n\nimport { LangConfigType } from "react-intl-lil"; \n\n// Importa tus archivos de idioma \nimport es from "./messages/es"; \nimport en from "./messages/en"; \n\nexport const langConfig: LangConfigType = { \n  defaultLang: "es", \n  // mode: "local" para local storage \n  // mode: "single" para soporte de un solo idioma \n  mode: "local", \n  languages: [{ es: es }, { en: en }],\n};',
        },
        {
          data: 'Contenedor, este deberá ubicarse en la raíz del proyecto y deberá incluir una referencia hacia el archivo de configuración',
          file: '@/app/layout.tsx \n\n... \nimport { LangProvider } from "react-intl-lil"; \nimport { langConfig } from "@/lang/config"; \n\nexport default function RootLayout({ \n  children, \n}: Readonly<{ \n  children: React.ReactNode; \n}>) { \n   return ( \n    <html lang={langConfig.defaultLang}> \n      <body > \n        <LangProvider getLanguageConfig={langConfig}> \n          {children} \n        </LangProvider> \n      </body> \n    </html> \n  ); \n}',
        },
        {
          data: 'Eso es todo lo que se necesita para que su proyecto estático admita varios idiomas. Para obtener strings o arrays para cada idioma, simplemente use el hook useLanguage dentro de un componente.',
          file: '"use client"; \n\nimport { useLanguage } from "react-intl-lil"; \n\n const UseHooks = () => { \n  const { gs, ga, getLanguage, setLanguage } = useLanguage(); \n\n  return ( \n    <section> \n      {/* esto devuelve el lenguaje actual */} \n      <h1>{getLanguage}</h1> \n\n      {/* este botón cambia el lenguaje actual */} \n      <button onClick={()=>setLanguage("en")}>Cambiar Lenguaje</button> \n\n      {/* esto devuelve un string */} \n      <h2>{gs("home.title")}</h2> \n\n      {/* esto devuelve un string con un valor dinámico*/} \n      <p>{gs("home.version", { version: "1.1.1" })}</p> \n\n      {/* esto devuelve un array */} \n      <ul> \n        {ga("home.features").map((item) => ( \n          <li key={item.title}> \n            <h2>{item.title}</h2> \n            <p>{item.data}</p> \n          </li> \n        ))} \n      </ul> \n    </section> \n  ); \n}; \n\nexport default UseHooks; \n',
        },
      ],
    },
    final:
      'Espero que este paquete sea de utilidad para ti. Me estoy quedando sin energía pero no sin ganas. Si quieres ayudarme a seguir en mi camino, considera regalarme un café',
  },
};

export default data;
