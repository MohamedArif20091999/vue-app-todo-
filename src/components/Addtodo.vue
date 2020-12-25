<template>
    <div class="plus" >
          <v-btn @click="dialog=true" color="lime darken-4" fab dark absolute right>
              <v-icon  x-large color="white lighten-0" >mdi-plus</v-icon> 
           </v-btn> 
          <v-dialog
        v-model="dialog"
        max-width="490"
      >
        <v-card>
          <v-card-title class="headline">
            Add your to-do here!
          </v-card-title>
  
           <v-col
          cols="12"
          sm="12"
        >
          <v-text-field
            label="to-do" 
            outlined
            clearable
            color="brown"
            v-model="post"
          ></v-text-field>
        </v-col>
          <v-card-actions>
            <v-spacer></v-spacer>
  
            <v-btn
              color="lime darken-4"
              text
              @click="dialog = false; log();"
            >
              save
            </v-btn>
  
           
          </v-card-actions>
        </v-card>
      </v-dialog>

    </div>
</template>

<script>
export default {
    data() {
        return {
            dialog:false,
            post:'',
            // postcontent:{},
        }
    },
    methods:{
       log() {
          
        
          //  this.postcontent={
          //   id:this.$store.state.todos.length+1,
          //   todo:this.post,
          //   checked:false
          // };
          // if(this.post.length >= 1){
          //   this.$store.state.todos.push(postcontent);
          //    console.log(this.$store.state.todos);
          // }
        this.$store.commit('add',this.post)
        this.post='';
          
       }
    }
}
</script>



<style scoped>
.plus{
    padding-top: 30px;
    padding-bottom: 20px;
    margin-bottom: 100px;
    padding-right: 200px;
    position: fixed;
    bottom: 0px;
    right: 0px;
}
</style>