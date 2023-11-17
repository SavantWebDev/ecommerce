
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
          "<span id='codigoE' class='nome-produto-compra' > Código:" + codigo +"</span>" +
          "<div class='dados-compra-single'>" +
            "<span id='quantidadeE'>Quantidade: x"+ quantidade +"</span>" +
            "<span id='precoE'>Valor Total: R$" + precoTotal.toFixed(2) + "</span>" +
            "<div class='btn-comp-al'>" +
              "<button class='btn-editar' onclick='abrirModalEditar()'>Editar</button>" +
              "<button class='btn-excluir' onclick='excluirCard(" + contadorCards + ")'>Excluir</button>" +
            "</div>"
          "</div>" +
        "</div>"

    document.getElementById("cardsContainer").appendChild(novoCard);
    document.getElementById("codigo").value = "";
    document.getElementById("preco").value = "";
    document.getElementById("quantidade").value = 1; // Reinicia a quantidade para 1

    atualizarTotal(); // Chama a função para atualizar o total na tela
}



function atualizarTotal() {
    document.getElementById("totalPreco").innerHTML = "Total: R$" + totalPreco.toFixed(2);
}


function excluirCard(cardId) {
  console.log("Card excluído: " + cardId);
}

function excluirCard(cardID) {
  var card = document.getElementById("card" + cardID);
  card.remove();
}

function abrirModalEditar() {
  
  console.log("Modal aberto");
  document.getElementById('overlay').style.display = 'block';
  document.getElementById('modal').style.display = 'block';
  
  document.getElementById("editCodigo").value = document.getElementById("codigoE").innerText;
  document.getElementById("editQuantidade").value = document.getElementById("quantidadeE").innerText;
  document.getElementById("editPreco").value = document.getElementById("precoE").innerText;

}

function salvarEdicao() {
  var codigo = document.getElementById('codigo').value;
  var preco = document.getElementById('preco').value;
  var quantidade = document.getElementById('quantidade').value;
  
  document.getElementById("codigoE").innerText = document.getElementById("editCodigo").value;
  document.getElementById("quantidadeE").innerText = document.getElementById("editQuantidade").value;
  document.getElementById("valorE").innerText = document.getElementById("editValor").value;
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
          '<h1 class="nome-ad-prod font-nome"><b>Produto: Bohemia Lata</b></h1>' +
          '<h2 class="nome-ad-prod"><b>Código: ' + inputValue + '</b></h2>' +
          '<h2 class="nome-ad-prod"><b>Quantidade: x' + inputQuantidade +'</b></h2>' +
          '<h2 class="nome-ad-prod"><b>Valor : R$ ' + inputPreco + '</b></h2>' +
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