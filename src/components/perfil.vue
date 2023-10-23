<template>
    <Header></Header>
    <main id="perfil-container">
        <div class="round-input" @click="selecionarImagem">
            <input @change="exibirImagem" ref="fileInput" type="file" id="imagem" accept="image/*">
            <i class="fa-solid fa-image"></i>
            <label for="imagem">Clique para escolher uma imagem</label>
            <img class="round-image" :src="imagemSelecionada" alt="Imagem selecionada" @mouseover="mostrarTexto" @mouseout="ocultarTexto"/>
            <span class="round-image-text" v-if="exibirTexto">Clique para alterar</span>
        </div>
        <div id="infos">
            <h2><span>Nome:</span> {{ formData.nome }}</h2>
            <h2><span>Siape:</span> {{ formData.siape }}</h2>
            <h2><span>Area:</span> {{ formData.area }}</h2>
            <h2><span>Email:</span> {{ formData.email }}</h2>
            <h2><span>Carga Horária:</span> {{ formData.ch }}h</h2>
        </div>
    </main>
</template>

<script>
    import Header from './Header.vue';
    export default {
        name: 'perfil',
        components: {
            Header
        },
        data() {
            return {
                imagemSelecionada: '',
                exibirTexto: false
            }
        },
        computed: {
            formData() {
            const storedData = localStorage.getItem('formData');
            return storedData ? JSON.parse(storedData) : {};
            },
        },
        methods: {
            selecionarImagem() {
            this.$refs.fileInput.click();
            },
            exibirImagem(event) {
            const file = event.target.files[0];
            const roundImage = document.querySelector('.round-image');

            if (file) {
                const reader = new FileReader();

                reader.onload = (e) => {
                this.imagemSelecionada = e.target.result;
                roundImage.style.display = 'block';
                };

                reader.readAsDataURL(file);
            } else {
                this.imagemSelecionada = '';
                roundImage.style.display = 'none';
            }
            },
            mostrarTexto() {
                this.exibirTexto = true;
            },
            ocultarTexto() {
                this.exibirTexto = false;
            },
        },
};
</script>

<style>
    span {
        color: rgb(57, 57, 249);
        font-weight: bold;
    }

    .round-image-text {
        z-index: 3;
        color: white;
        position: absolute;
    }

    #perfil-container {
        height: 90vh;
        display: flex;
        justify-content: center;
        flex-direction: row;
        gap: 20px;
    }

    #infos {
        text-align: start;
    }

    .round-input i {
        font-size: 75px;
        margin-bottom: 10px;
        color: rgb(93, 93, 93);
    }

    .round-input {
      flex-direction: column;
      width: 250px; 
      height: 250px; 
      border-radius: 50%; 
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      background-color: rgba(128, 128, 128, 0.658);
    }

    .round-image:hover {
        filter: brightness(0.6);
    }

    .round-input input {
      display: none;
    }

    .round-input label {
      cursor: pointer;
      color: rgb(93, 93, 93);
      font-size: 12px;
    }

    .round-image {
        width: 250px;
        max-height: 250px;
        position: absolute;
        z-index: 2;
        border-radius: 50%;
        display: none;
        transition: .2s ease-in;
    }

    
</style>