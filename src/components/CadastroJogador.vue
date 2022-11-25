<template>
  <v-container>
    <v-card :disabled="jogoIniciado">
      <v-form lazy-validation>
        <v-card-text>
          <v-text-field
            class="font-weight-black"
            v-model="nome"
            label="Nome"
            :counter="10"
            required
          ></v-text-field>
          <v-text-field
            class="font-weight-black"
            v-model="email"
            label="E-mail"
            :counter="25"
            required
          ></v-text-field
          ><v-card-subtitle
            class="font-italic d-flex justify-center text-uppercase"
            >Escolha seu avatar!</v-card-subtitle
          >
          <div class="d-flex justify-space-around mb-7">
            <v-sheet
              v-for="(imagem, index) in imagens"
              :key="index"
              max-width="50"
              max-height="50"
            >
              <v-img
                v-if="imagem.selecionado === false"
                @click="selecionarImagem(imagem)"
                :src="imagem.imagem"
              ></v-img>
            </v-sheet></div
        ></v-card-text>
        <v-card-actions>
          <v-btn
            class="d-flex justify-center"
            @click="criarJogador"
            :disabled="validarCampos"
            color="cyan lighten-4"
          >
            Criar
          </v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
import Jogador from "../model/Jogador.js";
import TelaJogo from "./TelaJogo.vue";
export default {
  name: "CadastroJogador",
  comments: {
    TelaJogo,
  },
  data() {
    return {
      nome: "",
      email: "",
      imagemSelecionada: null,
      jogoIniciado: false,
      imagens: [
        {
          id: 1,
          selecionado: false,
          imagem: require("../../public/avatar/bb01.png"),
        },
        {
          id: 2,
          selecionado: false,
          imagem: require("../../public/avatar/bb02.png"),
        },
        {
          id: 3,
          selecionado: false,
          imagem: require("../../public/avatar/bb03.png"),
        },
        {
          id: 4,
          selecionado: false,
          imagem: require("../../public/avatar/bb04.png"),
        },
      ],
    };
  },

  methods: {
    reativarImagem(id) {
      for (var i = 0; i < this.imagens.length; i++) {
        if (this.imagens[i].id === id) {
          this.imagens[i].selecionado = false;
        }
      }
    },

    selecionarImagem(imagem) {
      this.imagemSelecionada = imagem;
    },

    criarJogador() {
      const cadastro = {
        nome: this.nome,
        email: this.email,
        imagem: this.imagemSelecionada,
      };
      const jogador = new Jogador(cadastro);
      for (var i = 0; i < this.imagens.length; i++) {
        if (this.imagens[i].id === this.imagemSelecionada.id) {
          this.imagens[i].selecionado = true;
        }
      }
      this.nome = "";
      this.email = "";
      this.imagemSelecionada = null;
      this.$emit("adicionarJogador", jogador);

      /* this.jogadores.push(new Jogador(jogador));
      console.log(this.jogadores); */
    },
    teste() {
      if (this.nome.length < 3 || this.nome.length > 10) {
        return true;
      }
    },

    iniciado(iniciado) {
      this.jogoIniciado = iniciado;
    },
  },

  computed: {
    validarCampos() {
      if (this.nome.length < 3 || this.nome.length > 10) {
        return true;
      }
      if (this.email.length < 3 || this.email.length > 25) {
        return true;
      }
      if (this.imagemSelecionada === null) {
        return true;
      }
      return false;
    },
  },
};
</script>

<style scoped>
</style>
