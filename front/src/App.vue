<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    {{title}}
    <button v-on:click="change">change</button>
  </div>
</template>

<script>

export default {
  name: 'App',
  computed:{
    title(){
      return this.$store.state.title
    }
  },
  methods:{
    change(){
      this.$store.commit("setTitle", "title")
    }
  },
  mounted(){
    this.$store.dispatch("getTitle")
  }
}
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
