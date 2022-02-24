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
            document.location.reload(true)
        },
        deleteUrl(id) {
            axios.delete('http://localhost:3333/delete_url', {id}).then((_) => {document.location.reload(true)}).catch(error => {
                console.log(error)
            })
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
    
        <div id="card" v-for="url in urls" :key="url.id">
            <div @click.prevent="navigate(url.value_url, url.id)" >
                <strong style="margin-bottom: 20px;"> {{url.label_url}} </strong>
                <div style="display: flex;flex-direction: row;margin-top: 12px;">
                    <strong style="display: flex;flex-direction: column;">    
                        usuário: 
                    </strong>
                    {{url.name_user == 'undefined' || !url.name_user ? 'anônimo' : url.name_user}}
                </div> (url.minify/{{ url.id }}.com)
            </div>
            <label style="margin-right: 10px;margin-top: 5px;">Acessos: {{url.access || 0}}</label>
            <button v-if="idUser !== 'undefined' && idUser==url.id_user"  @click="deleteUrl( url.id)">DELETAR</button>
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
    height: 100px;
    margin: auto;
    margin-bottom: 20px;
    background-color: gray;
    border-radius: 10px;
    cursor: pointer;
}
</style>