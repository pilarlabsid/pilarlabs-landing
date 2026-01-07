import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    'vendor-react': ['react', 'react-dom', 'react-router-dom'],
                    'vendor-utils': ['framer-motion', 'lucide-react', 'i18next', 'react-i18next'],
                },
            },
        },
        chunkSizeWarningLimit: 1000, // Increase limit slightly as well
    },
});
