<template>
  <div id="app">
    {{msg}}
    <!--<test msg="From Parent"/>-->
    <user/>
  </div>
</template>

<script>
  import Test from './components/Test';
  import User from './components/User';

  export default {
    name: 'App',
    components: {
      Test, User
    },
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
