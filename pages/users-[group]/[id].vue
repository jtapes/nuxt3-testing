<template>
<!--  http://localhost:3000/users-admins/123-->
  <NuxtLink to="/">Home page</NuxtLink>
  {{ $route.params.group }}
  {{ $route.params.id }}
</template>
