import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state() {
    return{
      todos:[
        {id:1,todo:"One"},
        {id:2,todo:"two"},
        {id:3,todo:"three"},
        {id:4,todo:"four"},
        {id:5,todo:"three"},
        {id:6,todo:"three"},
        {id:7,todo:"seven"},
      ]
    }
  },
  mutations: {},
  actions: {},
  modules: {}
});
