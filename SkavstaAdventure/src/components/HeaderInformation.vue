<template>
<div class="container header-departure">
            <div class="row">
                <div class="col-md-12 text-center">
                    <h3 v-lang.categories.navigation.information></h3>
                </div>
                <div class="col-6 col-md-4 text-center">
                    <img class="img-fluid" src="../assets/header-departure.png" alt="Sample picture">
                </div>
                <div class="col-6 col-md-4  text-center">
                   <img class="img-fluid" src="../assets/header-departure.png" alt="Sample picture">
                </div>
                <div class="col-6 offset-3 mt-2 col-sm-6 mt-md-0 offset-md-0  col-md-4  text-center">
                   <img class="img-fluid" src="../assets/header-departure.png" alt="Sample picture">
                </div>
            </div>
</div>
</template>
<script>

export default {
    name: 'HeaderInformation',
    data(){
        return {
            
        }
    }
}

</script>
<style scoped>
.header-departure {
    color:#FFF;
    font-size: 0.9em;
    position: relative;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
}
.header-departure h3 {
    margin-bottom: 40px;
}
.header-departure>.row{
    background: rgba(0, 0, 0, 0.7);
    padding:40px;
    
}
@media only screen and (max-width: 768px) {
    /* For mobile phones: */
    [class*="col-"] {
        width: 100%;
    }
}
</style>