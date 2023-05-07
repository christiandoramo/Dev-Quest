const tela = {
  perfil: document.querySelector(".profile-data"),
  renderizarPerfil(usuario) {
    let info = `<div class="info"><img src="${
      usuario.avatarUrl
    }" alt="Imagem de Perfil"/>
          <div class="data">
          <h1>${usuario.name ?? "sem nome"}</h1>
          <p>${usuario.bio ?? "sem bio cadastrado"}</p>
          </div></div>`;
    // ?? testa se nulo( permite nulo e caso seja, trate logo após com a string acima por exemplo)
    info += `<div class="repositories section"><h2>Repositorios</h2><ul>`;
    usuario.repositories.forEach((repo) => {
      // pegamdp apenas os primeiros 10 repositorios
      info += `<li><a href="${repo.html_url}">${repo.name} | ${
        repo.language ?? "?"
      }</a></li>`;
    });
    info += `</ul></div>`;
    this.perfil.innerHTML = info;
  },
  renderizarErro() {
    this.perfil.innerHTML = `<h3>Digite um nome de usuário válido</h3>`;
  },
};

export { tela };
