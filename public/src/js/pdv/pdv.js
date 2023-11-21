var contadorCards = 0;
var totalPreco = 0;

function gerarCard(nome, ean, preco) { // depois adiciono quantidade
  //var codigo = document.getElementById("codigo").value;

  // Validar se o código é não vazio
  if (ean.trim() === '') {
    alert("Por favor, insira um código válido.");
    return;
  }

  contadorCards++;
  var novoCard = document.createElement("div");
  novoCard.id = "card" + contadorCards;
  novoCard.innerHTML =
    "<div class='produto-single-store'>" +
    "<br>" +
    "<span id='nomeE' class='nome-produto-compra' >" + nome + "</span>" +
    "<span id='codigoE'>Código: " + ean + "</span>" +
    "<div class='dados-compra-single'>" +
    "<span id='quantidadeE'>Quantidade: " + "XX" + "</span>" +
    "<span id='precoE'>Valor Total: R$" + preco + "</span>" + // Aqui multiplico o preço pela quantidade
    "<div class='btn-comp-al'>" +
    "<button class='btn-excluir' onclick='excluirCard(" + contadorCards + ")'>Excluir</button>" +
    "</div>" +
    "</div>" +
    "</div>";

  document.getElementById("cardsContainer").appendChild(novoCard);
  document.getElementById("codigo").value = "";

  atualizarTotal(); // Chama a função para atualizar o total na tela
  //salvarCardsNoLocalStorage()
}

function atualizarTotal() {
  document.getElementById("totalPreco").innerHTML = "Total: R$" + totalPreco.toFixed(2);
}

function excluirCard(cardID) {
  var card = document.getElementById("card" + cardID);
  card.remove();
}

function salvarCardsNoLocalStorage() {
  var cardsContainer = document.getElementById('cardsContainer');
  var cards = cardsContainer.getElementsByClassName('card');
  var cardsArray = Array.from(cards).map(card => card.textContent);

  // Salva os cards no localStorage como uma string JSON
  localStorage.setItem('cards', JSON.stringify(cardsArray));
}


// Modal finalizar Compra
function abrirModalfinalizar() {
  var overlay = document.getElementById('overlay2');
  var modal = document.getElementById('modalfinalizar');
  overlay.style.display = 'block';
  modal.style.display = 'block';
}

function fecharModalfinalizar() {
  var overlay = document.getElementById('overlay2');
  var modal = document.getElementById('modalfinalizar');
  overlay.style.display = 'none';
  modal.style.display = 'none';
}

//Modal cancelar Compra
function abrirModalcancelar() {
  var overlay = document.getElementById('overlay3');
  var modal = document.getElementById('modalcancelar');
  overlay.style.display = 'block';
  modal.style.display = 'block';
}

function fecharModalcancelar() {
  var overlay = document.getElementById('overlay3');
  var modal = document.getElementById('modalcancelar');
  overlay.style.display = 'none';
  modal.style.display = 'none';
}

function cancelarCompra() {
  // Recarregar a página
  location.reload();
}

//Soma Preços
document.getElementById("somaPrecos").innerHTML =
  '<div class="info-total-descontos">' +
  '<span id="totalPreco" class="total-produtos">Total: R$0.00</span>' +
  '<span>Descontos:</span>' +
  '<span></span>' +
  '</div>';
document.getElementById("precoTot").innerHTML =
  '<div class="modal-c">' +
  '<div>' +
  '<label for="codigo">Preço Total:</label>' +
  '</div>' +
  '<div>' +
  '<label> R$ ---,--</label>' +
  '</div>' +
  '</div>';
document.getElementById("descontoTot").innerHTML =
  '<div class="modal-c">' +
  '<label for="preco">Desconto:</label>' +
  '<label> ---,-- %</label>' +
  '</div>';
document.getElementById("precoFin").innerHTML =
  '<div class="modal-c">' +
  '<label for="quantidade">Preço Final:</label>' +
  '<label> R$ ---,--</label>' +
  '</div>';
document.getElementById("formaPag").innerHTML =
  '<div class="modal-c">' +
  '<label for="formPag">Escolha uma forma de pagamento:</label>' +
  '<select id="formpagmt" name="formas"  style="border-width: 1px; border-radius: 5px;">' +
  '<option value="especie">Dinheiro Especie</option>' +
  '<option value="cartao">Cartão</option>' +
  '<option value="boleto">Boleto</option>' +
  '</select>' +
  '</div>';
document.getElementById("parcelas").innerHTML =
  '<div class="modal-c">' +
  '<label for="parcPag">Quantidade de Parcelas:</label>' +
  '<select id="parcPagt" name="parcelas" style="border-width: 1px; border-radius: 5px;">' +
  '<option value="umP">1x</option>' +
  '<option value="doisP">2x</option>' +
  '<option value="tresP">3x</option>' +
  '<option value="quatroP">4x</option>' +
  '</select>' +
  '</div>';