const form = document.querySelector("form");

const titulo = document.querySelector("#titulo");
const descricao = document.querySelector("#descricao");
const url = document.querySelector("#url");

const listaInfoCard = [];
const infoCard = {};

form.addEventListener("click", (event) => {
  event.preventDefault();

  infoCard["titulo"] = titulo.value;
  infoCard["descricao"] = descricao.value;
  infoCard["url"] = url.value;
});

listaInfoCard.push(infoCard);
console.log(listaInfoCard);
