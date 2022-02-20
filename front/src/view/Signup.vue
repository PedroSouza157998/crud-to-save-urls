<script>
import axios from 'axios';
export default {
    data() {
        return {
            name: "",
            password: "",
        };
    },
    methods: {
        async onSubmit() {
            const user = {name: this.name, password: this.password}
            axios.post('http://localhost:3333/signup', user).then(({data}) => {
                if(data.success) window.location.href = "http://localhost:3000/login"
            }).catch(error => {
                console.log(error)
            })
        }
    },
}
</script>

<template>
    <form id="box" @submit.prevent="onSubmit">
        <h1>Criar conta</h1>
        <input type="name" v-model="name" />
        <input type="password" v-model="password" />
        <input type="submit" value="CRIAR" />
    </form>
</template>