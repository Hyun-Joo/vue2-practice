<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <modals-container/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import DelPopup from "./components/DelPopup";

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  mounted(){
    this.doc_del_rendar();

  },methods : {
    doc_del_rendar(){
      this.$modal.show(DelPopup,{
        hot_table : 'data',
        modal : this.$modal },{
        name: 'dynamic-modal',
        width : '330px',
        height : '130px',
        draggable: true,
      })
    }
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
