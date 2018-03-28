<template>
<div class="container">
    <div class="row">
        <div class="col-md-6 offset-md-3 main-heading">
            <p v-lang.categories.header.title></p>
        </div>
    </div>
    <div class="row header-buttons">
        <div class="col-md-6">
            <button>
                <router-link to="/arrival">
                    <span v-lang.categories.navigation.arrival></span>
                </router-link>
            </button>
        </div>
        <div class="col-md-6">
            <button>
                <router-link to="/departure">
                    <span v-lang.categories.navigation.departure></span>
                </router-link>
            </button>
        </div>
    </div>
</div>
</template>
<script>

export default {
    name: 'Header',
    data(){
        return {

        }
    }
}

</script>
<style scoped>
.main-heading {
    color:#FFF;
    font-family: 'Josefin Sans', sans-serif;
    padding-top: 50px;
    
}
.main-heading>p {
    font-size: 4em;
    font-weight: 700;
    text-shadow: 2px 2px #000;
}
.header-buttons {
    margin-top:60px;
}
.header-buttons button {
    margin-top:10px;
    background-color:#fc5b5a;
    border:none;
    padding:20px 50px;
}
.header-buttons button:hover {
   opacity: 0.9;
}
.header-buttons button:focus {
   outline: none;
}
.header-buttons button>a {
    font-size:1.5em;
    color:#FFF;
    text-transform: uppercase;
    text-decoration: none;
}
</style>