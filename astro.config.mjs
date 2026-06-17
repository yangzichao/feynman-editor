import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://feynman.zichaoyang.com',
  devToolbar: {
    enabled: false,
  },

  vite: {
    plugins: [tailwindcss()],
    // mathjax-full's CJS build falls back to eval('require') for its
    // version lookup unless PACKAGE_VERSION is defined; that eval breaks
    // in Vite's ESM environment (used by the editor's math labels).
    // Dev-server dependency pre-bundling needs the esbuild copy too.
    define: {
      PACKAGE_VERSION: JSON.stringify('3.2.2'),
    },
    optimizeDeps: {
      esbuildOptions: {
        define: {
          PACKAGE_VERSION: JSON.stringify('3.2.2'),
        },
      },
    },
  },
});
