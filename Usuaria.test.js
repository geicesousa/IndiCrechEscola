const Usuaria = require("./Usuaria");

describe("Classe Usuaria", () => {
  const Pamela = new Usuaria();

  describe("Instanciação", () => {
    test("deveria instanciar uma usuária com sucesso", () => {
      expect(Pamela instanceof Usuaria).toBeTruthy();
    });
  });

  describe("Método cadastro", () => {
    test("deveria cadastrar uma usuária com sucesso", () => {
      const cadastro = Pamela.cadastro(
        "Pamela Rocha Moraes",
        "36",
        "pamela@email.com"
      );

      expect(cadastro).toBe(
        "Cadastro realizado com sucesso! \n Seja bem-vinda, Pamela Rocha Moraes! A partir de agora você já pode avaliar e pesquisar avaliações no nosso banco de dados."
      );
    });
  });
});
