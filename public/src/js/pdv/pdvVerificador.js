// Checar se o imput foi clikado
function checarTinput() {
    var ElementoI = document.getElementById("codigo");
    var ElementoP = document.getElementById("preco");
    var ElementoQ = document.getElementById("quantidade");
  
    const inputValue = ElementoI.value;
    const inputPreco = ElementoP.value;
    const inputQuantidade = ElementoQ.value;
    var tamanhoCaracteres = 15;
    //zona de teste
    
    //
    /* Real:  */
    // Verificar Regras de Entrada
    /*
    if (inputValue.length >= tamanhoCaracteres ) {
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
    // Retornar o valor digitado no banco de dados
    fetch(`https://api-n56x.onrender.com/v1/api/produto?ean=${inputValue}`)
    .then(response => response.json())  
    .then(data =>{
      console.log(data.ean)
    })  // os dados estão vindo aqui,
    .catch(error => console.error('Erro:', error));
    */
    // Teste:
  
    // Verificador de Regras de Passagem de Dados
    // Verifica se inputValue existe e não está vazio
    if (inputValue.length >= tamanhoCaracteres ) {
      ElementoI.value = inputValue.substring(0, tamanhoCaracteres);
  
      // Verificador de Existência // Não pode ser um número que não exista e nehum vazio
      if (inputValue && inputValue.trim() !== '') {
        fetch(`https://api-n56x.onrender.com/v1/api/produto?ean=${inputValue}`)
          .then(response => response.json())
          .then(data => {
            if (data.ean) {
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
              console.log(data.ean);
            } else {
              // Produto não encontrado, exibe um alerta
              alert('Produto não encontrado na API.');
            }
          })
          .catch(error => console.error('Erro:', error));
      } else {
        // Valor de inputValue é inválido ou vazio, exibe um alerta
        alert('Por favor, insira um valor válido no input.');
      }
    } else {
        alert('Teste')
    }
  
  }
  