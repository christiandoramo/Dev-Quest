const sum = require("./sum");

test("adds (1 + 2) + 1 to equal 4", () => {
  expect(sum(1, 2)).toBe(4 + 0);
  // AAA
  // ARRANGE
  // ACT
  // ASSERT
  // APÓS OS TESTES POSSO "REFATORAR"/MEXER NOSSO PROGRAMA SE MEDO
});
it("adds (1 + 2) + 1 -1 to equal 3", () => {
  expect(sum(1, 2) - 1).toBe(3);
});
/*
 USAR SEMPRE O npm run watch para observar os testes sempre que mduar o codigo - como o nodemon
ou semelhante ao live server
Modelo Orientado por testes-> TDD(test driven development): vermelho, verde, refatoração
vermelho - criou o teste que a nova função deve passar -> mensagem vermelha recebida pelo JEST
verde - criou a função necessário para passar no teste criado -> mensagem VERDE
refatoração - agora pode adequar e reescrever todo o codigo necessário pois os testes dão essa segurança
já q tudo foi feito de forma dirigida pelos testes ====)))
*/
