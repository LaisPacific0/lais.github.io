export default class Carta {
    id;
    imgFrente;
    imgCostas;
    virar;
    parEncontrado;
    constructor(carta = {}) {
        this.id = carta.id;
        this.imgFrente = carta.imgFrente;
        this.imgCostas = carta.imgCostas;
        this.virar = carta.virar || false;
        this.parEncontrado = carta.parEncontrado || false;
    }

    
  }