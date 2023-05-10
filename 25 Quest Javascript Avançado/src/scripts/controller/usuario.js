const quantidadeRepo = 10
const quantidadeEventos = 10
const urlGithubUser = "https://api.github.com/users/"

async function retornarPerfilUsuario(nomeDoUsuario) {
  const response = await fetch(`${urlGithubUser}${nomeDoUsuario}`)
  // só vai receber a response quando pegar os dados
  return await response.json()
  // só dar o return quando conseguir a response
}

async function retornarRepositoriosUsuario(nomeDoUsuario) {
  const response = await fetch(
    `${urlGithubUser}${nomeDoUsuario}/repos?per_page=${quantidadeRepo}`,
  )
  return await response.json()
}

async function retornarEventosUsuario(nomeDoUsuario) {
  const response = await fetch(
    `${urlGithubUser}${nomeDoUsuario}/events?per_page=${quantidadeEventos}`,
  )
  return await response.json()
}

export { retornarPerfilUsuario, retornarRepositoriosUsuario, retornarEventosUsuario }
