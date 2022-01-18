<template>
  <div>
    <Html>
    <Head>
      <Title>title22</Title>
      <Meta name="description" :content="`My page's description`"/>
    </Head>
    </Html>
    <NuxtLink to="/">Home</NuxtLink>
    {{ error }}
    {{ data }}
    123 - {{ data.a }}
  </div>
</template>


<script setup lang="ts">

const {data, refresh, error} = await useAsyncData('count', async () => {
      throw Error('ошибка')

      await new Promise((resolve) => {
        console.log('Promise');
        setTimeout(() => {
          resolve(true)
        }, 4000)
      })


      return {
        a: 1,
        b: 3
      }
    },
    {
      default() {
        return {
          a: 333 // при переходе по spa вначале отдаст это
        }
      },
      // server: false, // отключает асинхронность
      lazy: true, // включает вывод default в spa
      transform: (e) => {
        e.a = 2
        console.log('выполниться после асинхронной для трансформации данных');
        return e
      },
      pick: ['a']
    })

// refresh() принудительное обновление
console.log('error', error.value);

const testCookie = useCookie('counter')
const config = useRuntimeConfig()
// console.log(config.TEST);
</script>
