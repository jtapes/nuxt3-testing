<template>
<div>
  <NuxtLink to="/e">eee</NuxtLink>
  <br>
  {{ count }}
  $hello - {{ $hello }}
  <br>
  <NuxtLink to="/users-admins/123">Users</NuxtLink>
  <NuxtLink to="/test">Test</NuxtLink>
<!-- пример отложенной загрузки компонента -->
<!--  <LazyMountainsList v-if="show" />-->
<!--  <button v-if="!show" @click="show = true">Show List</button>-->


<!--  <img src="/1.jpg" alt="">-->
    <LazyBaseTest/>

  <ClientOnly>
    <template #fallback>
      <p>Loading comments...</p>
    </template>
    123 -
<!--    {{ add }}-->
  </ClientOnly>
</div>
</template>

<!--<script >-->
<!--export default {-->
<!--  name: "index",-->
<!--  layout: "defult",-->

<!--  // created() {-->
<!--  //   console.log(add);-->
<!--  // }-->
<!--}-->
<!--</script>-->


<script setup lang="ts">

import {reactive} from "vue";

useMeta({
  title: '2222',
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' }
  ],
  bodyAttrs: {
    class: 'test'
  }
})



// import { useStore } from 'vuex';
// const store = useStore();
// const con = computed(() => store.getters.connected);


// console.log($hello);

// useFetch(() => {
//   console.log(222);
// })

  // import { ref, onMounted, useSSRContext } from 'vue'
import {getContext, useContext} from "unctx";
import {useBase} from "h3";
import {useRouter} from "vue-router";
import {useFetch, useRuntimeConfig, useState} from "#app";
import {useSSRContext} from "@vue/runtime-core";

const count = ref<number>(0)
  const increment = count.value++

  // defineExpose({ count }) $parent or refs


  // import { ref, VueElement } from 'vue'
  //
  // const name = ref('')
  // const isNamePresent = computed(() => name.value.length > 0)
  // const name = computed({
  //   get () {
  //     return props.modelValue
  //   },
  //   set(val) {
  //     emit('update:modelValue', val);
  //   }
  // })



  // interface Props {
  //   count: number
  // }
  //
  // const props = defineProps<Props>()

  // для заданий значений по умолчанию
  // const props = withDefaults(defineProps<Props>(), {
  //   count: 0,
  // })

  const root = ref(null)
  const attrs = useAttrs()
const test = useRoute()
// const el = withCtx((e) => {
//   console.log(e);
// })
const testCookie = useCookie('counter')


const api = await useFetch('/api/hello', {
  pick: ['test2'],
}).then(v => v.data) // умеет кешировать

const { $hello } = useNuxtApp()
// VueElement setupContext
   onMounted(async () => {
     console.log(234, $hello);
setTimeout(() => {
  $hello.setA(222)
  console.log(234, $hello);

}, 1000)
     // console.log(444, api, );
      //     console.log('cookie', testCookie.value)
  })
</script>


<!--<script setup>-->
<!--const add = addFunc()-->
<!--</script>-->

<style scoped>

</style>
