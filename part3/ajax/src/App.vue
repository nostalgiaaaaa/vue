<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import ApiClient from './components/ApiClient.vue';
import LameList from './components/NameList.vue';
import NameList from './components/NameList.vue';
</script>

<template>
  <div>
    <ApiClient></ApiClient>
    <NameList></NameList>
  </div>
</template>

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
