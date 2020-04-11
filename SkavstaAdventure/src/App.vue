<template>
  <div id="app">
      <div class="container-fluid navigation">
          <app-nav> </app-nav> 
      </div>
      <div class="container-fluid top-section">
          <app-header v-if="$route.name == 'Home'"></app-header>
          <app-header-arrival v-if="$route.name == 'Arrival'"></app-header-arrival>
          <app-header-contact v-if="$route.name == 'Contact'"></app-header-contact>
          <app-header-departure v-if="$route.name == 'Departure'"></app-header-departure>
          <app-header-information v-if="$route.name == 'Information'"></app-header-information>
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
import HeaderArrival from './components/headerarrival'
import HeaderContact from './components/headercontact'
import HeaderDeparture from './components/headerdeparture'
import HeaderInformation from './components/headerinformation'
import Footer from './components/footer'

export default {
  name: 'App',
  components : {
    'app-nav': Navigation,
    'app-header': Header,
    'app-footer':Footer,
    'app-header-arrival':HeaderArrival,
    'app-header-contact':HeaderContact,
    'app-header-departure':HeaderDeparture,
    'app-header-information':HeaderInformation
    
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
p{
    color:rgb(137,137,137);
}

#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}
  .navigation{

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
