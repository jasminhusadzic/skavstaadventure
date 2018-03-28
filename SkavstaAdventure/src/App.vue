<template>
  <div id="app">
    <div class="container-fluid">
      <app-nav></app-nav>
    </div>
    <button v-lang.language="'EN'" @click="language = 'en'"></button>
    <button v-lang.language="'SR'" @click="language = 'sr'"></button>
  </div>
</template>

<script>

import Navigation from './components/navigation'
export default {
  name: 'App',
  components : {
    'app-nav': Navigation
  },
     data() { return {

        } 
     },
	computed: {
		title() {
			return this.translate('title')
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
</style>
