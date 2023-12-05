const Responsavel = require('../Responsavel/Responsavel');
const Creche = require('../Creche/Creche');
const Avaliacao = require('./Avaliacao');

// const creche1 = new Creche('Pingo de Gente', 'Boca do Rio', 'pingodegente@email.com', '71987456321');
// const creche2 = new Creche('Cheche Escola Viver', 'Imbui', 'crecheviver@email.com', '71874589632');
// const creche3 = new Creche('Turma da Monica', 'Castelo Branco', 'turma@email.com', '71323514632');
// const creche4 = new Creche('Creche Dona Francisca', 'Boca do Rio', 'dona@email.com', '71323514632');

const Pamela = new Responsavel('Pamela Correia', 'pamela@email.com', 28);

// console.log(creche1, creche2, creche3);

describe('CLASS Avaliacao', () => {
  const avalia = new Avaliacao()
  describe('INSTANCIAÇÃO', () => {
    test('criação de uma avaliação corretamente', () => {
      
      const avaliacao1 = avalia.avaliando('Creche Dona Francisca', Pamela,'A creche é espaçosa, arejada e segura (possui grades e sistema de segurança eletrônico com camêras). O corpo docente é qualificado e seguem as orientações do MEC com vigor, os demais funcionários/as são sempre educados e prestativos.', 8)

      expect(avaliacao1).toBe('Pamela, sua avaliação à/ao Creche Dona Francisca foi realizada com sucesso. Obrigada!`')
    });

    test('erro ao instanciar uma avaliação', () => {

      const avaliacao2 = avalia.avaliando('Creche Dona Francisca', 'Pamela','A creche é espaçosa, arejada e segura (possui grades e sistema de segurança eletrônico com camêras). O corpo docente é qualificado e seguem as orientações do MEC com vigor, os demais funcionários/as são sempre educados e prestativos.', 8)

      expect(avaliacao2).toBe(`Para criar uma avaliação tanto a mãe e quanto a creche/escola devem estar cadastradas no sistema.`)
    });
  });
  test('', () => {
    // criar varias creches e ver se o static tá salvadndo 
  });
  test('', () => {});
});
