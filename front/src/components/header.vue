<script>
import UrlInput from './UrlInput.vue';
export default {
    data() {
        return {
            screenUrlInput: false,
            nameUser: localStorage.getItem('nameUser')
        }
    },
    name: 'Header',
    components: {
        UrlInput
    },
    methods: {
        screenLabel() {
            this.screenUrlInput = !this.screenUrlInput
        }
    }
}
</script>

<template>
<div id="header">
    <div id="back" @click="screenLabel" v-if="screenUrlInput"> </div>
    <UrlInput v-if="screenUrlInput"/>
    <h1>URLS - {{nameUser== undefined || !nomeUser ? 'anônimo' : nameUser}}</h1>
    <div id="links">
        <a href="#" @click="screenLabel">Criar URL</a>
        <router-link to="/login">Fazer login</router-link>
    </div>
</div>
</template>

<style scoped>
#header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 50px;
    margin: 0;
    background-color: black;
    color: #fff;
}
#links {
    padding-top: 14px;
    margin-right: 20px;
}
#back {
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-color: rgba(27, 27, 29, 0.604);
}
a {
    margin-right: 10px;
}
h1 {
    margin-top: 0;
    margin-left: 10px;
    padding-top: 5px;
}
</style>