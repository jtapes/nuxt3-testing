<template>
  <div>components - test {{ data }}</div>
</template>

<script setup lang="ts">
const {data} = await useAsyncData('count', async () => {

      return {
        a: 1,
      }
    },
    {
      default() {
        return {
          a: 333 // при переходе по spa вначале отдаст это
        }
      },

    })
</script>

<style scoped>

</style>
