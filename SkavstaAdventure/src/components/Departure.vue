<template>
<div class="container">
        <div class="row departure">
            <div class="col-md-12 text-center">
                <h4 v-lang.categories.departure.departureTour></h4>
                
            </div>
        </div>
        <div class="row">
            <div class="col-md-4">
                <figure class="figure">
                    <a href="../../static/pdf/pdf-one.pdf" target="_blank"><img src="../../static/gallery/gallery-one.jpg" alt="photo" class="figure-img img-fluid rounded"></a>
                    <figcaption class="figure-caption text-center">Forsränning på Tara-floden 3-6/5 2018</figcaption>
                </figure>
            </div>
            <div class="col-md-4">
                <figure class="figure">
                    <a href="../../static/pdf/pdf-two.pdf" target="_blank"><img src="../../static/gallery/gallery-two.jpg" alt="photo" class="figure-img img-fluid rounded"></a>
                    <figcaption class="figure-caption text-center">Enduro-motorcykel på Balkans grusvägar September 2018</figcaption>
                </figure>
            </div>
            <div class="col-md-4">
                <figure class="figure">
                    <a href="../../static/pdf/pdf-three.pdf" target="_blank"><img src="../../static/gallery/gallery-three.jpg" alt="photo" class="figure-img img-fluid rounded"></a>
                    <figcaption class="figure-caption text-center">Vandring och paddling i Durmitor Nationalpark September 2018</figcaption>
                </figure>
            </div>
        </div>
</div>
</template>
<script>

export default {
    name: 'Departure',

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