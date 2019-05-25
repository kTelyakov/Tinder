<template>
    
                   
    <div class="thirteen wide column poer">
        <div class="content">
            <!-- <h1 class="ui header flex -center">Осталось обучить: {{ Object.keys(this.girls).length }} </h1> -->
            <div class="ui link cards flex -center pt-10px pb-10px pl-5px pr-5px pt-15px">
                <card name="SVETA" age="32"/>
                <!-- <div v-if="dataEmpty">
                    <h2>Элементы для обучения закончены</h2>
                </div>
                <div v-if="loading">
                    <h2>Идет загрузка...</h2>
                </div> -->
                <!-- <div class="card w50p" v-else>
                    <div class="image">
                        <img :src="currentGirl.link" />
                    </div>
                    <div class="extra content">
                        <div class="ui buttons flex -center">
                            <div class="ui teal button" @click="increase()">Нравится</div>
                            <div class="ui red button">Не нравится</div>
                        </div>
                    </div>
                </div> -->
                
            </div>
        </div>
    </div>
    
        
</template>
<script>
import card from './ui/card'
export default {
    name: 'index',
    data() {
        return {
            girls: [],
            currentGirl: null,
            count: 0,
            dataEmpty: false,
            loading: true
        }
    },
    components: {
        card
    },
    mounted() {
        console.log('mounted...')
        this.$store.dispatch('GET_GIRLS').then(()=>{
            this.girls = this.$store.getters.GIRLS
            this.currentGirl = this.girls[0]
            this.loading = false
            console.log('---------------------')
            console.log(Object.keys(this.girls).length)
        }).catch()
        
    },
    methods: {
        increase() {
            if( this.count === this.girls.length-1) {
                alert('Закончились данные')
                return this.dataEmpty = true
            }
            return this.count = this.count + 1
        }
    },
    watch: {
        count: function() {
            this.currentGirl = this.girls[this.count]
            delete this.girls[this.count]
            console.log(this.girls)
        }
    }
}
</script>
<style lang="scss">

</style>
