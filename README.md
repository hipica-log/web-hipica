# Hípica de Logroño

Sitio web de la Hípica de Logroño para presentar sus instalaciones, compartir noticias y facilitar el contacto con el centro. Está desarrollado con Astro y utiliza Sveltia CMS para gestionar las noticias.

## Desarrollo local

Se necesita Node.js 22.22.3 o superior. Desde la carpeta del proyecto:

```bash
npm install
npx astro dev --background
```

El sitio estará disponible en <http://localhost:4321>. Para gestionar el servidor en segundo plano:

```bash
npx astro dev status
npx astro dev logs
npx astro dev stop
```

Para generar el sitio estático:

```bash
npm run build
```

## Mapa de instalaciones

El mapa usa MapLibre GL JS y los estilos vectoriales comunitarios de Maptoolkit, basados en OpenStreetMap. No requiere cuenta ni token. La atribución visible de Maptoolkit y OpenStreetMap se incluye en el mapa.

## CMS

El panel de Sveltia CMS se publica en `/admin/`. Las noticias se guardan como archivos Markdown en `src/data/post/`. Las imágenes existentes se encuentran en `src/assets/images/`; las que se suban desde el CMS se guardarán en `public/uploads/noticias/`.

El CMS usa GitHub con el repositorio `hipica-log/web-hipica` y la rama `main`. Para iniciar sesión, abre `/admin/` en el sitio publicado y utiliza **Sign in with Token** para crear e introducir un token personal de GitHub con permisos de escritura en el repositorio. El token queda en el navegador y no se guarda en los archivos del proyecto.
