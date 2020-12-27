<template>
  <router-view @changed="load();" ></router-view>
</template>

<script>
// import Appbar from './components/Appbar.vue';
// import Todoview from './components/Todoview.vue';
// import Addtodo from './components/Addtodo.vue';
 

export default {
  name: "App",

  components: {
    // Appbar,
    // Todoview,
    // Addtodo
  },

  data: () => ({
    //
  })
};
</script>
