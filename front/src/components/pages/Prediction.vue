<template>
    <div class="fourteen wide column p-5">
        <div class="content ui">
            <h1 class="ui header flex -middle -center w100p">Предсказание модели</h1>
            <div class="ui link cards flex -center pt-10px pb-10px pl-5px pr-5px"> 
                <card v-for="(girl, i) in prediction" :key="i" 
                    :img="girl.person.photos[0].link" 
                    :name="girl.person.name" 
                    :age="girl.person.age" 
                    :descr="true"
                    like
                    :likeStat="girl.person.model_result === 'like' ? true : false" 
                    @showModal="QshowModal({
                        name: girl.person.name,
                        age: girl.person.age,
                        job: girl.person.job,
                        bio: girl.person.bio
                    })"
                    class="mr-15px mb-15px">
                </card>
                <Modal :obj="modalData" v-if="showM" @closeModal="showM = false" />
            </div>
        </div>
    </div>
</template>

<script>
import Modal from '../modal'
import card from '../ui/card'
export default {
    data() {
        return {
            prediction: [],
            showM: false,
            modalData: {}
        }
    },
    components: {
        Modal,
        card
    },
    mounted() {
        this.$store.dispatch('GET_PREDICTION').then(()=>{
            this.prediction = this.$store.getters.PREDICTION
            console.log(this.prediction)
        }).catch(()=>{
            console.log('get prediction from store failed...')
        })
    },
    methods: {
        QshowModal(obj) {
            console.log('QshowMOdal....')
            this.modalData = Object.assign({}, obj)
            console.log('this.modalData ', this.modalData.name)
            this.showM = true
        }
    }
}
</script>

<style lang='scss'>

</style>
