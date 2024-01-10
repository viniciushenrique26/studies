const offset = 0; 
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}` 

function convertPokemonToLi(pokemon) {
    return `

        <li class="pokemon"> 
            <span class="number"></span>
            <span class="name">${pokemon.name}</span> 

            <div class="detail"> 
                <ol class="types"> 
                    <li class="types"></li> 
                    <li class="types"></li>
                </ol>

                <img src="" alt="${pokemon.name}">
            </div>
        </li>

    `
    
} 

const pokemonListElement = document.getElementById('pokemonList');  

pokeApi.getPokemons().then((pokemonList) => {  
    const listItems = []; 

    pokemonList.map();
    for (let i = 0; i < pokemonList.length; i++) {
        const pokemon = pokemonList[i];  
        listItems.push(convertPokemonToLi(pokemon))
    } 
    
    pokemonListElement.innerHTML += convertPokemonToLi(pokemon); 
        
});



