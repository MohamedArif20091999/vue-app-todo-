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
        {id:7,todo:"seven Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"},
      ]
    }
  },
  mutations: {},
  actions: {},
  modules: {}
});
