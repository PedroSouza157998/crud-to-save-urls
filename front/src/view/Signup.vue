<template>
    <form id="box" @submit.prevent="onSubmit">
        <h1>Criar conta</h1>
        <input type="name" v-model="name" />
        <input type="password" v-model="password" />
        <input type="submit" value="CRIAR" />
    </form>
</template>

<style>

</style>