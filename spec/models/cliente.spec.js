const Cliente = require('../../models/cliente')

describe('Clientes', () => {
  beforeEach( () => {

  })

    it('Valida propiedades', () => {
      let clientes = Clientes.primeriro();
      expect(clientes.id).not.toBeUnDefined()
      expect(clientes.nome).not.toBeUnDefined()
      expect(clientes.telefone).not.toBeUnDefined()
    });

  it('Retorna todos',  () => {
    let clientes = Clientes.todos();
    expect(clientes.length).toEqual(10)
  });
})
