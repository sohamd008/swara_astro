// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    vite: {
        define: {
            'import.meta.env.PUBLIC_FIREBASE_API_KEY': JSON.stringify(process.env.PUBLIC_FIREBASE_API_KEY),
            'import.meta.env.PUBLIC_FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.PUBLIC_FIREBASE_AUTH_DOMAIN),
            'import.meta.env.PUBLIC_FIREBASE_PROJECT_ID': JSON.stringify(process.env.PUBLIC_FIREBASE_PROJECT_ID),
            'import.meta.env.PUBLIC_FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.PUBLIC_FIREBASE_STORAGE_BUCKET),
            'import.meta.env.PUBLIC_FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(process.env.PUBLIC_FIREBASE_MESSAGING_SENDER_ID),
            'import.meta.env.PUBLIC_FIREBASE_APP_ID': JSON.stringify(process.env.PUBLIC_FIREBASE_APP_ID),
            'import.meta.env.PUBLIC_FIREBASE_MEASUREMENT_ID': JSON.stringify(process.env.PUBLIC_FIREBASE_MEASUREMENT_ID),
        }
    }
});
