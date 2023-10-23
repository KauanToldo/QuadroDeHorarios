<template>
    <Header></Header>
    <main>
        <h1 id="title">Olá {{ formData.nome }}, seja bem vindo ao GHIF!</h1>
        <h2 id="title-ch">Sua carga horária atual é: <span>{{ formData.ch }}h</span></h2>
        <calendario></calendario>
    </main>
    <footer></footer>
</template>

<script>
    import Header from './Header.vue';
    import calendario from './calendario.vue';
    export default {
    name: 'home',
    components: {
        Header,
        calendario
    },
    computed: {
        formData() {
        const storedData = localStorage.getItem('formData');
        return storedData ? JSON.parse(storedData) : {};
        },
    },
    }
</script>

<style>
    body {
        min-height: 100vh;
        width: 100%;
    }

    a {
        text-decoration: none;
    }

    main {
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }

    #title {
        margin-top: 50px;
    }

    #title-ch span {
        font-weight: bold;
        color: rgb(76, 76, 249);
    }
</style>