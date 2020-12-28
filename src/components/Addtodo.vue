<template>
    <div class="plus" >
          <v-btn @click="dialog=true" color="lime darken-4" fab dark absolute right>
              <v-icon  x-large color="white lighten-0" >mdi-plus</v-icon> 
           </v-btn> 
           <v-form @submit.prevent="submit" id="submitForm" > 
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
              type="submit"
              color="lime darken-4"
              text
              form="submitForm"
              @click="dialog = false; submitt();"
            >
              save
            </v-btn>
  
           
          </v-card-actions>
        </v-card>
      </v-dialog>
           </v-form>
    
             
   
         

    </div>
</template>

<script>
// import axios from 'axios';

export default {
 
    data() {
        return {
            dialog:false,
            post:'',
            // postcontent:{},
           todoContent:'',
         checked:Boolean
        }
    },

    methods:{
      // submit(){
      //   // alert("Post method")
      //   console.log(this.post);
      //   const todo={
      //     todo:this.post,
      //     checked:false
      //   }
      //   axios.post('http://localhost:3000/addTodo/',todo)
      //   .then((response)=>{
      //     console.log(response);
         
          
      //   })

      // },
      submit(){
        console.log("form-submit")
         const post=this.post
        this.$emit('changed-data',post)
      
      },
      submitt(){
        console.log("click  method");
        //  const post=this.post
        // this.$emit('changed-data',post)
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