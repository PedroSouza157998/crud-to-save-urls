<script>
import axios from 'axios';
export default {
    name: 'UrlInput',
    data() {
        return {
            url: '',
            labelUrl: ''
        }
    },
    methods: {
        onSubmit() {
            const newUrl = {
                value_url: this.url,
                label_url: this.labelUrl,
                id_user: localStorage.getItem('idUser'),
                name_user: localStorage.getItem('nameUser') == undefined || !localStorage.getItem('nameUser') ? 'anônimo' : localStorage.getItem('nameUser')
            }
            axios.post('http://localhost:3333/create_url', newUrl).then(({ data }) => {
                console.log(data)
            }).catch(error => {
                console.log(error)
            })
        }
    }
}
</script>

<template>
    <div id="box-label">
    
        <h1 style="margin-left: 10px;"> Insira sua URL aqui </h1>
    
        <form @submit="onSubmit">
    
            <div style="margin-left: 20px;display: flex;flex-direction: column;">
    
                Url:
    
                <input v-model="url" minlength="5" maxlength="120" /> Titulo Url:
    
                <input v-model="labelUrl" minlength="1" maxlength="20" />
    
                <input value="ENVIAR" type="submit" />
    
            </div>
    
        </form>
    
    </div>
</template>

<style scoped>
#box-label {
    position: absolute;
    display: flex;
    justify-content: center;
    flex-direction: column;
    top: 50%;
    left: 50%;
    margin-left: -200px;
    margin-top: -150px;
    background-color: black;
    border-radius: 10px;
    width: 400px;
    height: 300px;
}

input {
    color: #fff;
    font-size: 18px;
    background: none;
    border-radius: 8px;
    border-color: #fff;
    border-style: solid;
    margin-bottom: 10px;
    width: 300px;
    transition: 0.25s;
    height: 30px;
}

input:hover {
    transition: 0.25s;
    border-radius: 12px;
    width: 340px;
    height: 40px;
}

input[type="submit"] {
    padding: 5px;
    font-size: 15px;
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