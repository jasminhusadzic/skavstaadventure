<template>
  <div id="app">
      <div class="container-fluid navigation">
          <app-nav></app-nav> 
      </div>
      <div class="container-fluid top-section">
          <app-header v-if="$route.name == 'Home'"></app-header>
      </div>
      <div class="container-fluid middle-section">
          <router-view></router-view> 
      </div>
      <div class="container-fluid footer-section">
          <app-footer></app-footer>
      </div>
  </div>
</template>

<script>

import Navigation from './components/navigation'
import Header from './components/header'
import Footer from './components/footer'

export default {
  name: 'App',
  components : {
    'app-nav': Navigation,
    'app-header': Header,
    'app-footer':Footer
  },
     data() { return {

        } 
     }
}
</script>

<style>
html{
  font-size: 16px;
}

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
 font-size: 0.9em;
}

.top-section{

  height:600px;
  background: url(./assets/top-bg2.jpg) no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover
}


#__BVID__13__BV_button_ span{
    text-transform: lowercase !important;
}

</style>
