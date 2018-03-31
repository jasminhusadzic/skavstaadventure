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
                    <div>
                    <b-form @submit="onSubmit">
                        <b-form-group>
                            <label for="name" v-lang.categories.contact.labelName></label>  
                            <b-form-input v-model="form.name"
                                    type="text">
                            </b-form-input>
                        </b-form-group>
                        <b-form-group>
                            <label for="email" v-lang.categories.contact.labelEmail></label>         
                            <b-form-input id="email" v-model="form.email"
                                    type="email">
                            </b-form-input>
                        </b-form-group>
                        <b-form-group>
                            <label for="textarea1" v-lang.categories.contact.labelMessage></label>        
                            <b-form-textarea id="textarea1"
                                    v-model="form.message"
                                    :rows="3"
                                    :max-rows="6">
                            </b-form-textarea>
                        </b-form-group>
                        <b-button type="submit" variant="primary" v-lang.categories.contact.button></b-button>
                    </b-form>           
                    </div>
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
            form:{
                name:'',
                email:'',
                message:''
            }
            
        }
    },
    methods:{
            onSubmit (evt) {
            evt.preventDefault();
            alert(JSON.stringify(this.form));
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

