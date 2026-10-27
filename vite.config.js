import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 5004,
    hmr: {
      clientPort: 443
    }
  }
});
