# Hípica de Logroño

Sitio web de la Hípica de Logroño para presentar sus instalaciones, compartir noticias y facilitar el contacto con el centro. Está desarrollado con Astro y utiliza Decap CMS para gestionar las noticias.

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

## CMS

El panel de Decap CMS se publica en `/decapcms/`. Las noticias se guardan como archivos Markdown en `src/data/post/` y las imágenes en `src/assets/images/`. El acceso al CMS requiere configurar Netlify Identity y Git Gateway para el sitio desplegado.
