import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        tabla:[],
        data:null,
        montoData:{},
    },
    mutations: {
        addTabla(state){
             console.log(state)
            state.tabla=[...state.tabla,state.data]
        },
    },
    actions: {
        addTablaAction(context){
            context.commit('addTabla')
        },
        
    },
    getters: {
       getTabla(state){
           return state.tabla;
       } 
    }
})