import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.$router.afterEach((to, from) => {
        console.log('route');
    })
})
