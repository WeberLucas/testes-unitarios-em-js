import assert from 'node:assert';
import { exibirNomeDogFormatado } from '../conceitos/testes-de-unidade.js';

describe('testes do projeto', () => {
  it('deve exibir o nome do dog com letras maiusculas', async () => {
    const resultado = await exibirNomeDogFormatado('Kiara');
    assert.strictEqual(resultado, 'KIARA');
  });
});
