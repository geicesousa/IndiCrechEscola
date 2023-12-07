class Avaliacao{

  constructor(creche, nomeMae, textoAvaliativo, nota){
    this.responsavel = nomeMae
    this.creche = creche
    this.nota = nota
    this.descricao = textoAvaliativo
  }

  getresponsavel(){
    return this.responsavel 
  }
 
  getcreche(){
    return this.creche
  }

  getnota(){
    return this.nota
  }

  getdescricao(){
    return this.descricao
  }

}

module.exports = Avaliacao 
