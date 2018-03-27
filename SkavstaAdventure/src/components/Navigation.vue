<template>
<div>
  <b-nav> 
    <b-nav-item active><router-link to="/">Home</router-link></b-nav-item>
    <b-nav-item ><router-link to="/arrival">Arrival</router-link></b-nav-item>
    <b-nav-item><router-link to="/departure">Departure</router-link></b-nav-item>
    <b-nav-item><router-link to="/information">Information</router-link></b-nav-item>
    <b-nav-item><router-link to="/contact">Contact</router-link></b-nav-item>
  </b-nav>
  <router-view></router-view> 
</div>
</template>
<script>

export default {
    name: 'Navigation',
    data(){
        return {

        }
    }
}

</script>
<style scoped>
ul {
    float: right;
}
</style>