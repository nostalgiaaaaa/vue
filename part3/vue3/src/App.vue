<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue';
import Footer from './components/TheFooter.vue';
import './assets/css/main.css';
import './assets/css/fontawesome-all.min.css';
</script>

<template>
  <div>
    <img alt="Vue logo" src="./assets/kakao.png" />
    <HelloWorld msg="Nostalgia" />
    <Footer></Footer>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
</style>
