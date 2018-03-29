<template>
    <div class="container">
        <div class="row newsletter">
            <div class="col-md-12 text-center">
                <span v-lang.categories.footer.footerHeading></span>
                <a href="http://gansub.com/s/MN3UsgS/" target="_blank"><span v-lang.categories.footer.footerLink></span></a>
            </div>
        </div>
        <div class="row contact-info">
            <div class="col-md-6 text-left">
                <p>SkavstaAdventure.</p>
                <p>MerAktiv i Sverige AB</p>
                <p>Beckasinvägen 10</p>
                <p>611 62 Nykoping, Sweden</p>
            </div>
            <div class="col-md-6 text-right">
                <p>Tel: +46 704 66 80 90</p>
                <p><span>Email:</span><a href="mailto:info@skavstaadventure.se"> info@skavstaadventure.se</a></p>
                <img  src="../assets/logo-footer.png" height="80" alt="Logo">
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: 'Footer',
    data(){
        return {
            
        }
    }
}

</script>
<style scoped>
.container {
    margin-top:20px;
}
.contact-info,
.newsletter {
    font-size: 0.85em;
    color:rgb(137,137,137);
}
.contact-info {
    margin-top: 20px;
    border-top: 1px solid hsla(0,0%,82%,.5);
}
.contact-info .col-md-6{
    margin-top:20px;
    
}
.contact-info .col-md-6 a {
    text-decoration: none;
    color:#fc5b5a;
}
.contact-info .col-md-6 a:hover {
    text-decoration: none;
    color:#cf5150;
}
.newsletter  a {
    text-decoration: none;
    color:#fc5b5a;
}
.newsletter a:hover {
    text-decoration: none;
    color:#cf5150;
}
</style>

