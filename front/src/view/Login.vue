<script>
import axios from 'axios';
import { mapState } from 'vuex';
export default {
    data() {
        return {
            name: "",
            password: "",
        };
    },
    computed: {
        ...mapState({
            idUser: state => state.idUser
        })
    },
    methods: {
        async onSubmit() {
            const user = {name: this.name, password: this.password}
            axios.post('http://localhost:3333/login', user).then(({data}) => {
                if(data.user) {
                    localStorage.setItem('idUser',data.user.id)
                    localStorage.setItem('nameUser',data.user.name)
                    this.$router.push('/home')
                }
                else alert('Usuário não encontrado')
            }).catch(error => {
                console.log(error)
            })
        }
    },
    mounted() {
        localStorage.setItem('idUser', undefined)
        localStorage.setItem('nameUser', undefined)
    }
};
</script>

<template>
    <form id="box" @submit.prevent="onSubmit">
        <h1>Login{{idUser}}</h1>
        <input type="name" v-model="name" />
        <input type="password" v-model="password" />
        <input type="submit" value="ENTRAR" />
        <router-link to="/signup">criar conta aqui</router-link>
    </form>
</template>

<style scoped>
h1 {
    color: white;
}
#app {
    color: #fff;
    justify-content: center;
}
#box {
    background-color: black;
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 400px;
    height: 60vh;
    min-height: 194px;
    margin-top: 20vh;
    align-items: center;
    border-radius: 10px;
}
h1 {
    margin-top: 15vh;
}
input {
    color: #fff;
    font-size: 15px;
    background: none;
    border-radius: 8px;
    border-color: #fff;
    border-style: solid;
    margin-bottom: 10px;
    width: 200px;
    transition: 0.25s;
    height: 25px;
}
input:hover {
    transition: 0.25s;
    border-radius: 12px;
    width: 240px;
    height: 35px;
}
input:focus {
    transition: 0.25s;
    border-radius: 12px;
    width: 240px;
    height: 35px;
}
input[type="submit"] {
    padding: 5px;
    width: 100px;
    height: 30px;
    padding-inline: 15px;
    transition: 0.25s;
}
input[type="submit"]:hover {
    background: #fff;
    color: black;
    cursor: pointer;
    width: 120px;
    height: 35px;
    transition: 0.25s;
}
</style>