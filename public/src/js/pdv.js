var contadorCards = 0;

function gerarCard() {
    var codigo = document.getElementById("codigo").value;
    var preco = document.getElementById("preco").value;
    var quantidade = document.getElementById("quantidade").value;
    contadorCards++;
    var novoCard = document.createElement("div");
    novoCard.id = "card" + contadorCards;
    novoCard.innerHTML = 
       "<div class='produto-single-store'>" +
          "<br>" +
          "<span class='nome-produto-compra'> Código:" + codigo +"</span>" +
          "<div class='dados-compra-single'>" +
            "<span>Quantidade: "+ quantidade +"</span>" +
            "<span>Valor: R$" + preco + "</span>" +
          "</div>" +
          "<div class='btn-comp-al'>" +
            "<button class='btn-editar' onclick='abrirModal()'>Editar</button>" +
            "<button class='btn-excluir' onclick='excluirCard(" + contadorCards + ")'>Excluir</button>" +
          "</div>"
        "</div>"
    document.getElementById("cardsContainer").appendChild(novoCard);
    document.getElementById("codigo").value = "";
    document.getElementById("preco").value = "";
    document.getElementById("quantidade").value = "";
}

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
  var inputValue = ElementoI.value;
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
          '<h1 class="nome-ad-prod"><b>Qt.: XXX</b></h1>' +
          '<h1 class="nome-ad-prod"><b>Valor.: R$ XX,XX</b></h1>' +
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
                                                    '<span class="total-produtos">Total:</span>' +
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
                                                '<select id="formpagmt" name="formas">' +
                                                    '<option value="especie">Dinheiro Especie</option>' +
                                                    '<option value="cartao">Cartão</option>' +
                                                    '<option value="boleto">Boleto</option>' +
                                                    '<option value="bunda">Bunda</option>' +
                                                '</select>' +
                                              '</div>';
document.getElementById("parcelas").innerHTML =      
                                              '<div class="modal-c">' +           
                                                '<label for="parcPag">Quantidade de Parcelas:</label>' +
                                                '<select id="parcPagt" name="parcelas">' +
                                                    '<option value="umP">1x</option>' +
                                                    '<option value="doisP">2x</option>' +
                                                    '<option value="tresP">3x</option>' +
                                                    '<option value="quatroP">4x</option>' +
                                                '</select>' +
                                              '</div>';