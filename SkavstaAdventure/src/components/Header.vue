<template>
<div class="container">
    <div class="row">
        <div class="col-md-6 offset-md-3 main-heading">
            <p v-lang.categories.header.title></p>
        </div>
    </div>
    <div class="row header-buttons">
        <div class="col-md-6 text-center">
            <router-link to="/arrival">
                <button>
                        <span v-lang.categories.navigation.arrival></span>
                </button>
            </router-link>
        </div>
        <div class="col-md-6 text-center">
            <router-link to="/departure">
                <button>
                    <span v-lang.categories.navigation.departure></span>
                </button>
            </router-link>
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
    padding-top: 50px;
    text-align: center;
    
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
    cursor: pointer;
}
.header-buttons a:hover {
   opacity: 0.9;
}
.header-buttons a:focus {
   outline: none;
}
.header-buttons a>button {
    font-size:1.5em;
    color:#FFF;
    text-transform: uppercase;
    text-decoration: none;
}
</style>