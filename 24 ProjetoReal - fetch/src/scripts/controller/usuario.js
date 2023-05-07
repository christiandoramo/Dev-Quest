const quantidadeRepo = 10;
const urlGithubUser = `https://api.github.com/users/`;

async function retornarRepositoriosUsuario(nomeDoUsuario) {
  const response = await fetch(
    `${urlGithubUser}${nomeDoUsuario}/repos?per_page=${quantidadeRepo}`
  );
  // só vai receber a response quando pegar os dados
  return await response.json();
}
async function retornarPerfilUsuario(nomeDoUsuario) {
  const response = await fetch(`${urlGithubUser}${nomeDoUsuario}`);
  // só vai receber a response quando pegar os dados
  return await response.json();
  // só dar o return quando conseguir a response
}

export { retornarPerfilUsuario, retornarRepositoriosUsuario };
