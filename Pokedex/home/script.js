// export const acharPokemon = async (pokemon) => {
//     try{
//         let url = `https://pokeapi.co/api/v2/pokemon${pokemon}`
//         const response = await fetch(url)
//         return await response.json()
//     }catch(err){
//         console.error(err)
//     }
// }

var pokedex = [];
fetch("https://pokeapi.co/api/v2/pokemon?limit=50&offset=0")
.then(resp => {return resp.json()})
.then(data => {
       pokedex = data.results;
        listarPokemon();
});

function listarPokemon(){
    pokedex.forEach( e => {
        let card = document.querySelector(".card").cloneNode(true);
        card.classList.remove('model');
        card.querySelector(".nome").innerHTML = e.name;
        document.querySelector('.corpo').appendChild(card);
        
    })
} 