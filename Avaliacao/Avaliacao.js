const Responsavel = require('../Responsavel/Responsavel')
const Creche = require('../Creche/Creche')

class Avaliacao{

  static listaAvaliacoes = []

  avaliando(creche, nomeMae, textoAvaliativo, nota){
    const crecheExistente = Creche.todasAsCreches.find((cadaCreche)=> cadaCreche.nome === nomeCreche);

    if(crecheExistente && nomeMae instanceof Responsavel){
      this.id = Math. floor(Math. random() * (1000 - 0 + 1)) 
      this.mae = nomeMae
      this.creche = creche
      this.nota = nota
      this.descricao = textoAvaliativo

      Avaliacao.listaAvaliacoes.push(this)

      Creche.todasAsCreches.crecheExistente.avaliacao(this) // acho que é assim

      return `${nomeMae.nome}, sua avaliação à/ao ${creche} foi realizada com sucesso. Obrigada!`
    }
    else{
      return `Para criar uma avaliação tanto a mãe e quanto a creche/escola devem estar cadastradas no sistema.`
    }
  }
}

module.exports = Avaliacao 
