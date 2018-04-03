<template>
    <div class="container">
        <div class="row popular-products">
            <div class="col-md-12 text-center">
                <h4 v-lang.categories.home.homeHeading></h4>
                <iframe seamless="" width="100%" height="400px" frameborder="0" class="rezdy" :src="path+language"></iframe>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: 'Home',
    data(){
        return {
            path : 'https://skavstaadventure.rezdy.com/carouselWidget/?iframe=true&max=20&lang='
        }
    }
}

</script>
<style scoped>
.container {
    border-bottom: 1px solid hsla(0,0%,82%,.5);
}
iframe {
    margin-top:40px;
}
.popular-products {
    margin-top: 40px;
}
</style>