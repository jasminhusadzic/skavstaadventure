<template>
<div class="container">
        <div class="row departure">
            <div class="col-md-12 text-center">
                <h4 v-lang.categories.departure.departureTour></h4>
            </div>
        </div>
        <app-gallery></app-gallery>
</div>
</template>
<script>
import VueGallery from './vuegallery';
export default {
    name: 'Departure',
    components:{
        'app-gallery':VueGallery
    },
    data(){
        return {

        }
    }
}

</script>
<style scoped>
.departure {
    margin-top:25px;
}
.departure h4{
    margin-bottom: 25px;
}
</style>