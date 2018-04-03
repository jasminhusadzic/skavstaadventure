<template>
    <div class="container">
    <div class="row">
        <div class="col-md-12">
            <h3 v-lang.categories.information.terms></h3>
            <p class="text-justify" v-lang.categories.information.termsText></p>
        </div>
        <div class="col-md-12">
            <h3 v-lang.categories.information.booking></h3>
            <p class="text-justify" v-lang.categories.information.bookingText></p>
        </div>
        <div class="col-md-12">
            <h3 v-lang.categories.information.payment></h3>
            <p class="text-justify" v-lang.categories.information.paymentTextOne></p>
            <p class="text-justify" v-lang.categories.information.paymentTextTwo></p>
        </div>
        <div class="col-md-12">
            <h3 v-lang.categories.information.amendments></h3>
            <p class="text-justify" v-lang.categories.information.amendmentsText></p>
        </div>
        <div class="col-md-12">
            <h3 v-lang.categories.information.costs></h3>
            <p class="text-justify" v-lang.categories.information.costsTextOne></p>
            <ul>
                <li v-lang.categories.information.costsList.textOne></li>
                <li v-lang.categories.information.costsList.textTwo></li>
                <li v-lang.categories.information.costsList.textThree></li>
                <li v-lang.categories.information.costsList.textFour></li>
            </ul>
            <p class="text-justify" v-lang.categories.information.costsTextTwo></p>
        </div>
        <div class="col-md-12">
            <h3 v-lang.categories.information.age></h3>
            <p class="text-justify" v-lang.categories.information.ageText></p>
        </div>
        <div class="col-md-12">
            <h3 v-lang.categories.information.generalTerms></h3>
            <h6 v-lang.categories.information.responsible></h6>
            <p class="text-justify" v-lang.categories.information.responsibleTextOne></p>
            <p class="text-justify" v-lang.categories.information.responsibleTextTwo></p>
            <ul>
                <li v-lang.categories.information.responsibleList.textOne></li>
                <li v-lang.categories.information.responsibleList.textTwo></li>
                <li v-lang.categories.information.responsibleList.textThree></li>
                <li v-lang.categories.information.responsibleList.textFour></li>
                <li v-lang.categories.information.responsibleList.textFive></li>
            </ul>
            <p class="text-justify" v-lang.categories.information.responsibleTextThree></p>
        </div>
        <div class="col-md-12">
            <h6 v-lang.categories.information.travelGuarantee></h6>
            <p class="text-justify" v-lang.categories.information.travelGuaranteeText></p>
        </div>
        <div class="col-md-12">
            <h6 v-lang.categories.information.luggage></h6>
            <p class="text-justify" v-lang.categories.information.luggageText></p>
        </div>
        <div class="col-md-12">
            <h6 v-lang.categories.information.wrong></h6>
            <p class="text-justify" v-lang.categories.information.wrongTextOne></p>
            <p class="text-justify" v-lang.categories.information.wrongTextTwo></p>
        </div>
        <div class="col-md-12">
            <h6 v-lang.categories.information.rights></h6>
            <ul>
                <li v-lang.categories.information.rightsList.textOne></li>
                <li v-lang.categories.information.rightsList.textTwo></li>
                <li v-lang.categories.information.rightsList.textThree></li>
                <li v-lang.categories.information.rightsList.textFour></li>
                <li v-lang.categories.information.rightsList.textFive></li>
                <li v-lang.categories.information.rightsList.textSix></li>
                <li v-lang.categories.information.rightsList.textSeven></li>
                <li v-lang.categories.information.rightsList.textEight></li>
                <li v-lang.categories.information.rightsList.textNine></li>
                <li v-lang.categories.information.rightsList.textTen></li>
                <li v-lang.categories.information.rightsList.textEleven></li>
                <li v-lang.categories.information.rightsList.textTwelve></li>
                <li v-lang.categories.information.rightsList.textThirteen></li>
            </ul>
        </div>
        <div class="col-md-12">
            <h6 v-lang.categories.information.disputes></h6>
            <p class="text-justify" v-lang.categories.information.disputesText></p>
        </div>
        <div class="col-md-12">
            <h6 v-lang.categories.information.forceMejaure></h6>
            <p class="text-justify" v-lang.categories.information.forceMejaureText></p>
        </div>
        <div class="col-md-12">
            <h6 v-lang.categories.information.personalData></h6>
            <p class="text-justify" v-lang.categories.information.personalDataText></p>
        </div>
        <div class="col-md-12">
            <em><p class="text-justify" v-lang.categories.information.message></p></em>
        </div>
    </div>
</div>
</template>
<script>

export default {
    name: 'Information',
    data(){
        return {
            msg : 'information'
        }
    }
}

</script>
<style scoped>
 .container {
     margin-top:25px;
     font-size: 0.9em;
 }
 li {
     color:rgb(92, 92, 95);
 }
</style>