<template>
  <v-container fluid>
    <v-row class="d-flex justify-space-around mt-1 mb-2"
      ><v-btn
        class="mx-auto mb-2"
        color="blue lighten-4"
        width="200px"
        @click="iniciarJogo"
      >
        Iniciar Partida </v-btn
      ><v-btn
        class="mx-auto"
        color="indigo lighten-3"
        width="200px"
        @click="resetarJogo"
      >
        Reiniciar Partida
      </v-btn></v-row
    >
    <v-row v-if="jogadores.length >= 2">
      <v-col cols="12"
        ><v-card :disabled="jogoIniciado">
          <v-card-text class="d-flex flex-wrap justify-space-around mb-6">
            <v-sheet
              v-for="(carta, index) in cartasAleatorias"
              :key="index"
              width="100px"
              height="100px"
              rounded
              class="ml-4 mb-4"
              @click="virarCarta(carta)"
            >
              <v-img v-if="carta.virado" :src="carta.imgFrente"></v-img>
              <v-img v-else :src="carta.imgCostas"></v-img> </v-sheet
          ></v-card-text> </v-card
      ></v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "TelaJogo",

  data: () => ({
    podeClicar: true,
    cartasAleatorias: [],
    jogoIniciado: true,
    carta1: null,
    carta2: null,
    quantidadeJogadores: 0,
    indexJogadorDaVez: 0,
    cartas: [
      {
        id: 1,
        imgFrente: require("../../public/cartas/cegonha.png"),
        imgCostas: require("../../public/cartas/urso.png"),
        virado: false,
        parEncontrado: false,
      },
      {
        id: 2,
        imgFrente: require("../../public/cartas/chorando.png"),
        imgCostas: require("../../public/cartas/urso.png"),
        virado: false,
        parEncontrado: false,
      },
      {
        id: 3,
        imgFrente: require("../../public/cartas/coracao.png"),
        imgCostas: require("../../public/cartas/urso.png"),
        virado: false,
        parEncontrado: false,
      },
      {
        id: 4,
        imgFrente: require("../../public/cartas/dormindo.png"),
        imgCostas: require("../../public/cartas/urso.png"),
        virado: false,
        parEncontrado: false,
      },
      {
        id: 5,
        imgFrente: require("../../public/cartas/maos.png"),
        imgCostas: require("../../public/cartas/urso.png"),
        virado: false,
        parEncontrado: false,
      },
      {
        id: 6,
        imgFrente: require("../../public/cartas/menino.png"),
        imgCostas: require("../../public/cartas/urso.png"),
        virado: false,
        parEncontrado: false,
      },
      {
        id: 7,
        imgFrente: require("../../public/cartas/ovulo.png"),
        imgCostas: require("../../public/cartas/urso.png"),
        virado: false,
        parEncontrado: false,
      },
      {
        id: 8,
        imgFrente: require("../../public/cartas/roupa.png"),
        imgCostas: require("../../public/cartas/urso.png"),
        virado: false,
        parEncontrado: false,
      },
      {
        id: 1,
        imgFrente: require("../../public/cartas/cegonha.png"),
        imgCostas: require("../../public/cartas/urso.png"),
        virado: false,
        parEncontrado: false,
      },
      {
        id: 2,
        imgFrente: require("../../public/cartas/chorando.png"),
        imgCostas: require("../../public/cartas/urso.png"),
        virado: false,
        parEncontrado: false,
      },
      {
        id: 3,
        imgFrente: require("../../public/cartas/coracao.png"),
        imgCostas: require("../../public/cartas/urso.png"),
        virado: false,
        parEncontrado: false,
      },
      {
        id: 4,
        imgFrente: require("../../public/cartas/dormindo.png"),
        imgCostas: require("../../public/cartas/urso.png"),
        virado: false,
        parEncontrado: false,
      },
      {
        id: 5,
        imgFrente: require("../../public/cartas/maos.png"),
        imgCostas: require("../../public/cartas/urso.png"),
        virado: false,
        parEncontrado: false,
      },
      {
        id: 6,
        imgFrente: require("../../public/cartas/menino.png"),
        imgCostas: require("../../public/cartas/urso.png"),
        virado: false,
        parEncontrado: false,
      },
      {
        id: 7,
        imgFrente: require("../../public/cartas/ovulo.png"),
        imgCostas: require("../../public/cartas/urso.png"),
        virado: false,
        parEncontrado: false,
      },
      {
        id: 8,
        imgFrente: require("../../public/cartas/roupa.png"),
        imgCostas: require("../../public/cartas/urso.png"),
        virado: false,
        parEncontrado: false,
      },
    ],
  }),
  computed: {},
  methods: {
    virarCarta(carta) {
      if (this.podeClicar === false) {
        return;
      }
      if (carta.virado === true) {
        return;
      }
      if (this.carta1 === null) {
        this.carta1 = carta;
        carta.virado = true;
      } else if (this.carta2 === null) {
        this.carta2 = carta;
        carta.virado = true;
      }
      if (this.carta1 != null && this.carta2 != null) {
        if (this.carta1.id === this.carta2.id) {
          this.$emit("jogadorDaVez", this.indexJogadorDaVez);
          this.carta1 = null;
          this.carta2 = null;
          if (this.verificarSeTodasCartasEstaoViradas() === true) {
            this.$emit("jogoFinalizado");
          }
        } else {
          this.podeClicar = false;
          setTimeout(
            () => (
              (this.carta1.virado = false),
              ((this.carta2.virado = false),
              this.proximoJogador(),
              (this.carta1 = null),
              (this.carta2 = null)),
              (this.podeClicar = true)
            ),
            500
          );
        }
      }
    },

    resetarJogo() {
      this.indexJogadorDaVez = 0;
      this.jogoIniciado = true;
      for (var i = 0; i < this.cartas.length; i++) {
        this.cartas[i].virado = false;
      }
      this.aleatorias(this.cartas);
      this.carta1 = null;
      this.carta2 = null;

      this.$emit("resetarPontos");
      this.$emit("jogoIniciado", false);
    },

    jogadorDaVez() {
      this.jogadores[this.indexJogadorDaVez];
    },

    aleatorias(cartas) {
      for (let i = cartas.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cartas[i], cartas[j]] = [cartas[j], cartas[i]];
      }
      this.cartasAleatorias = cartas;
    },

    encontrarPar(carta) {
      return carta.id;
    },

    iniciarJogo() {
      if (this.jogadores.length >= 2) {
        this.jogoIniciado = false;
        this.quantidadeJogadores = this.jogadores.length;
        this.$emit("jogoIniciado", true);
      }
      if (this.jogadores.length < 2) {
        alert("Para o jogo ser iniciado, precisa de no mínimo 2 Jogadores.");
      }
    },

    proximoJogador() {
      this.indexJogadorDaVez++;
      if (this.indexJogadorDaVez >= this.jogadores.length) {
        this.indexJogadorDaVez = 0;
      }
      this.$emit("corJogadorDaVez", this.indexJogadorDaVez);
    },

    verificarSeTodasCartasEstaoViradas() {
      for (var i = 0; i < this.cartas.length; i++) {
        if (this.cartas[i].virado === false) {
          return false;
        }
      }
      return true;
    },
  },

  mounted() {
    const cartas = this.cartas;
    this.aleatorias(cartas);
  },

  props: {
    jogadores: [],
  },
};
</script>

<style>
</style>