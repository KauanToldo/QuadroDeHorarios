<template>
    <header>
        <router-link to="/home"><span id="title-header">GHIF</span></router-link>
        <router-link to="/perfil"><i id="perfil" class="fa-solid fa-user"></i></router-link>
    </header>
</template>

<style>
    header {
        background-color: rgb(76, 76, 249);
        height: 9vh;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px 40px;
        width: 100%;
        box-shadow: 0px 2px 6px rgb(76, 76, 249);
    }

    #title-header {
        font-weight: bold;
        font-size: 24px;
        color: white;
    }

    #perfil {
        font-size: 18px;
        font-weight: bold;
        color: black;
        background-color: white;
        padding: 10px 11px;
        border-radius: 50%;
        cursor: pointer;
        transition: .2s ease-in;
        border: 2px solid transparent;
    }

    #perfil:hover {
        background-color: transparent;
        color: white;
        background-color: black;
    }
</style>

<script>

</script>