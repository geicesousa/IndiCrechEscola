const Avaliacao = require('../Avaliacao/Avaliacao')
const Cadastro = require('../Cadastro/Cadastro')

class Creche extends Cadastro{

  static todasAsCreches = []

  constructor(nome, bairro, email, telefone){
    super(nome, email),
    this.bairro = bairro,
    this.telefone = telefone,
    this.avaliacao = new Avaliacao()

    Creche.todasAsCreches.push(this)
    
    return `${this.nome} cadastrada com sucesso. Os dados cadastrados foram: ${this}`
  }

  consultarPorBairro(bairro){
    let procura = Creche.todasAsCreches.filter((cadaCreche)=> cadaCreche.bairro === bairro)

    if(procura){
      return `Foram encontradas essas instituições no bairro ${bairro}: ${procura}.` 
    } else{
      return `Não há nenhuma instituição cadastrada no sistema com o bairro ${bairro}.`
    }
  }

  consultarPorNota(nota){
    let notaProcurada = Creche.todasAsCreches.filter((cadaCreche)=> cadaCreche.avaliacao.nota === nota)

    if(notaProcurada){
      return `Foram encontradas essas instituições com nota ${nota}: ${notaProcurada}.`
    } else{
      return `Nenhuma instituição cadastrada no sistema foi avaliada com a nota ${notaProcurada}.`
    }
  }

  getbairro(){
    return this.bairro;
  }

  setbairro(novoBairro){
    this.bairro = novoBairro;
  }

  gettelefone(){
    return this.telefone;
  }

  settelefone(novoTelefone){
    this.telefone = novoTelefone;
  }
}

module.exports = Creche
