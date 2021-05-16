<template>
  <div id="app">
    <navbar />
    <img src="./assets/logo.png" />
    <router-view />
  </div>
</template>

<script>
import navbar from './components/Base/Nav'

export default {
  name: "App",
  components: {
    navbar
  }
};
</script>

<style>
@import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  text-align: center;
}
</style>
