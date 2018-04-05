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
                    <a href="../../static/pdf/pdf-one.pdf" target="_blank"><img :src="galleryOne" alt="photo" class="figure-img img-fluid rounded"></a>
                    <figcaption v-if="language=='sv'" class="figure-caption text-center">{{ pdfName.sv.pdfOne }}</figcaption>
                    <figcaption v-if="language=='en'" class="figure-caption text-center">{{ pdfName.en.pdfOne }}</figcaption>
                </figure>
            </div>
            <div class="col-md-4">
                <figure class="figure">
                    <a href="../../static/pdf/pdf-two.pdf" target="_blank"><img :src="galleryTwo" alt="photo" class="figure-img img-fluid rounded"></a>
                    <figcaption v-if="language=='sv'" class="figure-caption text-center">{{ pdfName.sv.pdfTwo }}</figcaption>
                    <figcaption v-if="language=='en'" class="figure-caption text-center">{{ pdfName.en.pdfTwo }}</figcaption>
                </figure>
            </div>
            <div class="col-md-4">
                <figure class="figure">
                    <a href="../../static/pdf/pdf-three.pdf" target="_blank"><img :src="galleryThree" alt="photo" class="figure-img img-fluid rounded"></a>
                    <figcaption v-if="language=='sv'" class="figure-caption text-center">{{ pdfName.sv.pdfThree }}</figcaption>
                    <figcaption v-if="language=='en'" class="figure-caption text-center">{{ pdfName.en.pdfThree }}</figcaption>
                </figure>
            </div>
        </div>
</div>
</template>
<script>
import names from '../../static/pdf/data.json'

export default {
    name: 'Departure',

    data(){
        return {
            pdfName:names,
            galleryOne:'../../static/gallery/gallery-one.jpg',
            galleryTwo:'../../static/gallery/gallery-two.jpg',
            galleryThree:'../../static/gallery/gallery-three.jpg',
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