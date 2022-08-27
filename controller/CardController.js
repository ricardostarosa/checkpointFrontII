class CardController {
  constructor() {
    this.div = document.querySelector(".cards");

    this.titulo = document.querySelector("#tituloForm");
    this.descricao = document.querySelector("#descricaoForm");
    this.url = document.querySelector("#imagemForm");

    this.modelo = new CardModelo();
    this.view = new Cardview(this.div);
  }
  adiciona(event) {
    event.preventDefault();

    const ehValido = Validacao.valida(
      this.titulo.value,
      this.descricao.value,
      this.url.value
    );

    if (!ehValido.length > 0) {
      this.modelo.insereDados(
        this.titulo.value,
        this.descricao.value,
        this.url.value
      );

      this.view.insereTemplate(this.modelo.exibeLista);
    } else {
      this.view.exibeAlertaErro(ehValido);
    }
  }
}

const cardController = new CardController();
