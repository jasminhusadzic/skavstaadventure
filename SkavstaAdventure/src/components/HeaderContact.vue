<template>
    <div class="container header-contact">
        <div class="row">
            <div class="col-md-10 offset-md-1">
                <div class="row">
                    <div class="col-md-6 col-sm-12 text-center">
                        <h3 v-lang.categories.contact.contactHeading></h3>
                        <div class="col-md-12 text-left">
                            <span>SkavstaAdventure.</span><br>
                            <span>MerAktiv i Sverige AB</span><br>
                            <span>Beckasinvägen 10</span><br>
                            <span>611 62 Nykoping, Sweden</span><br>
                            <span>Tel: +46 704 66 80 90</span><br>
                            <span><span>Email:</span><a class="contact-email" href="mailto:info@skavstaadventure.se"> info@skavstaadventure.se</a></span>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-12 text-center">
                        <h3 v-lang.categories.headerArrival.welcome></h3>
                        <div>
                        <b-form  @submit="onSubmit">
                            <b-form-group>
                                <label for="name" v-lang.categories.contact.labelName></label>  
                                <b-form-input id="name" v-model="form.name"
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
                            <b-button type="submit" variant="primary" value="Send" v-lang.categories.contact.button></b-button>
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
            var name = this.form.name
            var email = this.form.email
            var message = this.form.message
            if (!name || !email || !message){
                alert('Please insert data in all field\'s')
            }else{
                emailjs.send("send_one_com","template_xMg4cd9a",{name: name, message: message, email: email});
                evt.target.reset();
            }
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
.text-center:first-child>h3{
    margin-bottom:50px;
}
.contact-email {
    text-decoration: none;
    color:#FFF;
}
.contact-email:hover {
    text-decoration: none;
    color:#cf5150;
}
.btn-primary{
    background-color: #fc5b5a;
    border-color: #fc5b5a;
    border-radius: 0;
}
.btn-primary:active{
    background-color: #cf5150 !important;
    border-color: #cf5150 !important;
}
.btn-primary:focus{
        box-shadow: 0 0 0 0.2rem rgba(252, 91, 90, 0.5);
}
@media only screen and (max-width: 768px) {
    /* For mobile phones: */
    [class*="col-"] {
        width: 100%;
    }
    .header-contact {
    font-size: 0.7em;

    }
    .text-center:first-child>h3{
    margin-bottom:25px;
}
    .text-center:first-child>.text-left{
    text-align: center !important;
    margin-bottom: 20px;
    }
}
</style>

