class Cardview {
  constructor(elemento) {
    this.elemento = elemento;
  }

  montaCards(lista) {
    return lista.reduce((cards, itens) => {
      return (
        cards +
        `<div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${itens.url}" alt="Card image cap">
           <div class="card-body">
                <h5 class="card-title">${itens.titulo}</h5>
                <p class="card-text">${itens.descricao}</p>

            </div>
    </div>`
      );
    }, "");
  }

  exibeAlertaErro(mensagem) {
    const erro = mensagem.reduce(
      (acc, item) => (acc += `${item.titulo} : ${item.mensagem} `),
      ""
    );

    alert(erro);
  }

  insereTemplate(listaCards) {
    this.elemento.innerHTML = this.montaCards(listaCards);
  }
}
