<template>
        <div class="container header-contact">
    <div class="row">
        <div class="col-md-10 offset-md-1">
            <div class="row">
                <div class="col-md-6 col-sm-12 text-center">
                    <h3 v-lang.categories.contact.contactHeading></h3>
                    <p>SkavstaAdventure.</p>
                    <p>MerAktiv i Sverige AB</p>
                    <p>Beckasinvägen 10</p>
                    <p>611 62 Nykoping, Sweden</p>
                    <p>Tel: +46 704 66 80 90</p>
                    <p><span>Email:</span><a href="mailto:info@skavstaadventure.se"> info@skavstaadventure.se</a></p>
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
    name: 'HeaderContact',
    data(){
        return {
            
        }
    }
}

</script>
<style scoped>
.header-contact {
    color:#FFF;
    font-size: 0.9em;
    position: relative;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
}
.header-contact>.row>.col-md-10{
    background: rgba(0, 0, 0, 0.7);
    padding:10px;
    
}
.header-contact>.row>.col-md-6 h3 {
    margin-bottom: 10px;
    margin-top:10px;
}
</style>

