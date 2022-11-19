const corpo = document.querySelector(".cards");
const Cor = (tipo) => {
    switch (tipo) {
        case 'normal':
            return ('#ccc')

        case 'fighting':
            return ('#fcc')

        case 'flying':
            return ('#ccf')

        case 'poison':
            return ('#79556f')

        case 'ground':
            return ('#ba8b65')

        case 'rock':
            return ('#888')

        case 'bug':
            return ('#e3cc74')

        case 'ghost':
            return ('#d8c9f5')

        case 'steel':
            return ('#cfcfcf')

        case 'fire':
            return ('#c15d4d')

        case 'water':
            return ('#669fb2')

        case 'grass':
            return ('#8bbe8b')

        case 'electric':
            return ("#faed75")

        case 'psychic':
            return ("#fa9bec")

        case 'ice':
            return ("#9ff5ec")

        case 'dragon':
            return ("#ffedc9")

        case 'dark':
            return ("#8f76c4")

        case 'fairy':
            return ("#f8cfd3")

        default:
            return ("red")
    }
};

function carregar() {
    var pokedex = [];
    let url = "https://pokeapi.co/api/v2/pokemon?limit=50&offset=0"
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
                        card.tipo = data.types[0].type.name;
                        card.ataque = data.stats[1].base_stat;
                        card.defesa = data.stats[2].base_stat;
                        card.hp = data.stats[0].base_stat;
                        card.gif = data.sprites.versions['generation-v']['black-white'].animated.front_default;
                        card.img = data.sprites.other['official-artwork'].front_default;
                        console.log(data.stats[1].stat.url);
                        card.link = data.species.url


                        corpo.appendChild(card);
                    })
            });
        }
        )
}

const fot = document.querySelector(".fot");

function exibirPokemon(e) {
    var id = e.id
    var nomeTeste = e.nome;
    var altura = e.altura;
    var peso = e.peso;
    var habilidade = e.habilidade;
    var tipo = e.tipo;
    var ataque = e.ataque;
    var defesa = e.defesa;
    var hp = e.hp;
    var img = e.img;

    document.querySelector(".back").style.backgroundColor = Cor(tipo);
    document.querySelector("#imgPok").src = img;
    document.querySelector("#idPok").innerHTML = id;
    document.querySelector("#nomeP").innerHTML = nomeTeste;
    document.querySelector("#altura").innerHTML = altura;
    document.querySelector("#peso").innerHTML = peso;
    document.querySelector("#habi1").innerHTML = habilidade;
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




