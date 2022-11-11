const corpo = document.querySelector(".cards");

function carregar() {
    var pokedex = [];
    let url = "https://pokeapi.co/api/v2/pokemon?limit=50&offset=0"
    fetch(url)
        .then(resp => { return resp.json() })
        .then(data => {
            pokedex = data.results;
            console.log(data)
            data.results.forEach(e => {
                console.log(e.url)
                let url2 = e.url
                fetch(url2)
                    .then(resp => { return resp.json() })
                    .then(data => {
                        var card = document.querySelector(".card").cloneNode(true);
                                    card.classList.remove('model');
                                    card.querySelector(".nome").innerHTML = data.name;
                                    card.querySelector(".imgPokemon").src = data.sprites.front_default;
                                    card.querySelector(".id").src = data.id;
                                    corpo.appendChild(card);
                        // data.sprites.forEach(e =>{
                                    
                        //         })
                    })
            });
        }
    )}

// function listarTudo() {
//    pokedex.forEach(e =>{
//         let card = document.querySelector(".card").cloneNode(true);
//         card.classList.remove('model');
//         card.querySelector(".nome").innerHTML = e.name;
//         corpo.appendChild(card);
//     })
// }


