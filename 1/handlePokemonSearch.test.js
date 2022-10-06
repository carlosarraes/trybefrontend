const { getPokemonDetails, handlePokemonSearch } = require('./handlePokemonSearch');

describe('A função getPokemonDetails', () => {
  it('retorna erro quando procuramos um pokémon que não existe no banco de dados', () => {
    // Escreva aqui seu código
  });

  it('retorna um pokémon que existe no banco de dados', () => {
    expect(() => getPokemonDetails('Squirtle', handlePokemonSearch)).toBe(
      'Olá, seu pokémon é o Squirtle, o tipo dele é Água e a habilidade principal dele é Jato de Água'
    );
  });
});
