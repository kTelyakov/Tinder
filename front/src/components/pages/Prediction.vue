<template>
    <div class="fourteen wide column p-5">
        <div class="content ui">
            <!-- <Modal /> -->
            <h1 class="ui header flex -middle -center w100p">Предсказание модели</h1>
            <div class="ui link cards flex -center pt-10px pb-10px pl-5px pr-5px"> 
                <card v-for="(girl, i) in prediction" :key="i" 
                    :img="girl.person.photos[0].link" 
                    :name="girl.person.name" 
                    :age="girl.person.age" 
                    :descr="true"
                    like
                    :likeStat="girl.person.model_result === 'like' ? true : false" 
                    class="mr-15px mb-15px"/>
                <!-- <div v-for="(girl, i) in prediction" :key="i" :class="`card ${ i%3 === 0 ? 'mb-10px' : '' }`">
                    <div class="images" style="height:290px;overflow:hidden;">
                        <img :src="girl.person.photos[0].link">                        
                    </div>
                    <div class="content">
                        <div class="header">{{ girl.person.name }}
                            <span class="right floated ui label">{{ girl.person.age }} лет</span>
                            <span :class="`right floated ui label mr-5px ${girl.person.model_result === 'like' ? 'green' : 'red'} `">{{ girl.person.model_result }}</span>                            
                        </div>
                    </div>
                    <div class="extra content">
                        <div class="ui buttons flex -center">
                            <div class="ui button teal" @click="showModal(girl._id)">Подробнее</div>
                        </div>
                    </div>
                    <div class="modal pos-centered-v w50px h50p" :ref="girl._id">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias maxime in natus non, odit accusamus recusandae, architecto aliquid et quia quidem temporibus, corrupti vero debitis sit enim voluptatem saepe quae!</p>
                    </div>
                </div>                 -->
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
            prediction: []
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
        showModal() {

        }
    }
}
</script>

<style lang='scss'>

</style>
