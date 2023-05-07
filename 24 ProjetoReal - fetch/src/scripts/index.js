async function retornarPerfilUsuario(nomeDoUsuario) {
  const response = await fetch(`https://api.github.com/users/${nomeDoUsuario}`);
  // só vai receber a response quando pegar os dados
  return await response.json();
  // só dar o return quando conseguir a response
}

function exibirDadosDoUsuario(nomeDoUsuario) {
  retornarPerfilUsuario(nomeDoUsuario).then((dadosDoUsuario) => {
    const userInfo = `<div class="info"><img src="${
      dadosDoUsuario.avatar_url
    }" alt="Imagem de Perfil"/>
        <div class="data">
        <h1>${dadosDoUsuario.name ?? "sem nome WTF"}</h1>
        <p>${dadosDoUsuario.bio ?? "sem bio cadastrado"}</p>
        </div></div>`;
    // ?? testa se nulo( permite nulo e caso seja, trate logo após com a string acima por exemplo)
    document.querySelector(".profile-data").innerHTML = userInfo;
  });
}

async function retornarRepositoriosUsuario(nomeDoUsuario) {
  const response = await fetch(
    `https://api.github.com/users/${nomeDoUsuario}/repos`
  );
  // só vai receber a response quando pegar os dados
  return await response.json();
  let data = await resposta.json();
}

function exibirReposistorios(nomeDoUsuario) {
  retornarRepositoriosUsuario(nomeDoUsuario).then((repos) => {
    let infoRepos = `<div class="repositories section"><h2>Repositorios</h2><ul>`;
    repos.slice(0, 10).forEach((r) => {
      // pegamdp apenas os primeiros 10 repositorios
      infoRepos += `<li><a href="${r.html_url}">${r.name} | ${
        r.language ?? "?"
      }</a></li>`;
    });
    infoRepos += `</ul></div>`;
    document.querySelector(".profile-data").innerHTML += infoRepos;
  });
}

document
  .querySelector("input[id='btn-search']")
  .addEventListener("click", () => {
    const inputBusca = document.querySelector("#input-search");
    if (inputBusca.value != "") exibirReposEDadosDoUsuario(inputBusca.value);
  });

document
  .getElementById("input-search")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      const nome = document.getElementById("input-search").value;
      exibirReposEDadosDoUsuario(nome);
    }
  });

function exibirReposEDadosDoUsuario(nomeDoUsuario) {
  exibirDadosDoUsuario(nomeDoUsuario);
  exibirReposistorios(nomeDoUsuario);
}
