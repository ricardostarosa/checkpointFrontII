const div = document.createElement("div");

const botao = document.querySelector("button");
const divRow = document.querySelector(".row");

const titulo = document.querySelector("#titulo");
const descricao = document.querySelector("#descricao");
const url = document.querySelector("#url");

const imagemForm = document.querySelector("#imagemForm");
const tituloForm = document.querySelector("#tituloForm");
const descricaoForm = document.querySelector("#descricaoForm");

const listaCards = [];

function listaInfoCards() {
  listaCards.push({
    titulo: titulo.value,
    descricao: descricao.value,
    url: url.value,
  });
}

function montaCards(lista) {
  let cards = "";
  lista.forEach((itens) => {
    cards += `<div class="card">
           <img id="imagemForm" src="${itens.url}" alt="">
           <h2 id="tituloForm">${itens.titulo}</h2>
           <p id="descricaoForm">${itens.descricao}</p>
       </div>`;
  });

  return cards;
}

function adicionarInfoCard(event) {
  event.preventDefault();

  listaInfoCards();

  document.querySelector("#card").className = "col-8 col-sm-8";
  document.querySelector(".rowImages").innerHTML = montaCards(listaCards);
}

botao.addEventListener("click", adicionarInfoCard);
