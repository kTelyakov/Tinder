<template>
    <div class="tinder-card pos-rel">
        <img src="https://images-ssl.gotinder.com/5ca4c8f1e9a26316002be8be/1080x1350_e03a9f1f-6963-4fd6-88bf-5e3c05911eed.jpg" />
        <div class="tinder-card__info">
            <div class="tinder-card__info-text pos-rel flex -middle">
                <h4 class="">{{ name }}</h4>
                <div class="tinder-card__info-text-age ui label white ">{{ age }}</div>
            </div>            
            <i class="fas fa-info-circle"></i>
        </div>        
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
            type: String,
            required: true
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
            &__info {
                padding: 20px;
                position: absolute;
                bottom: 0;
                @include flex(row, space-between, center);
                width: 100%;
                i {
                    font-size: $cardHeader;
                    color: $white;
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
                border-radius: $border-radius;
            }
        }
    }
</style>
