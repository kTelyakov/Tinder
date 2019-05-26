<template>
    <div>
        <div class="tinder-card pos-rel">
            <img :src="img" />
            <div class="tinder-card__slider">
                <div class="tinder-card__slider-item"/>
                <div class="tinder-card__slider-item"/>
                <div class="tinder-card__slider-item"/>
            </div>
            <span v-if="like" :class="`ui label pos-tl m-1 ${likeStat ? 'green' : 'red'}`">{{ likeStat ? 'Like' : 'Pass' }}</span>
            <div class="tinder-card__info" v-if="descr">
                <div class="tinder-card__info-text pos-rel flex -middle">
                    <h4 class="m0">{{ name }}</h4>
                    <div class="tinder-card__info-text-age ui label white big c-white ml-10px">{{ age }}</div>
                </div>            
                <i class="fas fa-info-circle" @click="modal()"></i>
            </div>        
        </div>
        <div class="tinder-card-buttons flex -middle -center mt-15px">
            <div class="tinder-card-buttons__button flex -middle -center mr-10px">
                <i class="fas fa-times -pink"></i>
            </div>
            <div class="tinder-card-buttons__button flex -middle -center ">
                <i class="fas fa-heart -salad" @click="increase()"></i>
            </div>
        </div>
        <slot/>
    </div>
</template>
<script>
export default {
    name: 'Card',
    props: {
        name: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true
        },
        img: {
            type: String
        },
        descr: {
            type: Boolean
        },
        like: {
            type: Boolean
        },
        likeStat: {
            type: Boolean
        }

    },
    data() {
        return {
            count: 0
        }
    },
    methods: {
        increase() {
            // if( this.count === this.girls.length-1) {
            //     alert('Закончились данные')
            //     return this.dataEmpty = true
            // }
            console.log('incarease...')
            this.count = this.count + 1
            this.$emit('increase', this.count)
        },
        modal() {
            this.$emit('showModal')
        }
    }
}
</script>
<style lang="scss">
@import '../../assets/scss/index.scss';
    .tinder {
        &-card {
            height: $cardHeight;
            width: $cardWidth;
            overflow: hidden;
            border-radius: $border-radius;
            box-shadow: $box-shadow;
            position: relative;
            text-align: -webkit-center;
            &__slider {
                &-item {
                    width: 100%;
                    border-radius: 50%;
                    height: 10px;
                    border: 1px solid red;
                }
            }
            &-buttons {
                &__button {
                    border-radius: 100%;
                    background-color: $white;
                    box-shadow: 0 4px 9px 0 rgba(213,218,224,.3);
                    width: 70px;
                    height: 70px;
                    transition: opacity .25s ease,-webkit-transform .25s ease,-webkit-filter .25s ease;
                    transition: transform .25s ease,filter .25s ease,opacity .25s ease;
                    transition: transform .25s ease,filter .25s ease,opacity .25s ease,-webkit-transform .25s ease,-webkit-filter .25s ease;
                    i {
                        font-size: 35px;
                        &.-salad {
                            color: $salad;
                        }
                        &.-pink {
                            color: $pink;
                        }
                        &:hover {
                            cursor: pointer;
                        }
                    }
                }                
            }
            &__info {
                padding: 20px;
                position: absolute;
                bottom: 0;
                @include flex(row, space-between, center);
                width: 100%;
                i {
                    font-size: $cardHeader;
                    color: $white;
                    &:hover {
                        cursor: pointer;
                    }
                }
                &-text {
                    @include flex(row, space-between, center);
                    h4 {
                        font-size: $cardHeader;
                        color: $white;                    
                    }
                    &-age {
                        font-size: $cardAge;
                        color: $white;
                    }
                }
                
            }
            img {
                width: 100%;
                height: 100%;
                border-radius: $border-radius;
            }
        }
    }
</style>
