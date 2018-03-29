<template>
  <div id="app">
      <div class="container-fluid navigation">
          <app-nav></app-nav> 
      </div>
      <div class="container-fluid top-section">
          <app-header></app-header>
      </div>
      <div class="container-fluid middle-section">
          <router-view></router-view> 
      </div>
  </div>
</template>

<script>
import Header from './components/header'
import Navigation from './components/navigation'
export default {
  name: 'App',
  components : {
    'app-nav': Navigation,
    'app-header': Header
  },
     data() { return {

        } 
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
.navigation{
 margin-top:-55px;
}

.top-section{

  height:600px;
  background: url(./assets/top-bg2.jpg) no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover
}

.bg-info{
  background-color: transparent !important;
  text-transform: uppercase;
}

</style>
