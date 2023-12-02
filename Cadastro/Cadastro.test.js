const Cadastro = require('./Cadastro');

describe('class Cadastro', () => {
  const cadastrada = new Cadastro('Geice', 'geice@email.com');
  test('instanciação', () => {
    expect(cadastrada).toEqual('Cadastro realizado com sucesso.');
  });
});
