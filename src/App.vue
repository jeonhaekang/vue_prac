<template>
  <div id="app">
    <MainHeader />
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import MainHeader from "./components/layout/MainHeader.vue";

export default {
  name: "App",
  components: {
    MainHeader,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
