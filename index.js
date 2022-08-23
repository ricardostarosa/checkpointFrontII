const div = document.createElement("div");

const botao = document.querySelector("button");
const divRow = document.querySelector(".row");

const titulo = document.querySelector("#titulo");
const descricao = document.querySelector("#descricao");
const url = document.querySelector("#url");

const imagemForm = document.querySelector("#imagemForm");
const tituloForm = document.querySelector("#tituloForm");
const descricaoForm = document.querySelector("#descricaoForm");

const infoCard = {};

const listaCards = [];

function listaInfoCards() {
  listaCards.push({
    titulo: titulo.value,
    descricao: descricao.value,
    url: url.value,
  });
}

function montaCard(obj) {
  obj["titulo"] = titulo.value;
  obj["descricao"] = descricao.value;
  obj["url"] = url.value;

  return `<img id="imagemForm" src="${obj.url}" alt=""><h2 id="tituloForm">${obj.titulo}</h2><p id="descricaoForm">${obj.descricao}</p>`;
}

const attributes = {
  id: "card",
  class: "col-12 col-sm-8",
};

function setAttributes(element, atributos) {
  Object.keys(atributos).forEach((attr) => {
    element.setAttribute(attr, atributos[attr]);
  });
}

function adicionarInfoCard(event) {
  event.preventDefault();

  listaInfoCards();

  const elemento = montaCard(infoCard);

  div.innerHTML = elemento;

  setAttributes(div, attributes);

  divRow.appendChild(div);

  divRow.insertAdjacentElement("beforeend", div);
}

botao.addEventListener("click", adicionarInfoCard);
