<template>
  <div>
    <v-card
      v-for="(jogador, index) in jogadores"
      :key="index"
      class="mt-4"
      :color="index === indexJogadorDaVez ? '#EDE7F6' : ''"
    >
      <v-card-title class="font-weight-black d-flex justify-center"
        >Jogador {{ index + 1 }}
        <v-sheet
          color="transparent"
          rounded="circle"
          max-width="30"
          max-height="30"
          class="ml-3"
        >
          <v-img :src="jogador.imagem.imagem"></v-img>
        </v-sheet>
        <v-spacer></v-spacer>
        <v-btn
          color="deep-orange lighten-4"
          depressed
          @click="excluirJogador(index)"
          fab
          x-small
          ><v-icon dark>
            {{ icons.mdiDelete }}
          </v-icon></v-btn
        ></v-card-title
      >
      <v-card-text class="font-weight-bold"
        >Nome:{{ jogador.nome }} <v-spacer></v-spacer> Email:{{
          jogador.email
        }}
        <v-spacer></v-spacer> Pontos: {{ jogador.pontos }}
        <v-spacer> Vitórias: {{ jogador.vitorias }}</v-spacer>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { mdiDelete } from "@mdi/js";

export default {
  name: "TelaJogadores",

  data: () => ({
    indexJogadorDaVez: 0,
    icons: {
      mdiDelete,
    },
  }),
  methods: {
    excluirJogador(index) {
      this.$emit("excluirJogador", index);
    },

    alterarCorJogadorDaVez(indexJogadorDaVez) {
      this.indexJogadorDaVez = indexJogadorDaVez;
    },
  },

  props: {
    jogadores: [],
  },
};
</script>

<style>
</style>