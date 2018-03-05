<template>
  <div id="app">
    {{msg}}<br/>
    <router-link :to="{name:'User'}">User</router-link>
    <router-link to="/test">Test</router-link>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        msg: "Welcome to Vue Era"
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
