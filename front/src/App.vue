<template>
  <div id="app">
    <header/>
    <index/>    
    <router-view/>
  </div>
</template>

<script>
import index from './components/index.vue'
import header from './components/header.vue'

export default {
  name: 'App',
  components: {
    index,
    header
  }
}
</script>

<style lang="scss">
@import './assets/scss/main';
.test {
  h2 {
    display: none;
  }
}
</style>
