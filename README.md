# Jesús Gabriel Hernández Gutiérrez

Portafolio profesional de un **Supervisor Senior de Producción**, Líder de Manufactura e Ingeniero Industrial. Contenido completamente en español, con diseño industrial en azul marino, blanco cálido y acentos naranjas.

**Sitio:** https://jesus-hg-mx.github.io/

**Repositorio:** `Jesus-HG-MX/Jesus-HG-MX.github.io` · **Rama de despliegue:** `master`.

## Desarrollo local

Se conserva React, TypeScript, Vite y CSS. Node **20.19 o superior**; `.nvmrc` selecciona Node 20. No se usa React Router: toda la navegación funciona mediante anchors.

```sh
npm install
npm run dev
npm run build
npm run preview
```

El build verifica TypeScript, compila, prerenderiza el contenido y genera los metadatos, JSON-LD de tipo Person, `robots.txt` y `sitemap.xml`. El resultado está en `dist/` y no requiere un servidor de aplicaciones.

## GitHub Pages

Se mantiene `base: '/'` porque es un sitio de usuario publicado en la raíz. El workflow existente `.github/workflows/deploy.yml` se ejecuta al hacer push a **master** o mediante ejecución manual. Usa Node 20, `npm ci`, `npm run build` y las acciones oficiales de GitHub Pages para publicar `dist/`.

En GitHub debe permanecer seleccionado **Settings → Pages → Source → GitHub Actions**. No se necesita cambiar a `main`, crear una rama `gh-pages`, añadir un router ni un archivo 404 especial. No se han cambiado la rama local, el historial o el remoto.

Para publicar esta actualización: revisar los cambios, crear el commit y hacer push a `master`. Consultar el resultado en **Actions → Deploy portfolio to GitHub Pages**. Si existe una regla de protección del entorno `github-pages`, debe permitir despliegues desde `master`.

## Contenido y estructura

- `src/config/site.ts`: datos personales, título profesional, LinkedIn, URL final y ruta del CV.
- `src/data/profile.ts`: navegación, perfil, responsabilidades, competencias, métricas, fortalezas, educación y certificaciones en español.
- `src/components/`: componentes existentes de cada sección y elementos compartidos.
- `src/styles/global.css`: diseño, animaciones y responsive.
- `scripts/prerender.tsx`: HTML estático y SEO de producción.
- `public/images/`: imágenes AVIF, fuentes WebP de la composición social y `social-card.png` en español.
- `public/cv/Jesus_Gabriel_Hernandez_Gutierrez_CV.pdf`: CV en español.
- `tests/portfolio.spec.ts`: comprobaciones funcionales en navegador.

No hay selector de idioma ni versión inglesa activa. Los términos Lean Manufacturing, Lean Six Sigma Yellow Belt, SAP, KPIs, OEE, 5S y Kaizen conservan sus nombres profesionales.

## Actualizar el CV y las imágenes

Para sustituir el CV, conservar su nombre y ruta en `public/cv/`. Todos los botones apuntan a `/cv/Jesus_Gabriel_Hernandez_Gutierrez_CV.pdf` con el atributo `download`.

El generador opcional sincroniza el CV y la imagen social con los datos del sitio:

```sh
node --import tsx scripts/create-assets.tsx
```

Requiere Google Chrome. No forma parte del build ni del workflow; los recursos terminados se incluyen en el repositorio. El CV utiliza exclusivamente los datos proporcionados; Yellow Belt figura como **En curso** y el dato **>90%** no se atribuye a una empresa o periodo.

Para cambiar fotografías, conservar dimensiones y nombres o actualizar también `srcSet`, precarga y textos alternativos. La fotografía industrial es ilustrativa; no representa a Gabriel ni acredita maquinaria utilizada en sus empleos.

Fotografía de **Lenny Kuhne**, [fuente en Unsplash](https://unsplash.com/photos/gray-vehicle-being-fixed-inside-factory-using-robot-machines-jHZ70nRk7Ns), bajo la [licencia de Unsplash](https://unsplash.com/license). Inter y Manrope se sirven localmente mediante Fontsource y sus licencias incluidas.

## Verificación

```sh
npm run check
npm run build
npm run test:site
```

Las pruebas usan Google Chrome y cubren 360, 390, 430, 768, 1024, 1200 y 1440 px: navegación, menú móvil, foco, overflow, imágenes, consola, descarga del CV, enlaces, metadatos españoles, URLs de producción y contenido sin JavaScript.

Auditorías opcionales sobre `npm run preview -- --port 4175`:

```sh
node scripts/audit.mjs
node scripts/lighthouse.mjs
```

Lighthouse requiere Node 22.19+ y descarga su herramienta fijada bajo demanda; no modifica las dependencias de despliegue de Node 20. Resultados y límites en `docs/verification.md`.
