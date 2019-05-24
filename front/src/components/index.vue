<template>
    
                   
    <div class="thirteen wide column poer">
        <div class="content ui segment">
            <h1 class="ui header flex -center">Осталось обучить: 100</h1>
            <hr/>
            <div class="ui link cards flex -center pt-10px pb-10px pl-5px pr-5px pt-15px">
                <div v-if="dataEmpty">
                    <h2>Элементы для обучения закончены</h2>
                </div>
                <div class="card w50p" v-else>
                    <div class="image"><img :src="currentGirl.link" /></div>
                    <div class="content">
                        <div class="header">Test<span class="right floated ui label">22 лет</span></div>
                        <div class="meta">prof</div>
                        <div class="description">descr</div>
                    </div>
                    <div class="extra content">
                        <div class="ui buttons flex -center">
                            <div class="ui teal button" @click="increase()">Нравится</div>
                            <div class="ui red button">Не нравится</div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
    
        
</template>
<script>

export default {
    name: 'index',
    data() {
        return {
            girls: [],
            currentGirl: null,
            count: 0,
            dataEmpty: false
        }
    },
    created() {
        
    },
    mounted() {
        console.log('mounted...')
        this.$store.dispatch('GET_GIRLS').then(()=>{
            this.girls = this.$store.getters.GIRLS
            this.currentGirl = this.girls[0]
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
        }
    },
    computed: {
        girlsList(){
            return this.$store.getters.GIRLS
        }
    }
}
</script>
<style lang="scss">

</style>
