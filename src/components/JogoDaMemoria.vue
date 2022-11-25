<template>
  <v-container fluid>
    <div class="text-center">
      <v-dialog v-model="dialog" width="500">
        <v-card>
          <v-card-title
            v-if="vencedor"
            class="text-h5 lime lighten-4 lighten-2"
          >
            Vencedor: <span> ***{{ vencedor.nome }}*** </span>
          </v-card-title>

          <v-card-text> </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="light-blue darken-4" text @click="dialog = false">
              OK
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
    <v-row>
      <v-col cols="12" sm="4"
        ><CadastroJogador
          :disable="true"
          ref="cadastroJogador"
          @adicionarJogador="adicionarJogador($event)"
        ></CadastroJogador>
      </v-col>
      <v-col cols="12" sm="3">
        <v-card
          ><TelaJogadores
            :jogadores="jogadores"
            @excluirJogador="excluirJogador($event)"
            ref="TelaJogadores"
          ></TelaJogadores></v-card
      ></v-col>
      <v-col cols="12" sm="5" class="mt-4">
        <v-card
          ><TelaJogo
            :jogadores="jogadores"
            @jogadorDaVez="jogadorDaVez($event)"
            @resetarPontos="resetarPontos()"
            @jogoFinalizado="jogoFinalizado()"
            @jogoIniciado="jogoIniciado($event)"
            @corJogadorDaVez="corJogadorDaVez($event)"
          ></TelaJogo
        ></v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CadastroJogador from "./CadastroJogador.vue";
import TelaJogadores from "./TelaJogadores.vue";
import TelaJogo from "./TelaJogo.vue";

export default {
  name: "JogoDaMemoria",
  components: {
    CadastroJogador,
    TelaJogadores,
    TelaJogo,
  },
  data: () => ({
    vencedor: null,
    dialog: false,
    jogadores: [],
  }),

  methods: {
    adicionarJogador(jogador) {
      if (this.jogadores.length > 4 - 1) {
        return true;
      }
      this.jogadores.push(jogador);
    },

    jogadorDaVez(index) {
      this.jogadores[index].pontos++;
    },

    resetarPontos() {
      for (var i = 0; i < this.jogadores.length; i++) {
        this.jogadores[i].pontos = 0;
      }
    },

    jogoFinalizado() {
      this.vencedor = this.jogadores[0];
      let indexVencedor = 0;
      for (var i = 0; i < this.jogadores.length; i++) {
        if (this.jogadores[i].pontos > this.vencedor.pontos) {
          this.vencedor = this.jogadores[i];
          indexVencedor = i;
        }
      }
      this.jogadores[indexVencedor].vitorias++;
      console.log(this.vencedor);
      this.dialog = true;
    },

    excluirJogador(index) {
      const jogador = this.jogadores[index];
      this.jogadores.splice(index, 1);
      this.$refs.cadastroJogador.reativarImagem(jogador.imagem.id);
    },

    jogoIniciado(jogoIniciado) {
      this.$refs.cadastroJogador.iniciado(jogoIniciado);
    },

    corJogadorDaVez(indexJogadorDaVez) {
      this.$refs.TelaJogadores.alterarCorJogadorDaVez(indexJogadorDaVez);
    },
  },

  props: {
    cartas: [],
  },
};
</script>

<style>
</style>