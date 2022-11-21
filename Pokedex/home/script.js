const corpo = document.querySelector(".cards");
const Cor = (tipo) => {
    switch (tipo) {
        case 'normal':
            return ('#ccd0d4')

        case 'fighting':
            return ('#e13971')

        case 'flying':
            return ('#9db9e7')

        case 'poison':
            return ('#d4a7e2')

        case 'ground':
            return ('#ef9b6d')

        case 'rock':
            return ('#888')

        case 'bug':
            return ('#90c91a')

        case 'ghost':
            return ('#889ccc')

        case 'steel':
            return ('#a8c3ce')

        case 'fire':
            return ('#e06d3e')

        case 'water':
            return ('#c1d2ef')

        case 'grass':
            return ('#8bbe8b')

        case 'electric':
            return ("#fbd100")

        case 'psychic':
            return ("#ff6977")

        case 'ice':
            return ("#7dded2")

        case 'dragon':
            return ("#4797d8")

        case 'dark':
            return ("#6f6979")

        case 'fairy':
            return ("#fca4ef")

        default:
            return ("red")
    }
};

function carregar() {
    var pokedex = [];
    let url = "https://pokeapi.co/api/v2/pokemon?limit=500&offset=0"
    fetch(url)
        .then(resp => { return resp.json() })
        .then(data => {
            pokedex = data.results;

            data.results.forEach(e => {
                let url2 = e.url
                fetch(url2)

                    .then(resp => { return resp.json() })
                    .then(data => {
                        var card = document.querySelector(".card").cloneNode(true);
                        card.classList.remove('model');
                        card.querySelector(".nome").innerHTML = data.name;
                        card.querySelector(".imgPokemon").src = data.sprites.other['official-artwork'].front_default;
                        card.querySelector(".id").innerHTML = "Nº 0" + data.id;
                        card.querySelector('.fundo').style.backgroundColor = Cor(data.types[0].type.name);

                        card.setAttribute("onClick", "exibirPokemon(this)")
                        card.id = data.id
                        card.nome = data.name;
                        card.altura = data.height;
                        card.peso = data.weight;
                        card.habilidade = data.abilities[0].ability.name
                        card.habilidade2 = data.abilities[1].ability.name
                        card.tipo = data.types[0].type.name;
                        card.ataque = data.stats[1].base_stat;
                        card.defesa = data.stats[2].base_stat;
                        card.hp = data.stats[0].base_stat;
                        card.gif = data.sprites.versions['generation-v']['black-white'].animated.front_default;
                        card.img = data.sprites.other['official-artwork'].front_default;
                        console.log(data.stats[1].stat.url);
                        card.link = data.species.url

                        
                        corpo.appendChild(card);
                        document.querySelector(".normal").setAttribute("onClick", "teste(this)")
                    })
            });
        }
        )
}

// function teste(e){
//     var tipo = 'normal';
//     if(tipo == 'normal'){

//     }
// }
const fot = document.querySelector(".fot");

function exibirPokemon(e) {
    var id = e.id
    var nomeTeste = e.nome;
    var altura = e.altura;
    var peso = e.peso;
    var habilidade = e.habilidade;
    var habilidade2 = e.habilidade2;
    var tipo = e.tipo;
    var ataque = e.ataque;
    var defesa = e.defesa;
    var hp = e.hp;
    var img = e.img;

    document.querySelector(".back").style.backgroundColor = Cor(tipo);
    document.querySelector("#imgPok").src = img;
    document.querySelector("#idPok").innerHTML = id;
    document.querySelector("#nomeP").innerHTML = nomeTeste;
    document.querySelector("#altura").innerHTML = altura/10 + " m";
    document.querySelector("#peso").innerHTML = peso/10 + " Kg";
    document.querySelector("#habi1").innerHTML = habilidade;
    document.querySelector("#habi2").innerHTML = habilidade2;
    document.querySelector("#tipo").innerHTML = tipo;
    document.querySelector(".tipo").innerHTML = tipo;
    document.querySelector("#hp").innerHTML = "HP " + hp;
    document.querySelector("#ataque").innerHTML = "Ataque " + ataque;
    document.querySelector("#defesa").innerHTML = "Defesa " + defesa;

    var link = e.link;
    console.log(link);

    fetch(link)

        .then(resp => { return resp.json() })
        .then(info => {
            document.querySelector("#desc").innerHTML = info.flavor_text_entries[2].flavor_text;
            var link2 = info.evolution_chain
            console.log(link2)

        })

        
        
}

function exibirPokemon2() {
    var id =  pokem.id;

    console.log(id)
    var nome =pokem.name;
    var nomeTeste = pokem.name;
    var altura = pokem.height;
    var peso = pokem.weight;
    var habilidade = pokem.abilities[0].ability.name;
    var tipo = pokem.types[0].type.name;
    var ataque = pokem.stats[1].base_stat;
    var defesa = pokem.stats[2].base_stat;
    var hp = pokem.stats[0].base_stat;
    var img = pokem.sprites.other['official-artwork'].front_default;

    document.querySelector(".nome").innerHTML = nome;
    document.querySelector(".back").style.backgroundColor = Cor(tipo);
    document.querySelector("#imgPok").src = img;
    document.querySelector("#idPok").innerHTML = id;
    document.querySelector("#nomeP").innerHTML = nomeTeste;
    document.querySelector("#altura").innerHTML = altura/10 + " m";
    document.querySelector("#peso").innerHTML = peso/10 + " Kg";
    document.querySelector("#habi1").innerHTML = habilidade;
    document.querySelector("#tipo").innerHTML = tipo;
    document.querySelector(".tipo").innerHTML = tipo;
    document.querySelector("#hp").innerHTML = "HP " + hp;
    document.querySelector("#ataque").innerHTML = "Ataque " + ataque;
    document.querySelector("#defesa").innerHTML = "Defesa " + defesa;

    var link = pokem.link;

    console.log(link);

    // fetch(link)

    //     .then(resp => { return resp.json() })
    //     .then(info => {
    //         document.querySelector("#desc").innerHTML = info.flavor_text_entries[2].flavor_text;
    //         var link2 = info.evolution_chain
    //         console.log(link2)

    //     })

        
        
}


var uriPokemon = "https://pokeapi.co/api/v2/pokemon/";
var pokem = []
function procurarPokes() {
    var nomePoke = document.querySelector('.busca').value

    var novoNome = nomePoke.toLowerCase()
    const options = { method: 'GET' };
    // console.log(uriPokemon + novoNome)
    fetch(uriPokemon + novoNome, options)
    .then(res => res.json())
    .then(data => {
            pokem = data;  
            exibirPokemon2() 
            // console.log(uriPokemon + id_poke)
        }
        )
        .catch(err => console.error(err));
}






