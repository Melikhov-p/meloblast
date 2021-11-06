<template>
  <NavBar/>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #11101D;
}

</style>
<script>
  import NavBar from "./components/NavBar";
  export default {
    components: {NavBar}
  }
</script>