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
            urls: [],
            urls_user: [],
        }
    },
    methods: {
        navigate(urlEndPoint, id) {
            axios.put('http://localhost:3333/update_url', { id }).then((_) => {}).catch(error => {
                console.log(error)
            })
            if (urlEndPoint.split(':')[0] === 'https') window.open(urlEndPoint, '_blank')
            else window.open('https://' + urlEndPoint, '_blank')
            document.location.reload(true)
        },
        favoriting(id) {
            axios.put('http://localhost:3333/favorite_url', { id }).then((_) => {}).catch(error => {
                console.log(error)
            })
            document.location.reload(true)
        },
        deleteUrl(id) {
            axios.post('http://localhost:3333/delete_url', { id: id }).then((_) => { }).catch(error => {
                console.log(error)
            })
            document.location.reload(true)
        }
    },
    async mounted() {
        axios.get('http://localhost:3333/urls').then(({ data }) => {
            this.urls = data
        }).catch(error => {
            console.log(error)
        })
        axios.get(`http://localhost:3333/urls_user/${this.idUser}`).then(({ data }) => {
            this.urls_user = data
        }).catch(error => {
            console.log(error)
        })
    }
}
</script>

<template>
    <Header/>

    <div style="display: flex; justify-content: space-around; margin: auto;">
        <ul v-if="idUser !== 'undefined'" id="urls">
            <h1 style="text-align: center;" > Urls do usuário </h1>
            <div id="card" v-for="url in urls_user" :key="url.id">
                <div @click.prevent="navigate(url.value_url, url.id)">
        
                    <strong style="margin-bottom: 20px; text-overflow: ellipsis; width: 200px; overflow-x: hidden; display: block;"> {{url.label_url}} </strong>
                    <div style="display: flex;flex-direction: row;margin-top: 12px;">
                        <strong style="display: flex;flex-direction: column;">    
                                usuário: 
                            </strong> {{url.name_user == 'undefined' || !url.name_user ? 'anônimo' : url.name_user}}
                    </div> (url.minify/{{ url.id }}.com)
        
                </div>
                <div style="min-width: 110px;">
                    <label style="margin-right: 10px;margin-top: 5px;">Acessos: {{url.access || 0}}</label>
                    <button v-if="idUser !== 'undefined' && idUser==url.id_user" @click="deleteUrl(url.id)">DELETAR</button>
                    <button v-if="idUser !== 'undefined' && idUser==url.id_user" @click="favoriting(url.id)">FAVORITAR</button>
                </div>
                <div v-if="url.favorite == true" style="font-size: 22px; height: fit-content;" >⭐</div>
            </div>
        
        </ul>
        <ul id="urls">

            <h1> Urls mais acessadas </h1>
            <div id="card" v-for="url in urls" :key="url.id">
                <div @click.prevent="navigate(url.value_url, url.id)">
        
                    <strong style="margin-bottom: 20px; text-overflow: ellipsis; width: 200px; overflow-x: hidden; display: block;"> {{url.label_url}} </strong>
                    <div style="display: flex;flex-direction: row;margin-top: 12px;">
                        <strong style="display: flex;flex-direction: column;">    
                                usuário: 
                            </strong> {{url.name_user == 'undefined' || !url.name_user ? 'anônimo' : url.name_user}}
                    </div> (url.minify/{{ url.id }}.com)
        
                </div>
                <div>
                    <label style="margin-right: 10px;margin-top: 5px;">Acessos: {{url.access || 0}}</label>
                    <button v-if="idUser !== 'undefined' && idUser==url.id_user" @click="deleteUrl(url.id)">DELETAR</button>
                </div>
            </div>
        
        </ul>
    </div>
</template>

<style scoped>
#urls {
    display: flex;
    flex-direction: column;
}

#card {
    display: flex;
    flex-direction: row;
    width: 300px;
    height: 100px;
    margin-bottom: 20px;
    background-color: gray;
    border-radius: 10px;
    cursor: pointer;
    padding: 5px;
}
</style>