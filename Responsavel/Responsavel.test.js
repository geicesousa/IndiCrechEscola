const Responsavel = require("./Responsavel");
const Creche = require("../Creche/Creche");

jest.mock("../Creche/Creche.js");

// before.Each(){} ecolocar o array dentro do parametro
// jest.mock ('arq')
// after para apagar depois de cada teste
// criei para funcionar como mock

beforeAll(() => {
  Creche.todasAsCreches= [
    {
      nome: "Pingo de Gente",
      email: "pingodegente@email.com",
      bairro: "Boca do Rio",
      telefone: "71987456321",
      avaliacao: [],
    },
    {
      nome: "Cheche Escola Viver",
      email: "Imbui",
      bairro: "crecheviver@email.com",
      telefone: "71874589632",
      avaliacao: [],
    },
    {
      nome: "Turma da Monica",
      email: "turma@email.com",
      bairro: "Castelo Branco",
      telefone: "71323514632",
      avaliacao: [],
    },
    {
      nome: "Creche Dona Francisca",
      email: "dona@email.com",
      bairro: "Boca do Rio",
      telefone: "71323514632",
      avaliacao: [],
    },
  ];
});
describe("CLASS Responsavel", () => {
  const Pamela = new Responsavel("Pamela Correia", "pamela@email.com", 28);
  describe("INSTANCIAÇÃO", () => {
    test("deveria instanciar uma usuária com sucesso", () => {
      expect(Pamela.getidade()).toBe(28);
      // expect(Pamela.getnome()).toEqual('Pamela Correia');
      // expect(Pamela.getemail()).toEqual('pamela@email.com');
      expect(Pamela instanceof Responsavel).toBeTruthy();
    });
  });
  describe("MÉTODO avaliarCreche", () => {
    test("deveria criar uma nova avaliação de uma creche", () => {
      const avaliacao = Pamela.avaliarCreche(
        "Creche Dona Francisca",
        "Boca do Rio",
        "A creche é espaçosa, arejada e segura (possui grades e sistema de segurança eletrônico com camêras). O corpo docente é qualificado e seguem as orientações do MEC com vigor, os demais funcionários/as são sempre educados e prestativos.",
        8
      );
      expect(avaliacao).toBe(
        `Pamela, sua avaliação à/ao Creche Dona Francisca foi realizada com sucesso. Obrigada!`
      );
    }); 
    test("deveria retornar uma orientação de preenchimento", () => {
      const avaliacao = Pamela.avaliarCreche(
        "Creche Dona Francisca",
        "educados e prestativos.",
        8
      );
      expect(avaliacao).toBe(
        "Sua avaliação precisa ter pelo menos 160 caracteres, isso é o equivale entre 22-25 palavras."
      );
    });
    test("deveria retorna um aviso de creche não encontrada", () => {
      const avaliacao = Pamela.avaliarCreche(
        "Creche",
        "A creche é espaçosa, arejada e segura (possui grades e sistema de segurança eletrônico com camêras). O corpo docente é qualificado e seguem as orientações do MEC com vigor, os demais funcionários/as são sempre educados e prestativos.",
        8
      );
      expect(avaliacao).toBe('Não encontramos "Creche" no nosso cadastro. Para criar uma avaliação a creche/escola deve estar cadastrada no sistema.');
    });
  });
});
