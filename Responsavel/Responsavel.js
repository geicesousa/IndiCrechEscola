const Avaliacao = require('../Avaliacao/Avaliacao');
const Cadastro = require('../Cadastro/Cadastro');
const Creche = require('../Creche/Creche');
class Responsavel extends Cadastro {
  constructor(nome, email, idade) {
    super(nome, email),
    this.idade = idade
  }

  avaliarCreche(nomeCreche, avaliacao, nota){
    const crecheExistente = Creche.todasAsCreches.find((cadaCreche)=> cadaCreche.nome === nomeCreche);
    const caracteresMinimos = 150;

    if(avaliacao.legth < caracteresMinimos){
      console.log(avaliacao.legth)
      return `Sua avaliação precisa ter pelo menos 160 caracteres, isso é o equivale entre 22-25 palavras.`
    }
    if (crecheExistente){
      const avalia = new Avaliacao(nomeCreche, this.nome, avaliacao, nota)
    
      crecheExistente.avaliacao.push(avalia)
      
      return `${this.nome}, sua avaliação à/ao ${nomeCreche} foi realizada com sucesso. Obrigada!`
    } else{
      return `Não encontramos ${nomeCreche} no nosso cadastro.`
    }
  }

  // GETTERS E SETTERS FAZEM ACONTECER UM ERRO 

  // get idade(){
  //   return this.idade
  // }

  // set idade(novaIdade){
  //   return this.idade = novaIdade
  // }

}

module.exports = Responsavel
