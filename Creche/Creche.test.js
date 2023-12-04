const Creche = require("./Creche");

describe("class Creche", () => {
  describe("instanciação", () => {
    test("deveria instanciar de uma creche com sucesso", () => {
      const novaCreche = new Creche("Pingo de Gente", "Boca do Rio", "pingodegente@email.com", "71912345678");

      expect(novaCreche).toBe("Pingo de Gente cadastrada com sucesso. Os dados cadastrados foram: Pingo de Gente, Boca do Rio, pingodegente@email.com, 71912345678");
    });

    test('deveria retornar uma lista de creches de acordo com o bairro', ()=>{
      const procuraPorBairro = novaCreche.consultarPorBairro('Boca do Rio');

      expect(procuraPorBairro).toBe(`Foram encontradas essas instituições no bairro Boca do Rio: [{ nome: "Pingo de Gente", bairro: "Boca do Rio", 
      email: "pingodegente@email.com", contato: "71912345678"]}`)
    });

    test('deveria retornar uma mensagem informando que não encontrou o bairro', ()=>{
      const procuraPorBairro = novaCreche.consultaPorBairro('Boca ');

      expect(procuraPorBairro).toBe(`Não há nenhuma instituição cadastrada no sistema com o bairro Boca do Rio.`)
    });

    test('deveria retornar uma lista de creches de acordo com a nota', ()=>{
      const bucarNota = novaCreche.consultarPorNota(8);

      expect(bucarNota).tobe('Foram encontradas essas instituições com nota 8: [{}]')

    });
    test('deveria retornar um aviso de nota incistente naquele bairro', ()=>{   
      const bucarNota = novaCreche.novaCreche.consultaPorNota(8);

      expect(`Nenhuma instituição cadastrada no sistema foi avaliada com a nota 8.`)
    });
  });
});





//   describe("Método consultaPorNota", () => {
//     test("deveria retornar uma lista de creche/escola de acordo com a nota solicitada", () => {
//       const buscaPorNota = Pamela.consultaPorNota(8);

//       expect(buscaPorNota).toBe(expect.any(Array));
//     });

//     test("deveria retornar uma orientação de como digitar a nota", () => {
//       const buscaPorNota2 = Pamela.consultaPorNota(-3);
//       const buscaPorNota3 = Pamela.consultaPorNota(0);
//       const buscaPorNota1 = Pamela.consultaPorNota(1);

//       expect(buscaPorNota2).toBe('A nota deve ser sempre um valor positivo diferente de 0');
//       expect(buscaPorNota3).toBe('A nota deve ser sempre um valor positivo diferente de 0');
//       expect(buscaPorNota1).toBe('Não encontramos no nosso sistema nenhuma creche com essa nota de classificação.');
//     });

//   });
