<template>
    <div id="home">
        <img id="home-img" src="../assets/img/homepage.jpg" alt="">
        <div id="form-container">
          <h1>Bem vindo ao <span>GHIF</span></h1>
          <h2>Preencha os campos abaixo com suas informações:</h2>
          <form @submit="handleSubmit" id="Forms" action="">
            <input type="text" v-model="formData.siape" placeholder="SIAPE" required>
            <input type="text" v-model="formData.nome" placeholder="Nome" required>
            <input type="text" v-model="formData.email" placeholder="Email" required>
            <input type="text" v-model="formData.area" placeholder="Área" required>
            <input type="number" v-model="formData.ch" placeholder="Carga-Horária" required>
            <input id="btn-submit" type="submit" value="Enviar">
          </form>
        </div>
    </div>

</template>

<script>

export default {
    name: "Forms",
    data() {
    return {
      formData: {
        nome: '',
        email: '',
        siape: '',
        area: '',
        ch: ''
      },
    };
    },
    methods: {
    handleSubmit(event) {
      event.preventDefault();
      const data = {
        nome: this.formData.nome,
        email: this.formData.email,
        siape: this.formData.siape,
        area: this.formData.area,
        ch: this.formData.ch
      };
      localStorage.setItem('formData', JSON.stringify(data));
      this.$router.push('/home');
    }
  }
}

</script>

<style>
    #form-container {
    width: 45%;
    background-color: rgb(122, 170, 241);
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  #form-container h1 {
    margin-top: 2em;
  }

  #form-container h1 span {
    font-weight: bold;
  }

  #form-container h2 {
    color: rgba(0, 0, 0, 0.53);
  }

  #Forms {
    margin-top: 6em;
  }

  #home {
    text-align: center;
    display: flex;
    align-items: center;
    height: 100vh;
    width: 100%;
  }

  #home-img {
    width: 55%;
    height: 90%;
  }

    form {
        display: flex;
        flex-direction: column;
        width: 400px;
        gap: 15px;
    }

    input {
        padding: 10px 20px;
        background-color: white;
        border-radius: 50px;
        border: none;
        outline: none;
    }

    #btn-submit {
        background-color: rgb(8, 0, 255);
        color: white;
        font-weight: bold;
        margin-top: 10px;
        font-size: 16px;
        transition: .2s ease-in-out;
    }

    #btn-submit:hover {
        transform: translateY(-2px);
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.478);
    }
</style>