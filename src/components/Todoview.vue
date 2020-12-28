<template>
    <div>
         <v-app>
    <appbar></appbar>
    <v-main>
      <div  style="padding:20px"> <h1 style="text-align:center; color:brown;"> Your todo's</h1> </div>
      <!-- <todoview></todoview> -->
      
          <ul v-for="todo in todos" :key="todo._id">
            <div style="padding:5px">
                
                <v-card elevation="5" class="mx-auto">
                <v-card-title v-bind:class="{'check':todo.checked}">{{todo.todo}}</v-card-title>
                <v-card-actions>
                    <v-row align="center" >
                        <v-row>
                    <v-btn icon right @click="checkClick(todo)">
                        <v-icon medium color="lime darken-2" >mdi-check-circle</v-icon> 
                    </v-btn> 
                        </v-row>
                          
                    <v-btn icon @click="deletetodoo(todo)" > 
                        <v-icon  medium color="brown lighten-0" >mdi-delete</v-icon> 
                    </v-btn> 
                    </v-row>
                                    
                </v-card-actions>
               
            </v-card>
            </div>          
        </ul>
      
    </v-main>
     <addtodo @changed-data="posttodoo" ></addtodo>
  </v-app>
</div>
</template>

<script>
import Appbar from "./Appbar.vue";
import Addtodo from "./Addtodo.vue";
import axios from 'axios';

export default {
    components:{
        Appbar,
        Addtodo,
    
    },
    data() {
        return {
            isChecked: false,
            todos:[],
        }
    },
    // computed:{
    //     renew(){
    //         return this.todos;
    //     }
    // },
   
    methods:{
        deletetodoo(todo){
            // console.log(todo._id);
            // return this.$store.commit('delete',todo)
            axios.get('http://localhost:3000/todos/'+todo._id)
            // window.location.reload();
            .then((response)=>{
                console.log(response.data);
                this.todos=response.data

            })
        },
        posttodoo(post){
            if(post.length>=1){
                 console.log("posttodooooo method");
            console.log(post);
            const todo={
          todo:post,
          checked:false
        }
        
         axios.post('http://localhost:3000/addTodo/',todo)
        .then((response)=>{
          console.log(response);
          this.load();
          
        })
        
            }
            else{
                console.log("type something");
            }
            // alert("posttosoooooo")
           
        },

        checkClick(todo){
        //    console.log(todo);
           axios.get('http://localhost:3000/todoCheck/'+todo._id)
           .then((response)=>{
               console.log(response.data);
               this.todos=response.data;
           })

            // return this.$store.commit('checkClick',id)  
        },
        load(){
            // alert("Hai")
             axios.get('http://localhost:3000/todos')
        .then((response)=>{
            // console.log(response.data);

            this.todos=response.data
        })
        .catch((error)=>{
            console.log(error);
        })
        }
    },
   
    mounted() {
        axios.get('http://localhost:3000/todos')
        .then((response)=>{
            // console.log(response.data);

            this.todos=response.data
        })
        .catch((error)=>{
            console.log(error);
        })
    }

}
</script>

<style scoped>
    .v-card{
        max-width: 70%;
       
        margin: auto;
        
    }
    .v-main{
        flex: 0;
    }
    .row{
        margin-left: -4px;
        margin-right: -9px ;

    }
    .check{
        text-decoration: line-through;
        text-decoration-color: brown;
    }

</style>