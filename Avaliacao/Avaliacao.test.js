const Responsavel = require('../Responsavel/Responsavel');
const Creche = require('../Creche/Creche');
const Avaliacao = require('./Avaliacao');

describe('CLASS Avaliacao', () => {
  describe('INSTANCIAÇÃO', () => {
    
    const avaliacao1 = new Avaliacao('Creche Dona Francisca', 'Pamela','A creche é espaçosa, arejada e segura (possui grades e sistema de segurança eletrônico com camêras). O corpo docente é qualificado e seguem as orientações do MEC com vigor, os demais funcionários/as são sempre educados e prestativos.', 8)
    test('criação de uma avaliação corretamente', () => {

      expect(avaliacao1).toEqual({"creche": "Creche Dona Francisca", "descricao": "A creche é espaçosa, arejada e segura (possui grades e sistema de segurança eletrônico com camêras). O corpo docente é qualificado e seguem as orientações do MEC com vigor, os demais funcionários/as são sempre educados e prestativos.", "responsavel": "Pamela", "nota": 8})
    });
    
    test('verifica se cada atributo retorna corretamente', () => {

      expect(avaliacao1.getresponsavel()).toBe('Pamela')
      expect(avaliacao1.getcreche()).toBe('Creche Dona Francisca')
      expect(avaliacao1.getdescricao()).toBe('A creche é espaçosa, arejada e segura (possui grades e sistema de segurança eletrônico com camêras). O corpo docente é qualificado e seguem as orientações do MEC com vigor, os demais funcionários/as são sempre educados e prestativos.')
      expect(avaliacao1.getnota()).toBe(8)
    });
  });
});
