# Portafolio — Francisco Del Valle

## POC: AI-Assisted Spec-Driven Development

Nuevo caso ES/EN en «Casos», con filtro POC / Ingeniería y enlace directo
`/#poc-ai-sdd`. Conserva Trading Workstation y su galería. El contenido vive en
`src/site/data/aiSdd.js`; `AiSddStudy.jsx` presenta el flujo y separa evidencias de
limitaciones. La portada SVG es un diagrama conceptual, no una captura de una app.

La ficha resume el informe de evidencia de Brain Projects en la revisión `eb0bdf3`.
La documentación no tiene acceso público (GitHub devuelve 404 sin autenticación), por lo
que se omiten enlaces inaccesibles; no se cambia la visibilidad del repositorio.
No afirma mejoras de productividad, adopción de equipo ni conexión con Jira.
Las pruebas de la POC se citan desde ese informe; no son pruebas ejecutadas por el portfolio.

La rama `feat/ai-assisted-sdd-poc` parte de `main` después del merge de Trading Workstation
(PR #2). Un push a esta rama no acredita un despliegue de producción: depende de la
configuración de previews de Netlify y de la integración a la rama de producción.

## Incorporación de Trading Workstation

El proyecto propio Trading Workstation se incorpora sobre
`feat/trading-portfolio-narrative` del fork `fdelvallenuamx/portfoliobase`
(base `fd6a155`), que corresponde al diseño publicado en Netlify.
Conserva la narrativa, los filtros de casos y los grupos existentes.

La ficha incluye descripción ES/EN, Claude Design, SDD, arquitectura y resultados
del cierre documentado de la POC. Las tres imágenes `src/Assets/Projects/trading-workstation*.png`
son capturas reales del stack local del 2026-09-13, con datos simulados, sin enviar órdenes.
`gallery` admite imágenes con textos alternativos ES/EN y `mediaNote` describe su procedencia.

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
