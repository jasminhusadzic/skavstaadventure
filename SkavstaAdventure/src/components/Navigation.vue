<template>
<div class="container">
    <b-navbar toggleable="md" type="dark" variant="info">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-navbar-brand to="/">Logo</b-navbar-brand>
    <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav class="ml-auto">
        <b-nav-item to="/"><span v-lang.categories.navigation.home></span></b-nav-item>
        <b-nav-item to="/arrival"><span v-lang.categories.navigation.arrival></span></b-nav-item>
        <b-nav-item to="/departure"><span v-lang.categories.navigation.departure></span></b-nav-item>
        <b-nav-item to="/information"><span v-lang.categories.navigation.information></span></b-nav-item>
        <b-nav-item to="/contact"><span v-lang.categories.navigation.contact></span></b-nav-item>
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
ul {
    float: right;
}
</style>