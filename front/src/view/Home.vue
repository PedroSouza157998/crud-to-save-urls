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
        navigate(urlEndPoint, id) {
            axios.put('http://localhost:3333/update_url', {id}).then((_) => {}).catch(error => {
                console.log(error)
            })
            if (urlEndPoint.split(':')[0] === 'https') window.open(urlEndPoint, '_blank')
            else window.open('https://' + urlEndPoint, '_blank')
        }
    },
    async mounted() {
        axios.get('http://localhost:3333/urls').then(({ data }) => {
            this.urls = data
        }).catch(error => {
            console.log(error)
        })
    }
}
</script>

<template>
    <Header/>
    <ul id="urls">
    
        <div id="card" @click="navigate(url.value_url, url.id)" v-for="url in urls" :key="url.id">
            <div>
                <strong style="display: flex;flex-direction: column;">    
                    {{url.name_user || 'anônimo'}}
                </strong> (url.minify/{{ url.id }}.com)
            </div>
            <label style="margin-right: 10px;margin-top: 5px;">Acessos: {{url.access || 0}}</label>
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