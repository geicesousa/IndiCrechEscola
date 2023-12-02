class Cadastro {
  constructor(nome, email) {
    const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gm;

    if(regexEmail.test(email)){
      this.nome = nome, 
      this.email = email

      return `Cadastro realizado com sucesso.`
    
    } else{
      return `O email informado não está no formato correto.`
    }
  }
}

module.exports = Cadastro 
