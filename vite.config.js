import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
	base: 'react-components-profile',
	plugins: [react()],
	build: {
		sourcemap: true,
	},
	server: {
		open: true,
	},
});
