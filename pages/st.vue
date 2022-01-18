<template>
<div>
  <NuxtLink to="/state">state</NuxtLink>
  <br>
    Counter: {{ counter }}
    <button @click="counter = counter + 1">
      +
    </button>
    <button @click="counter = counter - 1">
      -
    </button>
</div>
</template>

<script setup lang="ts">
// const { ssrContext } = useNuxtApp()
//
// const error = new Error(`Page not found2: ${ssrContext.url}`)
// error.statusCode = 404
// // ssrContext.error = error


// const nuxtApp = useNuxtApp()
//
// nuxtApp._legacyContext?.error({
//   statusCode: 404,
//   message: 'Some message'
// })

await useAsyncData('count', async () => {
  useState('counter', () => 1)

})
const counter = useState('counter')

// await useAsyncData('count', async (r) => {
//
//   // error({ statusCode: 404, message: '404' });
// })
// useRouter().push('/')

</script>

<style scoped>

</style>
