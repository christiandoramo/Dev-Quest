/*
Solicitação 1

O seu gerente de projetos veio com uma nova
solicitação para ser acrescentada no projeto.
Agora ele quer apresentar as informações dos
últimos eventos do usuário no GitHub.
A solicitação é a seguinte:
Você deve apresentar na tela uma lista com até
10 últimos eventos do usuário no GitHub. Os
eventos que serão apresentados são de dois
tipos: CreateEvent e PushEvent apenas.
Para buscar os eventos você pode usar esse
endpoint do GitHub:

(https://api.github.com/users/<coloque-o-nome-
do-usuario-aqui>/events, por exemplo

https://api.github.com/users/devemdobro/event
s):
Para cada atividade você deve mostrar o nome
do repositório e a mensagem do evento.

Solicitação 2

O seu gerente de projetos veio com uma nova
solicitação para ser acrescentada no projeto.
Agora ele quer apresentar as informações dos
últimos eventos do usuário no GitHub.
A solicitação é a seguinte:
Você deve apresentar na tela uma lista com até
10 últimos eventos do usuário no GitHub. Os
eventos que serão apresentados são de dois
tipos: CreateEvent e PushEvent apenas.
Para buscar os eventos você pode usar esse
endpoint do GitHub:

(https://api.github.com/users/<coloque-o-nome-
do-usuario-aqui>/events, por exemplo

https://api.github.com/users/devemdobro/event
s):
Para cada atividade você deve mostrar o nome
do repositório e a mensagem do evento.

Solicitação 3

O seu gerente de projetos veio com com uma
nova solicitação para ser acrescentada no
projeto que busca as informações dos
repositórios do usuário do GitHub.
Agora além de trazer:
Nome do repositório
Link do repositório

Você precisa mostrar também
Quantidade de forks do repositório
Quantidade de estrelas do repositório
Quantidade de watchers do repositório
Mostrar a linguagem de programação do
repositório
*/

import {
  retornarPerfilUsuario,
  retornarRepositoriosUsuario,
  retornarEventosUsuario,
} from './controller/usuario.js'
import { usuario } from './model/usuario.js'
import { tela } from './view/tela.js'

function entradaInvalida(perfil, nome) {
  return nome.length === 0 || perfil.message == 'Not Found' ? true : false
}

async function exibirDadosDoUsuario(nomeDoUsuario) {
  const perfilAchado = await retornarPerfilUsuario(nomeDoUsuario)
  if (entradaInvalida(perfilAchado, nomeDoUsuario)) {
    tela.renderizarErro()
    return
  }
  const reposAchados = await retornarRepositoriosUsuario(nomeDoUsuario)
  const eventosAchados = await retornarEventosUsuario(nomeDoUsuario)
  usuario.setInfo(perfilAchado, reposAchados,eventosAchados)
  tela.renderizarPerfil(usuario)
  console.log(perfilAchado)
  console.log(reposAchados)
  console.log(eventosAchados)
}

document
  .querySelector("input[id='btn-search']")
  .addEventListener('click', () => {
    const nome = document.querySelector('#input-search').value
    exibirDadosDoUsuario(nome)
  })

document
  .getElementById('input-search')
  .addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      const nome = document.getElementById('input-search').value
      exibirDadosDoUsuario(nome)
    }
  })
