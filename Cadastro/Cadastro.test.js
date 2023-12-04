const Cadastro = require('./Cadastro');

describe('class Cadastro', () => {
  test('instanciação', () => {
    const cadastrada = new Cadastro('Geice', 'geice@email.com');
    
    expect(cadastrada).toBe('Cadastro realizado com sucesso.');
  });

  test('erro de instanciação com nome vazio', () => {
    const cadastroNomeVazio = new Cadastro('', 'geice@email.com');

    expect(cadastroNomeVazio).toBe('Você precisa informar seu nome.');
  });

  test('erro de instanciação com email no formato incorreto', () => {
    const cadastroEmailErrado = new Cadastro('Geice', 'geiceail.com');

    expect(cadastroEmailErrado).toBe('O email informado não está no formato correto.');
  });
  
});
