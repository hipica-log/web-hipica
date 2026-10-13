# Hípica Militar de Logroño

Web hecha con Astro. El panel de Decap CMS está disponible en `/admin/` y permite publicar noticias en `src/data/noticias`; la portada y el archivo de actualidad leen esas entradas al generar el sitio.

## Desarrollo

```sh
npm install
npm run dev
```

## Publicar noticias con Decap CMS

El panel usa `git-gateway` y Netlify Identity. Para que la edición remota funcione, despliega el sitio en Netlify, conecta el repositorio, activa Identity y Git Gateway en la configuración del sitio, e invita a las personas que podrán editar. El CMS guarda los cambios en la rama `main` del repositorio conectado a Netlify.

En local puedes revisar el sitio con `npm run dev`; la autenticación de producción requiere la configuración de Netlify. Las noticias nuevas se guardan como Markdown y se publican en `/noticias/<slug>/`.

## Compilar

```sh
npm run build
npm run preview
```
