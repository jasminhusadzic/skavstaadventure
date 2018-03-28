<template>
  <div id="app">
    <div class="container-fluid top-section">
      <div class="language-bar">
        <a v-lang.language="'EN'" @click="language = 'en'"></a> /
        <a v-lang.language="'SR'" @click="language = 'sr'"></a>
      </div>
        <app-nav></app-nav> 
    </div>
    <router-view></router-view> 
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
.top-section{
  margin-top: -60px;
  height:600px;
  background: url(./assets/top-bg.jpg) no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover
}
.bg-info{
  background-color: transparent !important;
}
.language-bar {
  position: absolute;
  top:10px;
  right:10px;
  color:#FFF;
}
</style>
