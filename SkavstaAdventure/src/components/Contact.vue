<template>
<div class="container">
    <div class="row">
        <div class="col-md-12">
            <h3 v-lang.categories.contact.aboutUs></h3>
            <p class="text-justify" v-lang.categories.contact.aboutUsContent></p>
        </div>
        <div class="col-md-12">
            <h3 v-lang.categories.contact.enviromentStatement></h3>
            <p class="text-justify" v-lang.categories.contact.enviromentTextOne></p>
            <p class="text-justify" v-lang.categories.contact.enviromentTextTwo></p>
            <p class="text-justify" v-lang.categories.contact.enviromentTextThree></p>
            <p class="text-justify" v-lang.categories.contact.enviromentTextFour></p>
        </div>
        <div class="col-md-12">
            <h3 v-lang.categories.contact.partners></h3>
        </div>
        <div class="col-md-12">
            <h6 v-lang.categories.contact.walking></h6>
            <p class="text-justify" v-lang.categories.contact.walkingText></p>
        </div>
        <div class="col-md-12">
            <h6 v-lang.categories.contact.cycling></h6>
            <p class="text-justify" v-lang.categories.contact.cyclingText></p>
        </div>
        <div class="col-md-12">
            <h6 v-lang.categories.contact.paddling></h6>
            <p class="text-justify" v-lang.categories.contact.paddlingText></p>
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