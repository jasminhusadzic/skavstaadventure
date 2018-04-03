<template>
<div class="container"> 
   <iframe seamless="" width="100%" height="850px" frameborder="0" class="rezdy" :src="path+language"></iframe>
<div>{{language}}</div>
</div>
</template>
<script>

export default {
    name: 'Arrival',
    data(){
        return {
            path : 'https://skavstaadventure.rezdy.com/catalog/185868/multiday-tours?iframe=true&targetFrame=_new_modal&lang='
        }
    }
}

</script>
<style scoped>
.container {
    margin-top:20px;
}
</style>