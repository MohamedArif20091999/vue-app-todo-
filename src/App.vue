<template>
  <v-app>
    <appbar></appbar>
    <v-main>
      <div style="padding:20px"> <h1 style="text-align:center; color:brown;"> Your todo's</h1> </div>
      <todoview></todoview>
    </v-main>
  </v-app>
</template>

<script>
import Appbar from './components/Appbar.vue';
import Todoview from './components/Todoview.vue';

export default {
  name: "App",

  components: {
    Appbar,
    Todoview
  },

  data: () => ({
    //
  })
};
</script>
