const Responsavel = require('./Responsavel');
// const Avaliacao = require('../Avaliacao/Avaliacao');
// const Cadastro = require('../Cadastro/Cadastro');
// const Creche = require('../Creche/Creche');
// 
describe('Classe Responsavel', () => {
  const Pamela = new Responsavel('Pamela Correia', 'pamela@email.com', 28);
  describe('Instanciação', () => {
    test('deveria instanciar uma usuária com sucesso', () => {
      // expect(Pamela.idade).toBe(28);
      // expect(Pamela.nome).toBe('Pamela Correia');
      // expect(Pamela.email).toBe('pamela@email.com');
      expect(Pamela instanceof Responsavel).toBeTruthy();
    });
  });

  describe('Método avaliarCreche', () => {
    test('deveria criar uma nova avaliação de uma creche', () => {
   
      const avaliacao = Pamela.avaliarCreche('Creche Dona Francisca', 'Boca do Rio', 'A creche é espaçosa, arejada e segura (possui grades e sistema de segurança eletrônico com camêras). O corpo docente é qualificado e seguem as orientações do MEC com vigor, os demais funcionários/as são sempre educados e prestativos.', 8)

      expect(avaliacao).toBe(`Pamela, sua avaliação à/ao Creche Dona Francisca foi realizada com sucesso. Obrigada!`);
    });
// NÃO APARECE A MSG CERTA PQ NÃO TEM BANCO DE DADOS PARA VERIFICAR A CRECHE 
    test('deveria retornar uma orientação de preenchimento', () => {
      const avaliacao = Pamela.avaliarCreche('Creche Dona Francisca', 'educados e prestativos.', 8)
      
      expect(avaliacao).toBe('Sua avaliação precisa ter pelo menos 160 caracteres, isso é o equivale entre 22-25 palavras.');
    });

    test('deveria retorna um aviso de creche não encontrada', ()=>{
      const avaliacao = Pamela.avaliarCreche('Creche', 'educados e prestativos.', 8)

      expect(avaliacao).toBe('Não encontramos Creche no nosso cadastro.')
    });
  });
});
