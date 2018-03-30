<template>
<div class="container header-arrival">
    <div class="row">
        <div class="col-md-8 offset-md-2">
            <div class="row">
                <div class="col-md-6 col-sm-12 text-center">
                    <h3 v-lang.categories.navigation.arrival></h3>
                    <img class="img-fluid" src="../assets/header-arrival.png" alt="Sample picture">
                </div>
                <div class="col-md-6 col-sm-12 text-center">
                    <h3 v-lang.categories.headerArrival.welcome></h3>
                    <p v-lang.categories.headerArrival.textOne></p><br>
                    <p v-lang.categories.headerArrival.textTwo></p>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>

export default {
    name: 'HeaderArrival',
    data(){
        return {
            
        }
    }
}

</script>
<style scoped>
.header-arrival {
    color:#FFF;
    font-size: 0.9em;
    position: relative;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
.header-arrival>.row>.col-md-8{
    background: rgba(0, 0, 0, 0.7);
    padding:20px;
    
}
.header-arrival>.row>.col-md-8 h3 {
    margin-bottom: 10px;
    margin-top:10px;
}
@media only screen and (max-width: 768px) {
    /* For mobile phones: */
    [class*="col-"] {
        width: 100%;
    }
    .header-arrival>.row>.col-md-8{
        padding-top:10px;
    }
    .header-arrival {
    font-size: 0.8em;
    }
}
</style>