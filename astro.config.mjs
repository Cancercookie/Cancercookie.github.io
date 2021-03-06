// Full Astro Configuration API Documentation:
// https://docs.astro.build/reference/configuration-reference
import { defineConfig } from 'astro/config';
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  server: {
    port: 42069
  },
  integrations: [preact()],
  site: "https://cancercookie.github.io",
});
