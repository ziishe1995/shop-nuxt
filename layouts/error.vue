<template>
  <div class="container">
    <h1>
      ({{ error.statusCode }})
      {{ error.message }}
    </h1>
    <nuxt-link to="/">
      回首頁
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['error']
}
</script>
