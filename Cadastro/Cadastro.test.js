const Cadastro = require('./Cadastro');

describe('CLASS Cadastro', () => {
  const cadastro1 = new Cadastro();
  test('INSTANCIAÇÃO', () => {
    const cadastrada = cadastro1.cadastramento('Geice', 'geice@email.com');
    
    expect(cadastrada).toBe('Cadastro realizado com sucesso.');
  });

  test('ERRO de INSTANCIAÇÃO com nome vazio', () => {
    const cadastroNomeVazio = cadastro1.cadastramento('', 'geice@email.com');

    expect(cadastroNomeVazio).toBe('Você precisa informar seu nome.');
  });

  test('ERRO de INSTANCIAÇÃO com email no formato incorreto', () => {
    const cadastroEmailErrado = cadastro1.cadastramento('Geice', 'geiceail.com');

    expect(cadastroEmailErrado).toBe('O email informado não está no formato correto.');
  });
  
});
