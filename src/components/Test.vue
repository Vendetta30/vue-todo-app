<template>
  <div class="test">
    <input type="text" v-model="title"/><br/>
    <h1>{{title}}</h1>
    <p v-if="showName">{{user.firstName}}</p>
    <p v-else v-text="user.lastName"></p>
    <hr/>
    <ul>
      <li v-for="item in items" v-bind:key="item">
        {{item.title}}
      </li>
    </ul>
    <hr/>
    <button v-on:click="greet">Say Greeting</button>
    <hr/>
    <input type="text" v-on:keyup="pressKey" v-on:keyup.enter="enterHit"/>
  </div>
</template>

<script>
  export default {
    name: "test",
    data() {
      return {
        title: "Hello World",
        user: {firstName: "Vijay", lastName: "Shukla"},
        showName: true,
        items: [
          {title: "Angular JS"},
          {title: "React"},
          {title: "Ionic"}
        ]
      }
    },
    methods: {
      greet: function () {
        alert("Hello Folks !!!");
      },
      pressKey: function (e) {
        console.log(e.target.value);
      },
      enterHit: function (e) {
        console.log('You hit enter');
      }
    }
  }
</script>

<style scoped>

</style>
