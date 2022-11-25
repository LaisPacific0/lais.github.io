export default class Jogador {
    nome;
    email;
    imagem;
    pontos;
    vitorias;
    constructor(jogador = {}) {
        this.nome = jogador.nome;
        this.email = jogador.email;
        this.imagem = jogador.imagem;
        this.pontos = jogador.pontos || 0;
        this.vitorias = jogador.vitorias || 0;

    }

    
  }