// Validador do código ean passado
function checarTinput() {
    var codigo = document.getElementById("codigo");
    const Icodigo = codigo.value;

    var tamanhoCaracteres = 13;

    // Verificador de tamanho
    if (Icodigo.length >= tamanhoCaracteres) {
        codigo.value = Icodigo.substring(0, tamanhoCaracteres);

        verificarExApi(Icodigo)//, Ipreco, Iquantidade

    } else {
        if (Icodigo.length >= 13) {
            alert('Teste')
        }
    }
}

// Verificador de Existência // Não pode ser um número que não exista e nenhum vazio
function verificarExApi(Icodigo) {//, Ipreco, Iquantidade
    if (Icodigo && Icodigo.trim() !== '') {
        fetch(`https://api-n56x.onrender.com/v1/api/produto?ean=${Icodigo}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);

                if (Icodigo.value != data.ean) {
                    // Gera o card de vendas geral
                    gerarCard(data.nomeproduto, data.ean, data.valor);

                    // Gera o vizualizador do último produto passado
                    document.getElementById("vizualizaProd").innerHTML =
                        '<div id="displayValues" class="al-f-dados"></div>' +
                        '<div class="vizualizar-dados">' +
                        '<div class="al-f-dados">' +
                        '<h1 class="nome-ad-prod font-nome"><b>Produto: ' + data.nomeproduto + '</b></h1>' +
                        '<h2 class="nome-ad-prod"><b>Código: ' + data.ean + '</b></h2>' +
                        '<h2 class="nome-ad-prod"><b>Preço: ' + data.valor + '</b></h2>' +
                        '<h2 class="nome-ad-prod"><b>Quantidade: ' + 'XX' + '</b></h2>' +
                        '<br>' +
                        '<br>' +
                        '<h2 class="nome-ad-prod"><b>Descrição: ' + 'data.descricao' + '</b></h2>' +
                        '</div>' +
                        '</div>';
                } else {
                    // Produto não encontrado, exibe um alerta personalizado
                    // alert('Produto com código ' + Icodigo + ' não encontrado na API.');
                    console.log('tttttttttttttttttt')
                    alert('Teste');
                }
            })
            .catch(error => console.error('Erro:', error));
    } else {
        // Valor de Icodigo é inválido ou vazio, exibe um alerta
        alert('Por favor, insira um valor válido no input.');
    }
}

