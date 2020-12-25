<template>
    <div>
         <v-app>
    <appbar></appbar>
    <v-main>
      <div style="padding:20px"> <h1 style="text-align:center; color:brown;"> Your todo's</h1> </div>
      <!-- <todoview></todoview> -->
      
          <ul v-for="todo in $store.state.todos" :key="todo.id">
            <div style="padding:5px">
                
                <v-card elevation="5" class="mx-auto">
                <v-card-title v-bind:class="{'check':todo.checked}">{{todo.todo}}</v-card-title>
                <v-card-actions>
                    <v-row align="center" >
                        <v-row>
                    <v-btn icon right @click="checkClick(todo.id)">
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
     <addtodo></addtodo>
  </v-app>
</div>
</template>

<script>
import Appbar from "./Appbar.vue";
import Addtodo from "./Addtodo.vue";


export default {
    components:{
        Appbar,
        Addtodo,
    },
    data() {
        return {
            isChecked: false
        }
    },
    methods:{
        deletetodoo(todo){
            return this.$store.commit('delete',todo)
        },

        checkClick(id){
           
            return this.$store.commit('checkClick',id)  
        }
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