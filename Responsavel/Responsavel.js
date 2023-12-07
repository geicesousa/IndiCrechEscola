const Avaliacao = require('../Avaliacao/Avaliacao');
const Cadastro = require('../Cadastro/Cadastro');
const Creche = require('../Creche/Creche');
class Responsavel extends Cadastro {
  idade;

  constructor(nome, email, idade) {
    super(nome, email),
    this.idade = idade
  }

  avaliarCreche(nomeCreche, avaliacao, nota){
    const crecheExistente = Creche.todasAsCreches.find((cadaCreche)=> cadaCreche.nome === nomeCreche);
    const caracteresMinimos = 150;

    if(avaliacao.length < caracteresMinimos){
      return `Sua avaliação precisa ter pelo menos 160 caracteres, isso é o equivale entre 22-25 palavras.`
    }
   
    if(!crecheExistente){
      return `Não encontramos "${nomeCreche}" no nosso cadastro. Para criar uma avaliação a creche/escola deve estar cadastrada no sistema.`
    } 
    
    const avalia = new Avaliacao(nomeCreche, this.nome, avaliacao, nota)
    
    crecheExistente.avaliacao.push(avalia) // Creche.todasAsCreches.crecheExistente.avaliacao(avalia)
    
    return `${this.nome}, sua avaliação à/ao ${nomeCreche} foi realizada com sucesso. Obrigada!`
  }

  getidade(){
    return this.idade
  }

  getemail(){
    return this.email
  }

  getnome(){
    return this.nome
  }

}

module.exports = Responsavel
