import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    // css: ['@/assets/style.css'],
    modules: [
        // '@nuxtjs/axios',
    ],

    css: [
        '@/assets/style.css',
        '@/assets/main.scss'
    ],

    hooks: {
        "build:done": () => {
            console.log('build 3333')
        }
    },

    meta: {
        meta: [
            // <meta name="viewport" content="width=device-width, initial-scale=1">
            { name: 'viewport', content: 'width=device-width, initial-scale=1' }
        ],
    },

    serverMiddleware: [
        { path: '/express', handler: '~/express.ts' },
    ],

    publicRuntimeConfig: {
        TEST: 111
    },
    privateRuntimeConfig: {
        TEST2: process.env.FREE
    }
})
