<template>
  <div id="app">
    <div class="main-section">
        <div class="ui grid">
            <Sidebar />
            <router-view/>      
        </div>
    </div>
    
  </div>
</template>

<script>
import Sidebar from './components/sidebar.vue'
import Index from './components/index.vue'

export default {
  name: 'App',
  components: {
    Sidebar,
    Index
  }  
}
</script>

<style lang="scss">
@import './assets/scss/index';
.test {
  h2 {
    display: none;
  }
}
</style>
