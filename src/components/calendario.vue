<template>
    <div id="task-container">
        <form @submit="cadastrarAtv" action="" id="formAtv">
            <div id="name-container">
                <label for="nameAtv">Nome da Atividade</label>
                <input v-model="atividade.nome" type="text" id="nameAtv" required>
            </div>
            <div id="options">
                <div id="day-container">
                    <label for="dayAtv">Dia da semana</label>
                    <select v-model="atividade.dia" name="" id="dayAtv">
                        <option value="segunda">Segunda</option>
                        <option value="terca">Terça</option>
                        <option value="quarta">Quarta</option>
                        <option value="quinta">Quinta</option>
                        <option value="sexta">Sexta</option>
                    </select>
                </div>
                <div id="horario-container">
                    <div id="inicio-container">
                    <label for="inicioAtv">Início</label>
                    <input v-model="atividade.inicio" type="time" name="" id="inicioAtv">
                </div>
                <div id="fim-container">
                    <label for="fimAtv">Fim</label>
                    <input v-model="atividade.fim" type="time" name="" id="fimAtv">
                </div>
                </div>
            </div>
            <input  id="cadastrarAtv" type="submit" value="Cadastrar">
        </form>
    </div>
    <table>
      <thead>
          <tr>
              <th>Horário</th>
              <th id="segunda">Segunda</th>
              <th id="terca">Terça</th>
              <th id="quarta">Quarta</th>
              <th id="quinta">Quinta</th>
              <th id="sexta">Sexta</th>
          </tr>
      </thead>
      <tbody>
          <tr>
              <td class="horario" id="horario1">07:30 - 08:15</td>
              <td id="11"></td>
              <td id="12"></td>
              <td id="13"></td>
              <td id="14"></td>
              <td id="15"></td>
          </tr>
          <tr>
              <td class="horario" id="horario2">08:15 - 09:00</td>
              <td id="21"></td>
              <td id="22"></td>
              <td id="23"></td>
              <td id="24"></td>
              <td id="25"></td>
          </tr>
          <tr>
              <td class="horario" id="horario3">09:00 - 09:45</td>
              <td id="31"></td>
              <td id="32"></td>
              <td id="33"></td>
              <td id="34"></td>
              <td id="35"></td>
          </tr>
          <tr>
              <td class="horario" id="horario4">10:00 - 10:45</td>
              <td id="41"></td>
              <td id="42"></td>
              <td id="43"></td>
              <td id="44"></td>
              <td id="45"></td>
          </tr>
          <tr>
              <td class="horario" id="horario5">10:45 - 11:30</td>
              <td id="51"></td>
              <td id="52"></td>
              <td id="53"></td>
              <td id="54"></td>
              <td id="55"></td>
          </tr>
          <tr>
              <td class="horario" id="horario6">13:30 - 14:15</td>
              <td id="61"></td>
              <td id="62"></td>
              <td id="63"></td>
              <td id="64"></td>
              <td id="65"></td>
          </tr>
          <tr>
              <td class="horario" id="horario7">14:15 - 15:00</td>
              <td id="71"></td>
              <td id="72"></td>
              <td id="73"></td>
              <td id="74"></td>
              <td id="75"></td>
          </tr>
          <tr>
              <td class="horario" id="horario8">15:00 - 15:45</td>
              <td id="81"></td>
              <td id="82"></td>
              <td id="83"></td>
              <td id="84"></td>
              <td id="85"></td>
          </tr>
          <tr>
              <td class="horario" id="horario9">16:00 - 16:45</td>
              <td id="91"></td>
              <td id="92"></td>
              <td id="93"></td>
              <td id="94"></td>
              <td id="95"></td>
          </tr>
          <tr>
              <td class="horario" id="horario10">16:45 - 17:30</td>
              <td id="101"></td>
              <td id="102"></td>
              <td id="103"></td>
              <td id="104"></td>
              <td id="105"></td>
          </tr>
      </tbody>
    </table>
</template>
  
