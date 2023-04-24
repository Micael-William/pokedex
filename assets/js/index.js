const form = document.getElementById('formulario');

form.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const campoBuscaPokemon = evento.target["item"]
  const buscaPokemon = campoBuscaPokemon.value
  
  if(requisicao(buscaPokemon)){
    alert('Gerando Pokemon')
  }

  const limparCampo = buscaPokemon  ? buscaPokemon == '' : '';
  return limparCampo

})


const mostrarPokemon = document.getElementById('boxes-pokens');

async function requisicao(campoBuscaItemPokemon){

  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${campoBuscaItemPokemon}/`;
    const api = await fetch(url);
    const data = await api.json()
   
    const listaPokemon = [];
    listaPokemon.push(data);

    listaPokemon.map(elemento => {
      mostrarPokemon.innerHTML += `
     
      <div class="container-poken">
        <span class="box-imagem"><img class="imagem-poken" src="${elemento.sprites.front_shiny}" alt="${elemento.name}">
        </span>
      
       <div class="fundo-poken">
          <p class="nome-poken"> ${elemento.id}. ${elemento.name}</p>
          <div class="exp-poken">
            <span class="numero-exp-poken exp-legenda">Experiência</span>
            <span class="numero-exp-poken exp">
              ${elemento.base_experience}
            </span>
          </div>
          
        </div>
      </div>    
    `;
    })
    
    
    
  } catch (error) {
    if(error){
      alert("Pokemon não encontrado...")
    }
  }
}
