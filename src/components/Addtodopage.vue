<template>
    <div>
      <h1 style="text-align:center; padding:20px 0" >Add your todo here!</h1>     

      <v-form>
     
          <v-col
            cols="12"
            sm="6"
          >
            <v-text-field
              v-model="message1"
              label="Regular"
              clearable
            ></v-text-field>
          </v-col>
      </v-form>
    </div>
</template>

