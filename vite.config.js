import { defineConfig } from 'vite';
import eslintPlugin from 'vite-plugin-eslint';
import glsl from 'vite-plugin-glsl';

export default defineConfig({
    plugins: [
        eslintPlugin({ cache: false }),
        glsl(), // Add the glsl plugin to process GLSL files
    ],
    server: {
        port: 3000,
    },
    build: {
        minify: true,
        manifest: true,
        rollupOptions: {
            input: './src/main.js',
        },
    },
});
