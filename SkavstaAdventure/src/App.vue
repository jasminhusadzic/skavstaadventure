<template>
  <div id="app">
    <div class="container">
      <app-nav></app-nav>
    </div>
    
  </div>
</template>

<script>
import Navigation from './components/navigation'
export default {
  name: 'App',
  components : {
    'app-nav': Navigation
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
