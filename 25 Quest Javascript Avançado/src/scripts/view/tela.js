const tela = {
  perfil: document.querySelector('.profile-data'),
  renderizarPerfil(usuario) {
    //////////// PERFIL E SEUS DADOS ////////////////
    let info = `<div class="info"><img src="${
      usuario.avatarUrl
    }" alt="Imagem de Perfil"/>
          <div class="data">
          <h1>${usuario.name ?? 'sem nome'}</h1>
          <p>${usuario.bio ?? 'sem bio cadastrado'}</p>
          <ul class="user-counts">
          <li>👥 Followers: ${usuario.followers}  </li>
          <li>🕶 Following: ${usuario.following}  </li>
          </ul>
          </div></div>`
    // ?? testa se nulo( permite nulo e caso seja, trate logo após com a string acima por exemplo)

    //////////// ULTIMOS EVENTOS DO USUARIO ////////////////
    info += `<div class="events section"><h2>Eventos</h2><ul>`
    if (usuario.eventos.length !=0) {
      usuario.eventos.forEach((evento) => {
        if (evento != null) {
          const commitMessage =
            evento.payload.commits?.[0]?.message ?? evento.type
          const repoName = evento.repo.name ?? 'repositorio não descrito'
          info += `<li><strong>${repoName}</strong>  - ${commitMessage} </li>`
        }
      })
    } else {
      info += 'sem eventos recentes'
    }
    info += `</ul></div>`

    //////////// ALGUNS REPOSITORIOS DO USUARIOS ////////////////
    info += `<div class="repositories section"><h2>Repositorios</h2><ul>`
    usuario.repositories.forEach((repo) => {
      info += `<li>
      <a href="${repo.html_url}">
      <h3>${repo.name}</h3>
      <ul class="repo-info">
      <li>👩‍💻 ${repo.language ?? 'Desconhecida'}  </li>
      <li>🌟${repo.stargazers_count}  </li>
      <li>🍴${repo.forks_count}  </li>
      <li>👀${repo.watchers_count}  </li>
      </ul>
      </a></li>`
    })
    info += `</ul></div>`
    this.perfil.innerHTML = info
  },
  renderizarErro() {
    this.perfil.innerHTML = `<h3>Digite um nome de usuário válido</h3>`
  },
}

export { tela }
