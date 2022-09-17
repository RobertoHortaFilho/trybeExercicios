// Verifique se a importação do arquivo correto está sendo feita.
const  getPokemonDetails = require("../src/pokemon.js");

const callback =(done,message) => {
  console.log(message);
  done()
  return true}
const filte = (name) => {return (pokemon) => {return pokemon.name === name}}

describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
    try {
      getPokemonDetails(filte('aaa'), (error, nulo) => {
        expect(nulo).toEqual(null)
        expect(error.message).toEqual('Não temos esse pokémon para você :(')
        done()
      })
    } catch (error) {
      done(error)
    }
  });

  it("retorna um pokemon que existe no banco de dados", (done) => {
    result = 'Olá, seu pokémon é o Bulbasaur, o tipo dele é Grass e a habilidade principal dele é Razor Leaf'
    try{
      getPokemonDetails(filte('Bulbasaur'), (nulo, message) => {
        expect(message).toEqual(result)
        expect(nulo).toEqual(null)
        done()
      })
    }catch(error){
      done(error)
    }
  });
});