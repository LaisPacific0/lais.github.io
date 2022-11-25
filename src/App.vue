<template>
  <v-app>
    <!--   <v-app-bar app color="primary" dark> </v-app-bar> -->

    <v-main>
      <JogoDaMemoria />
    </v-main>
  </v-app>
</template>

<script>
import JogoDaMemoria from "./components/JogoDaMemoria.vue";

export default {
  name: "App",

  components: {
    JogoDaMemoria,
  },

  data: () => ({
    //
  }),
};
</script>
