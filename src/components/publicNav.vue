<template>
          <img alt="Vue logo" src="../assets/logo.png">
       <nav>
        <router-link to='/'>Home</router-link> |
        <router-link to='/Contact'>Contact</router-link> |
        <router-link to='/About'>About</router-link> |
      </nav>
</template>
<script>
export default {
    name:'publicNav'
}
</script>
<style>
    img{
        position: absolute;
        right: 30px;
        height: 50px;
    }
</style>