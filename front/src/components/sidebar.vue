<template>
    <div class="two wide column">
        <div class="sidebar">
            <div class="sidebar-list ui vertical menu">
                <router-link to="/" class="sidebar-list__item item">
                    <div class="ui teal label violet">4</div>
                    <span>Обучать модель</span>
                </router-link>
                <router-link to="/messages" class="sidebar-list__item item">
                    <span>Сообщения</span>
                </router-link>
                <router-link to="/prediction" class="sidebar-list__item item">
                    <div class="ui teal label">4</div>
                    Предсказание
                </router-link>                
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'sidebar'
}
</script>

<style lang="scss">

.sidebar {
    &-list {
        height: 100vh !important;
        position: fixed;
    }    
}

</style>

