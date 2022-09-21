<template>
  <div id="app">
    
  </div>
  <AppLayout>
    <router-view />
  </AppLayout>

</template>

<script lang="ts">
import { defineComponent } from "vue";



export default defineComponent({
  name: "App", 

  data() {
    return {
      layout: 'div',
    }
  },



})
</script>

<style src="../tailwind.css">
#app {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
