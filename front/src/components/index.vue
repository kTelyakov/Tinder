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
                    <div class="image"><img src="https://www.barahla.net/images/photo/4/20150829/4019910/big/144086134176636500_big.jpg" /></div>
                    <div class="content">
                        <div class="header">{{ currentGirl.name }}<span class="right floated ui label">{{ currentGirl.age }} лет</span></div>
                        <div class="meta">{{ currentGirl.prof }}</div>
                        <div class="description">{{ currentGirl.descr }}</div>
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
            girls: [
                {
                    name: 'Света',
                    age: '27',
                    prof: 'Дизайнер',
                    descr: 'lorem ipsum asd',
                    img: "https://www.barahla.net/images/photo/4/20150829/4019910/big/144086134176636500_big.jpg"
                },
                {
                    name: 'Света2',
                    age: '28',
                    prof: 'Дизайнер',
                    descr: 'lorem ipsum asd',
                    img: "https://www.barahla.net/images/photo/4/20150829/4019910/big/144086134176636500_big.jpg"
                },
                {
                    name: 'Света3',
                    age: '29',
                    prof: 'Дизайнер',
                    descr: 'lorem ipsum asd',
                    img: "https://www.barahla.net/images/photo/4/20150829/4019910/big/144086134176636500_big.jpg"
                }
            ],
            currentGirl: null,
            count: 0,
            dataEmpty: false
        }
    },
    created() {
        this.currentGirl = this.girls[0]
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
    }
}
</script>
<style lang="scss">

</style>
