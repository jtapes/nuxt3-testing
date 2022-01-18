<template>
  <div>qweqwe</div>
  <NuxtLink to="/">Home</NuxtLink>

</template>

<!--<script lang="ts">-->
<!--import Vue from 'vue'-->
<!--import Component from 'vue-class-component'-->

<!--// Define the component in class-style-->
<!--@Component-->
<!--export default class Counter extends Vue {-->
<!--  // Class properties will be component data-->
<!--  count = 0-->

<!--  // Methods will be component methods-->
<!--  increment() {-->
<!--    this.count++-->
<!--  }-->

<!--  decrement() {-->
<!--    this.count&#45;&#45;-->
<!--  }-->
<!--}-->
<!--</script>-->

<script>
export default {
  layout: "defult",

  setup(props) {
    const title = toRef(props, 'title')

    console.log(title.value)
  },
  mounted() {
    console.log(123, this.$el);
  }

}
</script>

<style scoped>

</style>
