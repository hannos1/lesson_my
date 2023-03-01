<template>
<div class="continer mb-5">
    <nav-bar></nav-bar>
    <div style="max-width:90%;width:500px;margin:auto;">
      <b v-if="loading">Loading</b>
    </div>
</div>
</template>



<script>
import NavBar from './components/NavBar.vue';

// 放弃使用vue3 setup语法
export default{
  data(){
    return{
      loading:true
    }
  },
  mounted(){
    console.log('挂载了...');
  },
  components:{
    'nav-bar':NavBar
  },
}
</script>


<style>

</style>
