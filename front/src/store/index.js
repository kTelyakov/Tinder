import Vue from 'vue'
import Vuex from 'vuex'
import girls from './allGirls'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
        girls
	},
	strict: false
})
