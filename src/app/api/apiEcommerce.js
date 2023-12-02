// Rota Categorias
export async function getCategory() {
    const response = await fetch("https://api-n56x.onrender.com/v1/api/categorias")
    const data = await response.json();
    // console.log(data.categorias)
    return data.categorias;
}

// Rota Produtos da Categoria
export async function getCategoryProduct(categoria) {
    const response = await fetch(`https://api-n56x.onrender.com/v1/api/search?nomeproduto=${categoria}`);
    const data = await response.json();
    console.log(data)
    return data
}