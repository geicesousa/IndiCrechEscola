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

  describe("Método consultaPorBairro", () => {
    test("deveria retornar uma lista de creches e escolas num mesmo bairro", () => {
      const consultar = Pamela.consultaPorBairro('Boca do Rio')

      expect(consultar).toBe(expect.any(Array)); // aqui vai ser um array de objetos de creche por bairro
    });
    test("deveria retornar um aviso de bairro não encontrado", () => {
      const consultar2 = Pamela.consultaPorBairro('Vitória da Conquista')
    
      expect(consultar2).toBe('Bairro não encontrado no nosso sistema.');
    });

  });

  describe("Método consultaPorNota", () => {
    test("deveria retornar uma lista de creche/escola de acordo com a nota solicitada", () => {
      const buscaPorNota = Pamela.consultaPorNota(8);

      expect(buscaPorNota).toBe(expect.any(Array));
    });

    test("deveria retornar uma orientação de como digitar a nota", () => {
      const buscaPorNota2 = Pamela.consultaPorNota(-3);
      const buscaPorNota3 = Pamela.consultaPorNota(0);
      const buscaPorNota1 = Pamela.consultaPorNota(1);
      
      expect(buscaPorNota2).toBe('A nota deve ser sempre um valor positivo diferente de 0');
      expect(buscaPorNota3).toBe('A nota deve ser sempre um valor positivo diferente de 0');
      expect(buscaPorNota1).toBe('Não encontramos no nosso sistema nenhuma creche com essa nota de classificação.');
    });

  });

  describe("Método avaliarUmaCrecheEscola", () => {
    test("deveria criar uma nova avaliação de uma creche/escola", () => {
      const avaliacao = Pamela.avaliarUmaCrecheEscola('Creche Dona Francisca', 'Boca do Rio', 'A creche é espaçosa, arejada e segura (possui grades e sistema de segurança eletrônico com camêras). O corpo docente é qualificado e seguem as orientações do MEC com vigor, os demais funcionários/as são sempre educados e prestativos.', 8)

      expect(avaliacao).toBe('Obrigada, Pamela! Sua avaliação cadastrada com sucesso!');
    });

    test("deveria retornar uma orientação de preenchimento", () => {
      const avaliacao = Pamela.avaliarUmaCrecheEscola('Creche Dona Francisca', 'educados e prestativos.', 8)
      
      expect(avaliacao).toBe('A descrição da sua avaliação deve ter pelo menos 100 caracteres, isso é o equivalente a mais ou menos 25 palavras');
    });
  });

});