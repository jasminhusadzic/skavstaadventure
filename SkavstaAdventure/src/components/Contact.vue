<template>
<div class="container">
    <div class="row">
        <div class="col-md-12">
            <h3 v-lang.categories.contact.aboutUs></h3>
            <p class="text-justify" v-lang.categories.contact.aboutUsContent></p>
        </div>
    </div>

</div>
</template>
<script>

export default {
    name: 'Contact',
    data(){
        return {
            
        }
    }
}

</script>
<style scoped>
.row{
    margin-top: 25px;
    font-size: 0.9em;
}
</style>