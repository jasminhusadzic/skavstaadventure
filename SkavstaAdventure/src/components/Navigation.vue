<template>
<div class="container">
    <b-navbar toggleable="md" variant="info">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-navbar-brand to="/"><img src="../assets/logo.png" height="50" alt="Logo"></b-navbar-brand>
    <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav class="ml-auto">
            <b-nav-item to="/"><span v-lang.categories.navigation.home></span></b-nav-item>
            <b-nav-item to="/arrival"><span v-lang.categories.navigation.arrival></span></b-nav-item>
            <b-nav-item to="/departure"><span v-lang.categories.navigation.departure></span></b-nav-item>
            <b-nav-item to="/information"><span v-lang.categories.navigation.information></span></b-nav-item>
            <b-nav-item to="/contact"><span v-lang.categories.navigation.contact></span></b-nav-item>
            <b-nav-item-dropdown v-bind:text="language" right>
                <b-dropdown-item v-lang.language="'EN'" @click="language = 'en'"></b-dropdown-item>
                <b-dropdown-item v-lang.language="'SR'" @click="language = 'sr'"></b-dropdown-item>
            </b-nav-item-dropdown>
        </b-navbar-nav>
    </b-collapse>
    </b-navbar>  
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
  
.navbar-light .navbar-nav .nav-link:hover,
.navbar-light .navbar-nav .nav-link.active {
 color:#fc5b5a;
}
.bg-info{
  background-color: transparent !important;
  text-transform: uppercase;
}
</style>