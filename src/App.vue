<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <hr/> -->
    <date-picker v-model="time1" valueType="format"></date-picker>
    <date-picker v-model="time2" type="datetime"></date-picker>
    <date-picker v-model="time3" range></date-picker>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import DatePicker from 'vue2-datepicker';

export default {
  name: 'App',
  components: {
    HelloWorld,
    DatePicker
  },
  data() {
    return {
        time1: null,
        time2: null,
        time3: null,
      };
  },
  mounted(){

  },
  methods : {
    
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
