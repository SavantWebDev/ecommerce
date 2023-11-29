var contadorCards = 0;
var totalPreco = 0;

function gerarCard(nome, ean, preco, quantidade, isLocalStorageData) { // depois adiciono quantidade
  //var codigo = document.getElementById("codigo").value;

  // Validar se o código é não vazio
  if (ean.trim() === '') {
    alert("Por favor, insira um código válido.");
    return;
  }

  contadorCards++;

  if(!isLocalStorageData){
    var precoU = parseFloat(String(preco).replace(",", "."))
    var quantidadeT = parseFloat(quantidade)
    //var ValorTotalCard = ValorTotalCard
    var ValorTotalCard = precoU * quantidadeT
    totalPreco = totalPreco + ValorTotalCard
    //------------------------------
    var novoCard = document.createElement("div");
    novoCard.id = "card" + contadorCards;
    novoCard.innerHTML =
      "<div class='produto-single-store'>" +
      "<br>" +
      "<span id='nomeE' class='nome-produto-compra' >" + nome + "</span>" +
      "<span id='codigoE'>Código: " + ean + "</span>" +
      "<div class='dados-compra-single'>" +
      "<span id='quantidadeE'>Quantidade: " + quantidade + "</span>" +
      "<span id='precoE'>Valor Total: R$" + ValorTotalCard + "</span>" + // Aqui multiplico o preço pela quantidade
      "<div class='btn-comp-al'>" +
      "<button class='btn-excluir' onclick='excluirCard(" + contadorCards + ")'><span class='material-symbols-outlined'>delete</span></button>" +
      "</div>" +
      "</div>" +
      "</div>";
  
    document.getElementById("cardsContainer").appendChild(novoCard);
    atualizarTotal();
  } 
  else {
    var ValorTotalCard = parseFloat(String(preco).replace(",", "."));
    var novoCard = document.createElement("div");
    totalPreco = totalPreco + ValorTotalCard
    novoCard.id = "card" + contadorCards;
    novoCard.innerHTML =
      "<div class='produto-single-store'>" +
      "<br>" +
      "<span id='nomeE' class='nome-produto-compra' >" + nome + "</span>" +
      "<span id='codigoE'>Código: " + ean + "</span>" +
      "<div class='dados-compra-single'>" +
      "<span id='quantidadeE'>Quantidade: " + quantidade + "</span>" +
      "<span id='precoE'>Valor Total: R$" + ValorTotalCard.toFixed(2) + "</span>" +
      "<div class='btn-comp-al'>" +
      "<button class='btn-excluir' onclick='excluirCard(" + contadorCards + ")'><span class='material-symbols-outlined'>delete</span></button>" +
      "</div>" +
      "</div>" +
      "</div>";

    document.getElementById("cardsContainer").appendChild(novoCard);
    atualizarTotal();
  }
  //
  var primeiroFila = document.getElementById("cardsContainer").firstChild;
  document.getElementById("cardsContainer").insertBefore(novoCard, primeiroFila);
  atualizarTotal();
  document.getElementById("codigo").value = "";
  salvarCardsNoLocalStorage();

}

function atualizarTotal() {
  document.getElementById("totalPreco").innerHTML = "Total: R$" + totalPreco.toFixed(2);
  document.getElementById("precoFinalModal").innerHTML = "R$ " + totalPreco.toFixed(2);
  document.getElementById("precoFinalTotal").innerHTML = "R$ " + totalPreco.toFixed(2);
}

function excluirCard(cardID) { // Preciso remover o item da tela e o item do local storage
  var card = document.getElementById("card" + cardID);
  card.remove();
  salvarCardsNoLocalStorage()
  atualizarTotal()
  location.reload();
  //localStorage.removeItem(card)
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
  localStorage.clear()
  // Recarregar a página
  location.reload();
}

//Soma Preços // Modal
// Apresentar Valor total assim que for bipado
document.getElementById("somaPrecos").innerHTML =
  '<div class="info-total-descontos">' +
  '<span id="totalPreco" class="total-produtos">Total: R$ 0.00</span>' + 
  '<span>Descontos:</span>' +
  '<span></span>' +
  '</div>';

//Modal venda
document.getElementById("precoTot").innerHTML =
  '<div class="modal-c">' +
  '<div>' +
  '<label for="codigo" class="label-modal-fin-venda">Preço Total:</label>' +
  '</div>' +
  '<div>' +
  '<label id="precoFinalModal" class="label-modal-fin-venda"> R$ ---,--</label>' +
  '</div>' +
  '</div>';
document.getElementById("descontoTot").innerHTML =
  '<div class="modal-c">' +
  '<label for="preco"  class="label-modal-fin-venda">Desconto:</label>' +
  '<label class="label-modal-fin-venda"> ---,-- %</label>' +
  '</div>';
document.getElementById("precoFin").innerHTML =
  '<div class="modal-c">' +
  '<label for="quantidade" class="label-modal-fin-venda">Preço Final: </label>' +
  '<label id="precoFinalTotal" class="label-modal-fin-venda">R$ ---,--</label>' +
  '</div>';
