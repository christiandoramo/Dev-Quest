import {
  retornarPerfilUsuario,
  retornarRepositoriosUsuario,
} from "./controller/usuario.js";
import { usuario } from "./model/usuario.js";
import { tela } from "./view/tela.js";

function entradaInvalida(perfil, nome) {
  return nome.length === 0 || perfil.message == "Not Found" ? true : false;
}

async function exibirDadosDoUsuario(nomeDoUsuario) {
  const perfilAchado = await retornarPerfilUsuario(nomeDoUsuario);
  if (entradaInvalida(perfilAchado, nomeDoUsuario)) {
    tela.renderizarErro();
    return;
  }
  const reposAchados = await retornarRepositoriosUsuario(nomeDoUsuario);
  usuario.setInfo(perfilAchado, reposAchados);
  tela.renderizarPerfil(usuario);
}

document
  .querySelector("input[id='btn-search']")
  .addEventListener("click", () => {
    const nome = document.querySelector("#input-search").value;
    exibirDadosDoUsuario(nome);
  });

document
  .getElementById("input-search")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      const nome = document.getElementById("input-search").value;
      exibirDadosDoUsuario(nome);
    }
  });
