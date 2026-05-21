import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const lessVariables = require('./src/less/lessVariables.js');

export default defineConfig({
	site: 'https://www.denikbylozravce.cz',
	integrations: [react()],
	vite: {
		css: {
			preprocessorOptions: {
				less: {
					modifyVars: lessVariables
				}
			}
		}
	}
});
