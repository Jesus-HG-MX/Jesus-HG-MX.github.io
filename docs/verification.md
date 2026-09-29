# Verificación de la actualización en español — 2026-09-29

## Implementación

Se actualizaron la información profesional, navegación, textos accesibles, metadatos, CV e imagen social al español, manteniendo React, Vite, TypeScript y el diseño industrial existente. Se retiró el selector de idiomas. LinkedIn usa `https://www.linkedin.com/in/gabriel8925/`.

Las responsabilidades, empresas, periodos y puestos corresponden a la fuente de verdad proporcionada. Yellow Belt aparece como **En curso**. El dato **>90%** no se atribuye a una empresa o periodo.

## Comprobaciones

- `npm run build`: correcto, incluida la comprobación TypeScript y el prerender.
- Ocho pruebas Playwright aprobadas: 360, 390, 430, 768, 1024, 1200 y 1440 px, más comprobaciones de SEO y contenido estático.
- Sin overflow horizontal, errores ni advertencias en la consola del navegador.
- Navegación por anchors, menú móvil, cierre con Escape, foco, correo, teléfono, destino de LinkedIn y descarga real del CV verificados.
- `lang="es"`, Open Graph `es_MX`, title, canonical, sitemap, robots, favicon, Person JSON-LD y LinkedIn de producción verificados.
- Capturas desktop y 390 px revisadas; nombres y títulos sin cortes.
- Axe WCAG 2/2.1 A/AA: cero infracciones detectadas en 390 y 1440 px. La revisión automatizada no sustituye una evaluación completa con tecnologías de asistencia.
- CV en español: una página, renderizada mediante Quartz y revisada visualmente. El archivo de `dist/cv/` coincide con el recurso público.
- Imagen social en español: 1200 × 630 px.

## Lighthouse móvil local, versión 13.5

| Categoría        | Resultado |
| ---------------- | --------- |
| Rendimiento      | 96        |
| Accesibilidad    | 100       |
| Buenas prácticas | 100       |
| SEO              | 100       |

El resultado anterior era 97/100/100/100. Esta diferencia de un punto corresponde a una medición local; los valores varían con dispositivo, red y carga del equipo. No son métricas de campo de producción.

## Git y despliegue

Rama local verificada: **master**. Remoto existente: `git@github-jesus:Jesus-HG-MX/Jesus-HG-MX.github.io.git`.

El único cambio en `.github/workflows/deploy.yml` es `branches: [main]` → `branches: [master]`. Se conservan acciones, Node 20, permisos, concurrencia, entorno y publicación de `dist/`. Vite mantiene `base: '/'` y la URL es `https://jesus-hg-mx.github.io/`.

No se cambió de rama, no se modificó el historial y no se realizó commit ni push. Pendiente: publicar los cambios mediante commit y push a `master`; después comprobar el workflow y el sitio público. Si el entorno `github-pages` restringe ramas, debe permitir `master`. No se afirma que la actualización ya esté desplegada.