document.getElementById("formaPag").innerHTML =
  '<div class="modal-c">' +
  '<label for="formPag" class="label-modal-fin-venda">Forma de Pagamento:   </label>' +
  '<select id="formpagmt" name="formas" style="border-width: 1px; border-radius: 5px;">' +
  '<option value="especie">Dinheiro Espécie</option>' +
  '<option value="pix">PIX</option>' +
  '<option value="cartao">Cartão</option>' +
  '<option value="boleto">Boleto</option>' +
  '</select>' +
  '</div>';
document.getElementById("parcelas").innerHTML =
  '<div class="modal-c">' +
  '<label for="parcPag" class="label-modal-fin-venda">Quantidade de Parcelas:</label>' +
  '<select id="parcPagt" name="parcelas" style="border-width: 1px; border-radius: 5px;">' +
  '<option value="umP">1x</option>' +
  '<option value="doisP">2x</option>' +
  '<option value="tresP">3x</option>' +
  '<option value="quatroP">4x</option>' +
  '</select>' +
  '</div>';

function salvarCardsNoLocalStorage() {
  var cardsContainer = document.getElementById('cardsContainer');
  var cards = cardsContainer.getElementsByClassName('produto-single-store');
  var cardsArray = [];

  // Mapear os cards para um array de objetos
  for (var i = 0; i < cards.length; i++) {
    var card = cards[i];
    var nome = card.querySelector('.nome-produto-compra').textContent;
    var ean = card.querySelector('#codigoE').textContent.replace('Código: ', '');
    var quantidade = card.querySelector('#quantidadeE').textContent.replace('Quantidade: ', '');
    var ValorTotalCard = parseFloat(card.querySelector('#precoE').textContent.replace('Valor Total: R$', '').trim());

    cardsArray.push({ nome: nome, ean: ean, quantidade: quantidade, ValorTotalCard: ValorTotalCard });

    console.log("Teste:")
    console.log(cardsArray)
  }

  // Salvar os cards e totalPreco no localStorage como uma string JSON

  var dadosParaSalvar = {
    cards: cardsArray,
    ValorTotalCard: ValorTotalCard
  };

  localStorage.setItem('dados', JSON.stringify(dadosParaSalvar));
}

function carregarCardsDoLocalStorage() {
  var dadosArmazenados = JSON.parse(localStorage.getItem('dados')) || {};

  // Carregar os cards do localStorage
  if (dadosArmazenados.cards) {
    dadosArmazenados.cards.forEach(function (cardData) {
      gerarCard(cardData.nome, cardData.ean, cardData.ValorTotalCard, cardData.quantidade, true);
    });
  }

  // Carregar totalPreco do localStorage
  if (dadosArmazenados.totalPreco) {
    totalPreco = dadosArmazenados.totalPreco;
    atualizarTotal();
  }
}

// Chamar a função para carregar os cards ao carregar a página
carregarCardsDoLocalStorage();
/*
function emitirNota() {
  const itens = localStorage.getItem('dados')
  console.log(itens)
  if(itens) {
    const dados = JSON.parse(itens)
    //console.log(`dados: ${dados}`)
    const linkAPI = 'https://api-n56x.onrender.com/v1/api/Produtos' // Caminho inverso do retorno de informações ao vender o produto
    const configOp = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dados),
    };
    fetch(linkAPI, configOp)
      .then(res => {
        if (!res.ok) {
          throw new Error('Erro no envio de dados')
        }
        return res.json();
      })
      .then(data => {
        console.log(`Dados enviados com sucesso ${data}`)
      })
      .catch(erro => {
        console.log(`Erro ao enviar os dados ${erro}`)
      })
  } else {
    console.log('Deu erro nos dados, eles não tão no localstorage')
  }
}
*/

//Teste Retorno de dados local para um db básico em json:

function emitirNota() {
  const itens = localStorage.getItem('dados')
  console.log(itens)
  if(itens) {
    const dados = JSON.parse(itens)
    //console.log(`dados: ${dados}`)
    const linkAPI = 'http://localhost:5001' // Caminho inverso do retorno de informações ao vender o produto // executar serverT
    const configOp = {
      method: 'POST',
      body: JSON.stringify(dados),
      headers: {
        'Content-Type': 'application/json',
      },
      
      //body: JSON.stringify(dados),
    };
    console.log("AHHHHHH ", configOp)
    fetch(linkAPI + '/dados', configOp)
      .then(res => {
        if (!res.ok) {
          throw new Error('Erro no envio de dados')
        }
        return res.json();
      })
      .then(data => {
        console.log(`Dados enviados com sucesso ${data}`)
      })
      .catch(erro => {
        console.log(`Erro ao enviar os dados ${erro}`)
      })
  } else {
    console.log('Deu erro nos dados, eles não tão no localstorage')
  }
}