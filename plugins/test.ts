import { defineNuxtPlugin } from '#app'
import {reactive} from "vue";

class Test {
    a = 111
    setA(e) {
        this.a = e
    }
}

export default defineNuxtPlugin(() => {
    return {
        provide: {
            hello: reactive(new Test())
        }
    }
})

// import { defineNuxtPlugin } from '#app'
// import VueGtag from 'vue-gtag-next'
//
// export default defineNuxtPlugin((nuxtApp) => {
//     nuxtApp.vueApp.use(VueGtag, {
//         property: {
//             id: 'GA_MEASUREMENT_ID'
//         }
//     })
// })
