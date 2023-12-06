const Responsavel = require('./Responsavel');
const Creche = require('../Creche/Creche');

// const creche1 = new Creche('Pingo de Gente', 'Boca do Rio', 'pingodegente@email.com', '71987456321');
// const creche2 = new Creche('Cheche Escola Viver', 'Imbui', 'crecheviver@email.com', '71874589632');
// const creche3 = new Creche('Turma da Monica', 'Castelo Branco', 'turma@email.com', '71323514632');
// const creche4 = new Creche('Creche Dona Francisca', 'Boca do Rio', 'dona@email.com', '71323514632');
// console.log(creche1, creche2, creche3);
 // criei para funcionar como mock

describe('CLASS Responsavel', () => {
  const Pamela = new Responsavel('Pamela Correia', 'pamela@email.com', 28);
  describe('INSTANCIAÇÃO', () => {
    test('deveria instanciar uma usuária com sucesso', () => {
      expect(Pamela.getidade()).toBe(28);
      // expect(Pamela.getnome()).toBe('Pamela Correia');
      // expect(Pamela.getemail()).toBe('pamela@email.com');
      expect(Pamela instanceof Responsavel).toBeTruthy();
    });
  });
  describe('MÉTODO avaliarCreche', () => {
    test('deveria criar uma nova avaliação de uma creche', () => {
      const avaliacao = Pamela.avaliarCreche('Creche Dona Francisca', 'Boca do Rio', 'A creche é espaçosa, arejada e segura (possui grades e sistema de segurança eletrônico com camêras). O corpo docente é qualificado e seguem as orientações do MEC com vigor, os demais funcionários/as são sempre educados e prestativos.', 8)
      expect(avaliacao).toBe(`Pamela, sua avaliação à/ao Creche Dona Francisca foi realizada com sucesso. Obrigada!`);
    });// NÃO APARECE A MSG CERTA PQ NÃO TEM BANCO DE DADOS PARA VERIFICAR A CRECHE 
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
