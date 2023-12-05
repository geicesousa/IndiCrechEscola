const Creche = require('./Creche');

describe('CLASS Creche', () => {
  const novaCreche = new Creche('Pingo de Gente', 'Boca do Rio', 'pingodegente@email.com', '71912345678');

  describe('INSTANCIAÇÃO', () => {
    test('deveria instanciar de uma creche com sucesso', () => {
      const novaCreche = new Creche('Pingo de Gente', 'Boca do Rio', "pingodegente@email.com", "71912345678");

      expect(novaCreche).toBe("Pingo de Gente cadastrada com sucesso. Os dados cadastrados foram: Pingo de Gente, Boca do Rio, pingodegente@email.com, 71912345678");
    });
  });

  describe('MÉTODO consultarPorBairro', ()=>{

    test('deveria retornar uma lista de creches de acordo com o bairro', ()=>{
      const procuraPorBairro = novaCreche.consultarPorBairro('Boca do Rio');

      expect(procuraPorBairro).toBe(`Foram encontradas essas instituições no bairro Boca do Rio: [{ nome: "Pingo de Gente", bairro: "Boca do Rio", 
      email: "pingodegente@email.com", contato: "71912345678"]}`)
    });

    test('deveria retornar uma mensagem informando que não encontrou o bairro', ()=>{
      const procuraPorBairro = novaCreche.consultaPorBairro('Boca ');

      expect(procuraPorBairro).toBe(`Não há nenhuma instituição cadastrada no sistema com o bairro Boca do Rio.`)
    });
  });

  describe('MÉTODO consultarPorNota', ()=>{

    test('deveria retornar uma lista de creches de acordo com a nota', ()=>{
      const bucarNota = novaCreche.consultarPorNota(8);

      expect(bucarNota).tobe('Foram encontradas essas instituições com nota 8: [{}]')

    });
    test('deveria retornar um aviso de nota inexistente', ()=>{   
      const buscarNota = novaCreche.consultarPorNota(8);

      expect(buscarNota).toBe(`Nenhuma instituição cadastrada no sistema foi avaliada com a nota 8.`)
    });
  });
});
