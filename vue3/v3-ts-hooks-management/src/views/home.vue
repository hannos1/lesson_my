<template>
    <div>
        <v-header />
        <v-sidebar />
        <div class="content-box">
            <div class="content">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import vHeader from '../components/header.vue';
import vSidebar from '../components/side.vue';

</script>

<style scoped>

</style>