import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import girls from './allGirls'

Vue.use(Vuex)

export const store = new Vuex.Store({
	state: {
		allGirls: null,
		predictedGirls: []    
	},
	getters : {
	    	GIRLS : state => {
			return state.allGirls;
		},
		PREDICTION : state => {
			return state.predictedGirls;
		}
	},
	mutations: {
		SET_GIRLS : (state,payload) => {
			state.allGirls = payload
		},
		SET_PREDICTION : (state,payload) => {
			state.predictedGirls = payload
		},
		ADD_GIRLS : (state,payload) => {
			state.allGirls.push(payload)
		},
		ADD_GIRL_STAT: (state, payload) => {
			state.allGirls.push(payload)
		}
	},
	actions : {
		GET_GIRLS : async (context,payload) => {
			let { data } = await Axios.get('http://localhost:8081/api/girls')
			context.commit('SET_GIRLS',data)
		},
		GET_PREDICTION : async (context,payload) => {
			let { data } = await Axios.get('http://localhost:8081/api/prediction')
			context.commit('SET_PREDICTION',data)
		},
		SET_GIRL_STAT: async (context, payload) => {
			let { data } = await Axios.get(`http://localhost:8081/api/saveGirl?result=${payload.result}&id=${payload.id}`)
			context.commit('ADD_GIRL_STAT', data)
		}
		// SAVE_GIRLS : async (context,payload) => {
		// 	let { data } = await Axios.post('http://yourwebsite.com/api/todo')
		// 	context.commit('ADD_TODO',payload)
		// },
	}  
      })
