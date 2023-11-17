var contadorCards = 0;
// Gerar cards e somar valores:

var contadorCards = 0;
var totalPreco = 0;

function gerarCard() {
    var codigo = document.getElementById("codigo").value;
    var quantidade = parseInt(document.getElementById("quantidade").value);
    var precoUnitario = document.getElementById("preco").value;
    
    // Validar se o preço unitário é um número antes de continuar
    if (isNaN(parseFloat(precoUnitario))) {
        alert("Por favor, insira um preço unitário válido.");
        return;
    }

    // Validar se a quantidade é um número inteiro maior que zero
    if (isNaN(quantidade) || quantidade <= 0 || !Number.isInteger(quantidade)) {
        alert("Por favor, insira uma quantidade válida.");
        return;
    }

    var precoTotal = quantidade * parseFloat(precoUnitario);

    totalPreco += precoTotal; // Adiciona o preço total ao total geral

    contadorCards++;
    var novoCard = document.createElement("div");
    novoCard.id = "card" + contadorCards;
    novoCard.innerHTML = 
       "<div class='produto-single-store'>" +
          "<br>" +
          "<span class='nome-produto-compra'> Código:" + codigo +"</span>" +
          "<div class='dados-compra-single'>" +
            "<span>Quantidade: "+ quantidade +"</span>" +
            "<span>Valor Total: R$" + precoTotal.toFixed(2) + "</span>" +
          "</div>" +
          "<div class='btn-comp-al'>" +
            "<button class='btn-editar' onclick='abrirModal()'>Editar</button>" +
            "<button class='btn-excluir' onclick='excluirCard(" + contadorCards + ")'>Excluir</button>" +
          "</div>"
        "</div>"

    document.getElementById("cardsContainer").appendChild(novoCard);
    document.getElementById("codigo").value = "";
    document.getElementById("preco").value = "";
    document.getElementById("quantidade").value = 1; // Reinicia a quantidade para 1

    atualizarTotal(); // Chama a função para atualizar o total na tela
}

// Função Editar


function editarCard(id) {
  var card = document.getElementById("card" + id);
  var codigo = card.querySelector(".nome-produto-compra").textContent.split(":")[1].trim();
  var quantidade = parseInt(card.querySelector(".dados-compra-single span:nth-child(1)").textContent.split(":")[1].trim());
  var valorTotal = parseFloat(card.querySelector(".dados-compra-single span:nth-child(2)").textContent.split(":")[1].trim().replace("R$", ""));

  // Preencha os campos do modal ou formulário com os valores atuais
  document.getElementById("codigoEdit").value = codigo;
  document.getElementById("quantidadeEdit").value = quantidade;
  document.getElementById("precoEdit").value = valorTotal / quantidade;

  // Abra o modal ou formulário
  abrirModal();
}

function excluirCard(id) {
  var card = document.getElementById("card" + id);
  var precoTotalCard = parseFloat(card.querySelector(".dados-compra-single span:nth-child(2)").textContent.split(":")[1].trim().replace("R$", ""));
  totalPreco -= precoTotalCard;
  card.parentNode.removeChild(card);
  atualizarTotal();
}

// YYYYYYYYYYYY

function atualizarTotal() {
    // Atualiza o conteúdo de algum elemento HTML com o total do preço
    document.getElementById("totalPreco").innerHTML = "Total: R$" + totalPreco.toFixed(2);
}

// Função de exemplo para abrir modal (não implementada)
function abrirModal() {
    console.log("Modal aberto");
}

// Função de exemplo para excluir card (não implementada)
function excluirCard(cardId) {
    console.log("Card excluído: " + cardId);
}

// --------------------------------

function excluirCard(cardID) {
  var card = document.getElementById("card" + cardID);
  card.remove();
}

function abrirModal() {
  var overlay = document.getElementById('overlay');
  var modal = document.getElementById('modal');
  overlay.style.display = 'block';
  modal.style.display = 'block';
}

function salvarEdicao() {
  var codigo = document.getElementById('codigo').value;
  var preco = document.getElementById('preco').value;
  var quantidade = document.getElementById('quantidade').value;
  fecharModal();
}

function fecharModal() {
  var overlay = document.getElementById('overlay');
  var modal = document.getElementById('modal');
  overlay.style.display = 'none';
  modal.style.display = 'none';
}

function checarTinput() {
  var ElementoI = document.getElementById("codigo");
  var ElementoP = document.getElementById("preco");
  var ElementoQ = document.getElementById("quantidade");

  var inputValue = ElementoI.value;
  var inputPreco = ElementoP.value;
  var inputQuantidade = ElementoQ.value;
  var tamanhoCaracteres = 12;
  if (inputValue.length >= tamanhoCaracteres) {
      ElementoI.value = inputValue.substring(0, tamanhoCaracteres);
      gerarCard();
      document.getElementById("vizualizaProd").innerHTML =
          '<div id="displayValues" class="al-f-dados"></div>' +
          '<div class="vizualizar-dados">' +
          '<div class="al-f-dados">' +
          '<h1 class="nome-ad-prod"><b>Prod.: Bohemia Lata</b></h1>' +
          '<h1 class="nome-ad-prod"><b>Cód.: ' + inputValue + '</b></h1>' +
          '<h1 class="nome-ad-prod"><b>Qt.: ' + inputQuantidade +'</b></h1>' +
          '<h1 class="nome-ad-prod"><b>Valor.: R$ ' + inputPreco + '</b></h1>' +
          '</div>' +
          '</div>';
  }
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