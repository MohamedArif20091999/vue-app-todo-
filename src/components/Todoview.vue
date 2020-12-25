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
                <v-card-title>{{todo.todo}}</v-card-title>
                <v-card-actions>
                    <v-row align="center" justify="end">
                          <v-btn icon>
                        <v-icon medium color="blue darken-2" >mdi-circle-edit-outline</v-icon> 
                    </v-btn>  
                    <v-btn icon>
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

</style>