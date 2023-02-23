<template>
    <div id="home-wrapper">
        <header class="home-header wrap">
            <router-link to="/category">
                <i class="nbicon nbmenu2"></i>
            </router-link>
            <div class="header-search">
                <span class="app-name">新蜂商城</span>
                <i class="nbicon nbSearch"></i>
                <router-link class="search-title" to="/product-list?from=home">山河无恙，人间皆安</router-link>
            </div>
            <router-link class="login" to="/login">登录</router-link>
        </header>
    </div>
</template>

<script setup>

</script>

<style lang="stylus">
.home-header
    position absolute
    top 0
    left 0
    .nbmenu2
        color green
    .header-search
        display flex
        width 74%

</style>
