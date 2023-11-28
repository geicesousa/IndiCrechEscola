const Creche = require('./CrecheEscola');
const crecheEscola = new Creche();
class Usuaria {
  cadastro(nomeCompleto, idade, email) {
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(nomeCompleto.length >= 8 && email === regexEmail){
      this.nomeCompleto = nomeCompleto,
      this.idade = idade,
      this.email = email
    }
  }

  avaliarCrecheEscola(nomeDaCreche, bairro, descricao, nota){
    const caracteresNecessarios = 100;

    if(descricao < caracteresNecessarios){
      return `A descrição da sua avaliação deve ter pelo menos 100 caracteres, isso é o equivalente a aproximadamente 25 palavras.`
    }

    if(nota === Number && descricao.length >= caracteresNecessarios ){ // && nomeDaCreche instanceof crecheEscola
      const avaliacaoFinalizada = {
        nomeDaCreche,
        bairro,
        descricao,
        nota
      }

      nomeDaCreche.avaliacoes.push(avaliacaoFinalizada);

      return `Obrigada, ${this.nomeCompleto}! Sua avaliação cadastrada com sucesso!`;
    }
  }

}

module.exports = { Usuaria };
