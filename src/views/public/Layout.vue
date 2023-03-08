<template>
    <div class="public">
        Public Layout
        <PublicNav />
        <router-view />
    </div>
</template>
<script>
import PublicNav from '@/components/publicNav.vue'
    export default {
        name: 'Layout',
        components: {
            PublicNav
        }
    }
</script>
<style>
   
</style>