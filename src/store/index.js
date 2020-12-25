import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state() {
    return{
      todos:[
        {id:1,todo:"One",checked:false},
        {id:2,todo:"two",checked:false},
        {id:3,todo:"three",checked:false},
        {id:4,todo:"four",checked:false},
        {id:5,todo:"five",checked:false},
        {id:6,todo:"six",checked:false},
        {id:7,todo:"seven",checked:false},
      ],
      // postcontent:{}
    }
  },
  mutations: {
    delete(state,todo){
      var changedtodos=state.todos.filter(function(itodo){
        return itodo.id!=todo.id
    })
      state.todos=changedtodos;
    },
    
    checkClick(state,id){
      let item=state.todos.find(i => i.id == id)
      item.checked= !item.checked;
    },
    add(state,post){
      
      var postcontent={
        id:state.todos.length+1,
        todo:post,
        checked:false
      }
      if(post.length>=1){
        state.todos.push(postcontent);
      }
    }


  },
  actions: {},
  modules: {}
});
