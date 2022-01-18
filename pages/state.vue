<template>
<div  ref="root">
  <NuxtLink to="/st">state2</NuxtLink>
  <br>
    Counter: {{ counter }}
    <button @click="counter++">
      +
    </button>
    <button @click="counter--">
      -
    </button>
</div>
</template>

<script setup lang="ts">

// import {onMounted} from "@vue/runtime-core";
import { ref, onMounted } from 'vue'
const root = ref(null)

onMounted(() => {
  console.log(root.value);
})


onErrorCaptured((e) => {
  console.log(e, 88)
})

const counter = useState('counter')
</script>


<!--<script>-->
<!--import { ref, onMounted, reactive } from 'vue'-->

<!--export default {-->
<!--  setup(props, ctx) {-->
<!--    console.log(1, ctx);-->
<!--    // const counter = useState('counter', () => 1)-->
<!--    const root = ref(null)-->

<!--    onMounted(() => {-->
<!--      // элемент DOM будет определён в ref после первоначальной отрисовки-->
<!--      console.log(root) // <div>Это корневой элемент</div>-->
<!--    })-->

<!--    return {-->
<!--      root-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->
