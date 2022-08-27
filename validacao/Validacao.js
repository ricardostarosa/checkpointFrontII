class Validacao {
  static valida(titulo, descricao, url) {
    const tituloEhvalido = titulo.length > 0;
    const descricaoEhValida = descricao.length > 0;
    const urlEhValida =
      /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/.test(
        url
      );

    const erros = [
      {
        titulo: "titulo",
        valido: tituloEhvalido,
        mensagem: "Favor, digite um título para prosseguir",
      },
      {
        titulo: "descricao",
        valido: descricaoEhValida,
        mensagem: "Favor, digite uma descrição para prosseguir",
      },

      {
        titulo: "url",
        valido: urlEhValida,
        mensagem: "Url inválida",
      },
    ];

    return erros.filter((item) => !item.valido);
  }
}
