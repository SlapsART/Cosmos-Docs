// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'DS Docs',
			social: [
				{ icon: 'npm', label: 'npm', href: 'https://www.npmjs.com/package/@sinco/react?activeTab=readme'},
				{ icon: 'github', label: 'GitHub', href: ''},
			],
			sidebar: [
				{
					label: 'Instalación - DEV', slug: 'introduccion/dev'
				},
				{
					label: 'Instalación',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Desarrolladores', slug: 'guides/example' },
					],
				},
				{
					label: 'Componentes',
					autogenerate: { directory: 'reference' },
				},
				{
					label: 'Documentos',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
	site: 'https://SlapsART.github.io/COSMOS-DOCS.git',
	base: '/COSMOS-DOCS/src/pages/index.mdx',
	// otros settings…
});