<script>
  export default {
    data() {
      return {
        atividade: {
                nome: '',
                dia: '',
                inicio: '',
                fim: ''
        },
        days: {
            "segunda": 1,
            "terca": 2,
            "quarta": 3,
            "quinta": 4,
            "sexta": 5
        },
        inicio: {
            "07:30": 1,
            "08:15": 2,
            "09:00": 3,
            "10:00": 4,
            "10:45": 5,
            "13:30": 6,
            "14:15": 7,
            "15:00": 8,
            "16:00": 9,
            "16:45": 10,
        },
        fim: {
            "08:15": 1,
            "09:00": 2,
            "09:45": 3,
            "10:45": 4,
            "11:30": 5,
            "14:15": 6,
            "15:00": 7,
            "15:45": 8,
            "16:45": 9,
            "17:30": 10,
        },
        contador: 0,
        cells: []
      };
    },
    methods: {
            cadastrarAtv(event) {
            event.preventDefault();
            // if (this.ch <= 0) {
            //     alert("Você excedeu o limite de carga horária!")
            //     return
            // } AQUI VERIFICA A CARGA HORÁRIA
            const atvData = {
                nome: this.atividade.nome,
                dia: this.atividade.dia,
                inicio: this.atividade.inicio,
                fim: this.atividade.fim
            };
            this.pushAtv(atvData)
            // this.countCH(atvData) AQUI PUXA A FUNÇÃO DA CARGA HORÁRIA
            },
            // countCH(atividade) {
            //     var splInicial = atividade.inicio.split(":");
            //     var splFinal = atividade.fim.split(":");

            //     var inicialMin = (Number(splInicial[0] * 60)) + Number(splInicial[1]);
            //     var finalMin = (Number(splFinal[0] * 60)) + Number(splFinal[1]);

            //     var totalMin = Number(finalMin - inicialMin);
            //     this.contador = Number((totalMin / 60).toFixed(1));
            //     const ch = this.formData.ch
            //     const chNova = ch - this.contador
            //     this.formData.ch = chNova
            //     localStorage.setItem('formData', JSON.stringify(this.formData));
            // }, AQUI CONTA AS HORAS QUE A ATIVIDADE TA UTILIZANDO
            pushAtv(atividade) {
                const inicio = this.inicio[atividade.inicio]    
                const dia = this.days[atividade.dia]
                const fim = this.fim[atividade.fim]
                for (let i = inicio; i <= fim; i++) {
                    const cell = document.getElementById(`${i}${dia}`)
                    cell.innerHTML = atividade.nome
                }
                console.log(this.cells)
            }
            
        },
        computed: {
        formData() {
        const storedData = localStorage.getItem('formData');
        return storedData ? JSON.parse(storedData) : {};
        },
        mounted() {
            this.cells = document.querySelectorAll("td")
        }
    },
  };
</script>
  
<style>
    #task-container {
        display: flex;
        flex-direction: column;
        margin-top: 75px;
        border-radius: 20px;
        padding: 40px 20px;
        width: 60%;
        background-color: rgb(76, 76, 249);
        color: white;
        box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
        backdrop-filter: blur( 17.5px );
        -webkit-backdrop-filter: blur( 17.5px );
        border-radius: 10px;
        border: 1px solid rgba( 255, 255, 255, 0.18 );
    }

    #name-container {
        display: flex;
        flex-direction: column;
    }

    #name-container label {
        align-self: flex-start;
    }

    #horario-container {
        display: flex;
        gap: 20px;
    }

    label {
        margin-bottom: 5px;
        font-weight: bold;
    }

    #options {
        display: flex;
        flex-direction: row;
        gap: 20px;
    }

    #inicioAtv, #fimAtv {
        font-size: 16px;
        height: 30px;
    }

    #day-container, #inicio-container, #fim-container {
        display: flex;
        flex-direction: column;
    }

    #inicio-container label, #fim-container label {
        align-self: flex-start;
    }

    #day-container label {
        align-self: flex-start;
    }

    select {
        padding: 5px 50px;
        border-radius: 50px;
        font-size: 16px;
    }

    #cadastrarAtv {
        display: flex;
        align-self: center;
        padding: 10px 100px;
        cursor: pointer;
        margin-top: 50px;
        font-size: 16px;
        transition: .2s ease-in;
    }

    #cadastrarAtv:hover {
        transform: translateY(-2px);
        box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.527);
    }

    #formAtv {
        width: 100%;
    }

    table {
       border-collapse: collapse;
       width: 80%;
       margin-top: 100px;
       margin-bottom: 100px;
    }
    th {
       padding: 8px;
       text-align: center;
       border-left: 1px solid white;
    }
    th {
       background-color: rgb(76, 76, 249);
       color: white;
    }

    td {
        width: 75px;
        height: 75px;
        border: 1px solid rgb(76, 76, 249);
    }

    td:hover {
        background-color: rgb(207, 207, 207);
        cursor: pointer;
    }

    .horario {
        width: 50px;
        font-weight: bold;
        background-color: rgba(224, 224, 224, 0.238);
    }
</style>