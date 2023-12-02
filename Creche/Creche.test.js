const Creche = require('./Creche')

describe('class Creche', ()=>{
    test('instanciação de uma creche', ()=>{
        const novaCreche = new Creche('Pingo de Gente', 'Boca do Rio', 'pingodegente@email.com', '71912345678')

        expect(novaCreche).toBe('Pingo de Gente cadastrada com sucesso. Os dados cadastrados foram: Pingo de Gente, Boca do Rio, pingodegente@email.com, 71912345678')
    })
})
//   describe("Método consultaPorBairro", () => {
//     test("deveria retornar uma lista de creches e escolas num mesmo bairro", () => {
//       const consultar = Pamela.consultaPorBairro('Boca do Rio')

//       expect(consultar).toBe(expect.any(Array)); // aqui vai ser um array de objetos de creche por bairro
//     });
//     test("deveria retornar um aviso de bairro não encontrado", () => {
//       const consultar2 = Pamela.consultaPorBairro('Vitória da Conquista')
    
//       expect(consultar2).toBe('Bairro não encontrado no nosso sistema.');
//     });

//   });

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