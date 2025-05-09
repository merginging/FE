import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '');
    const server = Number(env.VITE_SERVER_API);

    return {
        base: '/',
        plugins: [react()],
        // server: {
        //   proxy: {
        //     '/api': {
        //       target: env.VITE_SERVER_API, // 백엔드 서버 URL
        //       rewrite: (path) => path.replace(/^\/api/, ''), // '/api'를 백엔드 경로에서 제거
        //     },
        //   },
        // },
        define: {
            __APP_ENV__: JSON.stringify(env.APP_ENV),
        },
    };
});
