<script>
import axios from 'axios';
import Header from '../components/header.vue';
export default {
    name: 'Home',
    components: {
        Header
    },
    data() {
        return {
            idUser: localStorage.idUser || undefined,
            urls: []
        }
    },
    methods: {
        navigate(urlEndPoint) {
            if(urlEndPoint.split(':')[0]==='https')window.open(urlEndPoint, '_blank')
            else window.open('https://'+urlEndPoint, '_blank')
        }
    },
    async mounted() {
        axios.get('http://localhost:3333/urls').then(({ data }) => {
            console.log(data)
            this.urls = data
        }).catch(error => {
            console.log(error)
        })
    }
}
</script>

<template>
    <Header/>
    <h1>Home</h1>
    <h2>{{ idUser }}</h2>
    
    <ul id="urls">
        <div id="card" @click="navigate(url.value_url)" v-for="url in urls" :key="url.id">
            <div>
                <strong style="display: flex;flex-direction: column;">
                    {{ url.label_url }}
                </strong>
                ({{url.name_user || 'anônimo'}})
            </div>
            <label style="margin-right: 10px;margin-top: 5px;">Acessos: {{url.access}}</label>
        </div>
    </ul>
</template>

<style scoped>
#urls {
    display: flex;
    justify-content: center;
    flex-direction: column;
}
#card {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 300px;
    height: 120px;
    margin: auto;
    margin-bottom: 20px;
    background-color: aliceblue;
    border-radius: 10px;
    cursor: pointer;
}
</style>