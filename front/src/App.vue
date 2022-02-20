<script>
import Login from './view/Login.vue'

export default {
    components: {
        Login
    },

}
</script>

<template>
    <h1>
        Hello App!</h1>
    <p>
        <router-link to="/">Go to Home</router-link>
        <router-link to="/about">Go to About</router-link>
    </p>
    <router-view></router-view>
</template>

<style>

</style>