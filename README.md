# Portafolio — Francisco Del Valle

Sitio personal de **Francisco Del Valle**, Senior Software Engineer especializado en plataformas de
trading e infraestructura bursátil.

Es una sola página con secciones ancladas, en **español e inglés**, con **tema claro y oscuro**
persistidos en `localStorage`. Todo el contenido es estático: no hay data fetching ni backend.

## Stack

- **React 17** con Create React App (`react-scripts` 5)
- CSS propio con design tokens en variables CSS (`src/site/styles/site.css`)
- `react-icons` (Phosphor y Simple Icons)
- Fondo de partículas en un `<canvas>` propio, sin librerías
- Sin router: navegación por anclas y `scroll-behavior: smooth`

## Estructura

```
src/
  App.js                       → providers + <Site />
  site/
    Site.jsx                   → composición de la página
    context/I18nContext.js     → { lang, setLang, t, L }   (es | en)
    context/ThemeContext.js    → { theme, toggleTheme }    (dark | light)
    data/content.js            → todo el contenido: textos es/en, trayectoria, casos, stack
    styles/site.css            → tokens y estilos
    components/                → Header, Hero, StatsBand, About, Timeline, Projects,
                                 CaseStudyModal, Stack, Contact, Footer, ParticlesCanvas
public/
  Francisco-Del-Valle-Senior-Backend-Engineer-CV.pdf  → CV oficial servido por el sitio
```

Para cambiar textos, proyectos o tecnologías basta con editar `src/site/data/content.js`.

## CV

El CV oficial se encuentra en:

`public/Francisco-Del-Valle-Senior-Backend-Engineer-CV.pdf`

El archivo contiene texto seleccionable y puede abrirse o descargarse desde el hero del portfolio.
Al actualizarlo, se debe conservar este nombre para no romper el enlace público.

## Instalación y scripts

```bash
npm install
npm start                       # servidor de desarrollo en http://localhost:3000
npm test -- --watchAll=false    # tests
npm run build                   # build de producción en build/
```

## Despliegue

El sitio se publica en Netlify. La configuración vive en [`netlify.toml`](./netlify.toml):
comando `npm run build`, carpeta `build`, Node 18, `GENERATE_SOURCEMAP=false` (para no publicar el
código fuente), caché larga para `/static/*` y un redirect `/*` → `/index.html`.

Se puede desplegar conectando el repositorio, o arrastrando la carpeta `build` a Netlify Drop.

## Pendientes conocidos

- **Imagen social**: falta crear una imagen Open Graph de 1200×630 y declarar `og:image` /
  `twitter:image` en `public/index.html` (hay un TODO en el archivo).
- **Formulario de contacto**: hoy abre el cliente de correo del visitante mediante `mailto:`. Si en
  el futuro se quiere envío real desde el navegador, hay que conectar Formspree, EmailJS o una
  función serverless.
- **Dominio**: `public/index.html` apunta a `https://franciscodelvalle.netlify.app/` en `og:url`;
  actualizar si se configura un dominio propio.

## Código heredado

`src/components/`, `src/style.css` y `src/App.css` son de la versión anterior del portafolio y **ya
no se usan**: no son alcanzables desde `src/App.js` ni entran en el bundle. Se conservan por ahora
como referencia y pueden eliminarse junto con las dependencias que solo ellos usaban
(`react-router-dom`, `react-tsparticles`, `typewriter-effect`, `react-pdf`, `bootstrap`,
`react-bootstrap`, `react-github-calendar`, `react-parallax-tilt`).
