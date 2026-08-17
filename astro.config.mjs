import { defineConfig } from "astro/config";

// Estático a propósito: la página no tiene backend ni datos que cambien por
// visitante. Lo único vivo —qué versión hay— vive en la release de GitHub, y ahí
// se enlaza en vez de copiarse: un número escrito aquí se queda viejo el día que
// se publique la siguiente.
export default defineConfig({
  site: "https://terminus.danil.ai",
  output: "static",
});
