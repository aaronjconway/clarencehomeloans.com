import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'
import { enhancedImages } from '@sveltejs/enhanced-img'
import { partytownVite } from "@qwik.dev/partytown/utils";


import Icons from 'unplugin-icons/vite'

/** @type {import('vite').UserConfig} */
export default defineConfig({
	plugins: [
		sveltekit(),
		enhancedImages(),
		partytownVite({}),
		Icons({
			compiler: 'svelte',
		}),
	],
	css: {
		preprocessorOptions: {
			scss: {
				api: 'modern',
			},
		},
	},
})
