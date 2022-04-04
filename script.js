//GLOBAIS
let pratoFechado;
let bebidaFechado;
let sobremesaFechado;

let prato;
let pratoPreco;
let bebida;
let bebidaPreco;
let sobremesa;
let sobremesaPreco;

//PRATO E FECHAMENTO
function selecionarPrato(pratoSelecionado, nome, preco) {
  const botaoSelecionado = document
    .querySelector(".escolhaPrato")
    .querySelector(".selecionado");

  prato = nome;
  pratoPreco = preco;

  if (botaoSelecionado !== null) {
    botaoSelecionado.classList.remove("selecionado");
  }

  pratoSelecionado.classList.add("selecionado");

  pratoFechado = pratoSelecionado.innerHTML;
  
   if (pratoFechado && bebidaFechado && sobremesaFechado) {
    const botaoSelecao = document.querySelector(".selecao");
    botaoSelecao.classList.add("escondido");

    const botaoFechamento = document.querySelector(".pedidoFechado");
    botaoFechamento.classList.remove("escondido");
  }
}

//BEBIDA E FECHAMENTO
function selecionarBebida(bebidaSelecionado, nome, preco) {
  const botaoSelecionado = document
    .querySelector(".escolhaBebida")
    .querySelector(".selecionado");

  bebida = nome;
  bebidaPreco = preco;

  if (botaoSelecionado !== null) {
    botaoSelecionado.classList.remove("selecionado");
  }

  bebidaSelecionado.classList.add("selecionado");
  bebidaFechado = bebidaSelecionado.innerHTML;
  
  if (pratoFechado && bebidaFechado && sobremesaFechado) {
    const botaoSelecao = document.querySelector(".selecao");
    botaoSelecao.classList.add("escondido");

    const botaoFechamento = document.querySelector(".pedidoFechado");
    botaoFechamento.classList.remove("escondido");
  }
}

//SOBREMESA E FECHAMENTO
function selecionarSobremesa(sobremesaSelecionado, nome, preco) {
  const botaoSelecionado = document
    .querySelector(".escolhaSobremesa")
    .querySelector(".selecionado");

  sobremesa = nome;
  sobremesaPreco = preco;

  if (botaoSelecionado !== null) {
    botaoSelecionado.classList.remove("selecionado");
  }

  sobremesaSelecionado.classList.add("selecionado");
  sobremesaFechado = sobremesaSelecionado.innerHTML;

  if (pratoFechado && bebidaFechado && sobremesaFechado) {
    const botaoSelecao = document.querySelector(".selecao");
    botaoSelecao.classList.add("escondido");

    const botaoFechamento = document.querySelector(".pedidoFechado");
    botaoFechamento.classList.remove("escondido");
  }
}

function alertaSelecao() {
  alert("Selecione as 3 opções");
}

function revisarPedido() {
  const confirmback = document.querySelector(".backgroundConfirmacao");
  confirmback.classList.remove("escondido");

  document.querySelector(".pratoConfirmado").innerHTML = prato;
  document.querySelector(
    ".pratoConfirmadoPreco"
  ).innerHTML = `${pratoPreco.toFixed(2)}`;
  document.querySelector(".bebidaConfirmado").innerHTML = bebida;
  document.querySelector(
    ".bebidaConfirmadoPreco"
  ).innerHTML = `${bebidaPreco.toFixed(2)}`;
  document.querySelector(".sobremesaConfirmado").innerHTML = sobremesa;
  document.querySelector(
    ".sobremesaConfirmadoPreco"
  ).innerHTML = `${sobremesaPreco.toFixed(2)}`;

  document.querySelector(".totalConfirmadoPreco").innerHTML = `R$ ${(
    pratoPreco +
    bebidaPreco +
    sobremesaPreco
  ).toFixed(2)}`;
}

function cancelarConfirmacao() {
  const cancelar = document.querySelector(".backgroundConfirmacao");
  cancelar.classList.add("escondido");
}

function confirmacaoPedido() {
  let nomecompleto = prompt("Qual seu nome?");
  let enderecocompleto = prompt("Qual seu endereço?");
  let nome = nomecompleto.toLowerCase();
  let endereco = enderecocompleto.toLowerCase();

  const numero = 5561982172707;
  const total = (pratoPreco + bebidaPreco + sobremesaPreco).toFixed(2);

  let mensagem = `Olá, gostaria de fazer o pedido:
    - Prato: ${prato}
    - Bebida: ${bebida}
    - Sobremesa: ${sobremesa}
    Total: R$ ${total}

    Nome: ${nome}
    Endereço: ${endereco}
  `;

  mensagem = encodeURIComponent(mensagem);
  window.open(`https://wa.me/${numero}?text=${mensagem}`);
}
