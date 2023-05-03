function enviar() {
  const nomeCompleto = document.querySelector("#nomeCompleto");
  const divNomeCompleto = document.getElementsByClassName("nomeCompleto")[0];
  const telefone = document.querySelector("#telefone");
  const divTelefone = document.getElementsByClassName("telefone")[0];
  const email = document.querySelector("#email");
  const divEmail = document.getElementsByClassName("email")[0];
  const mensagem = document.querySelector("#mensagem");
  const divMensagem = document.getElementsByClassName("mensagem")[0];
  if (
    telefone.value != "" &&
    email.value != "" &&
    mensagem.value != "" &&
    nomeCompleto.value != ""
  ) {
    alert("Mensagem enviada com Sucesso!");
  }
  logDeERRO(divNomeCompleto, nomeCompleto);
  logDeERRO(divTelefone, telefone);
  logDeERRO(divEmail, email);
  logDeERRO(divMensagem, mensagem);
}

function logDeERRO(divPai, entrada) {
  const log = divPai.querySelector("p.log");
  if (
    entrada.value == "" ||
    entrada.value == undefined ||
    entrada.value == null
  ) {
    log.classList.add("logAtivado");
    entrada.classList.add("comErro");
    console.log(`${entrada.value}\ndentro do log false`);
  } else {
    log.classList.remove("logAtivado");
    entrada.classList.remove("comErro");
    console.log(`${entrada.value}\ndentro do log true`);
  }
}
