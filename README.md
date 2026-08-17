# terminus-landing

La página de **Terminus** — [terminus.danil.ai](https://terminus.danil.ai).

Sitio estático hecho con [Astro](https://astro.build). Una sola página
(`src/pages/index.astro`) y su hoja de estilo (`src/styles/global.css`). Oscura,
tipografía Geist, sin dependencias de runtime.

## Desarrollo

```bash
pnpm install
pnpm dev       # servidor local con recarga en caliente
pnpm build     # build de producción a dist/
pnpm preview   # sirve el build para revisarlo
```

## Estructura

```
src/pages/index.astro   La página entera (hero, secciones, cierre).
src/styles/global.css   Tokens de marca y estilos. Los colores salen del
                        sistema de diseño; aquí no se inventan.
public/marca/           Logo e isotipo.
public/fuentes/         Geist Sans y Geist Mono (variables).
wrangler.jsonc          Configuración de despliegue a Cloudflare.
```

## Reglas visuales

- Oscura. Fondo navy, CTA amarillo. Verde para «disponible/conectado».
- Geist Sans + Geist Mono (el mono es dato real: comandos, rutas).
- Superficie sólida, borde hairline, sombra chica. **Sin glassmorphism, sin
  `backdrop-filter`, sin gradientes decorativos.** Radios 4/6/8.
- Copy en español, tono de ingeniero. Sin relleno de venta.
- Los datos no se inventan: la descarga y el comando `npx` deben coincidir con
  las releases reales.

## Despliegue

Se publica en Cloudflare con `wrangler deploy` (dominio `terminus.danil.ai`).

---

Terminus es de [Danil](https://danil.ai).
