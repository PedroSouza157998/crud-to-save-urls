<script>
export default {
    name: 'Header'
}
</script>

<template>
<div id="header">
    <h1>URLS</h1>
    <div id="links">
        <a href="#">Criar URL</a>
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
a {
    margin-right: 10px;
}
h1 {
    margin-top: 0;
    margin-left: 10px;
    padding-top: 5px;
}
</style>