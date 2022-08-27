class CardModelo {
  #lista = [];

  insereDados(titulo, descricao, url) {
    this.#lista.push({
      titulo,
      descricao,
      url,
    });
  }

  get exibeLista() {
    return [].concat(this.#lista);
  }
}
