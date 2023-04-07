<template>
  <el-config-provider :locale="zhCn">
      <router-view />
  </el-config-provider>
</template>

<script setup lang="ts">
// el是全球视野框架
// elconfigprovider 用于依赖注入
import { ElConfigProvider } from 'element-plus';
import zhCn from 'element-plus/es/locale/lang/zh-cn';
// import en from 'element-plus/es/locale/lang/ja';


</script>

<style>
@import './assets/css/main.css';
@import './assets/css/color-dark.css';


</style>