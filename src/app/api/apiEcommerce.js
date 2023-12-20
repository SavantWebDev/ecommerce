// var rotaApi = "http://45.188.156.17:5464/v1/api"
var rotaApi = "https://api-n56x.onrender.com/v1/api"

// Rota Categorias
export async function getCategory() {
    const response = await fetch(`${rotaApi}/categorias`)
    const data = await response.json();
    // console.log(data.categorias)
    return data.categorias;
}

// Rota Produtos da Categoria
export async function getCategoryProduct(categoria) {
    const response = await fetch(`${rotaApi}/search?nomeproduto=${categoria}`);
    const data = await response.json();
    console.log(data)
    console.log(data.produtos)
    return data.produtos
}

//Rota produtos Home
export async function getProductHome(categoria) {
    const response = await fetch(`${rotaApi}/produtos`);
    const data = await response.json();
    console.log(data.firstProduct)
    // console.log(data.firstProduct[0].descricao)
    // console.log(data.firstProduct[1].descricao)
    // console.log(data.secondProduct)
    return data.firstProduct
}
export async function getProductHomeSecond(categoria) {
    const response = await fetch(`https://api-n56x.onrender.com/v1/api/produtos`);
    const data = await response.json();
    // console.log(data.firstProduct)
    console.log(data.secondProduct)
    return data.secondProduct
}

export async function getProduct(ean) {
    const response = await fetch(`${rotaApi}/produtos/${ean}`);
    const data = await response.json();
    console.log(data)
    return data
}

export async function buscaProduto(produto) {
    const response = await fetch(`${rotaApi}/search?nomeproduto=${produto}`);

    const data = await response.json();
    console.log(data)
    return data
}