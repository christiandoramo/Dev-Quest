/*
Vamos testar seus conhecimentos de tiposprimitivos no JS! (se ficar com dúvida revise aaula d
e tipos primitivos)
Objetivo:
Crie uma condição que verifica se umboleto está pago ou não e apresenta uma mensagem em cada caso. Para atingir esse resultado leia com atenção as regras abaixo:
1 - Crie uma variável boletoPago e inicialize ela comfalse, ou seja, o boleto não está pago.
2 - Seu código deve ter uma condição (if) verificandose a variável boletoPago é true ou false;
3 - Se o boleto estiver pago apresente uma mensagemdizendo "O boleto está pago";
4 - Se o boleto não estiver pago apresente umamensagem dizendo "O boleto não está pago"
*/

let boletoPago = false;
boletoPago = window.confirm("Pagar boleto?")
if(boletoPago)
    window.alert("O boleto está pago")
else
    window.alert("O boleto não está pago")
