// var rotaApi = "http://45.188.156.17:5464/v1/api"
var rotaApi = "http://20.197.251.208/v1/api";

// Rota Categorias
export async function getCategory() {
  const response = await fetch(`${rotaApi}/categorias`);
  const data = await response.json();
  // console.log(data.categorias)
  return data.categorias;
}

// Rota Produtos da Categoria
export async function getCategoryProduct(categoria) {
  const response = await fetch(`${rotaApi}/search?nomeproduto=${categoria}`);
  const data = await response.json();
  console.log(data);
  console.log(data.produtos);
  return data;
}

//Rota produtos Home
export async function getProductHome(categoria) {
  const response = await fetch(`${rotaApi}/produtos`);
  const data = await response.json();
  console.log(data.firstProduct);
  // console.log(data.firstProduct[0].descricao)
  // console.log(data.firstProduct[1].descricao)
  // console.log(data.secondProduct)
  return data.firstProduct;
}

export async function getProductHomeTeste(categoria) {
  const response = await fetch(`${rotaApi}/maisvendidos`);
  const data = await response.json();
  console.log(data.mais_vendidos);
  // console.log(data.firstProduct[0].descricao)
  // console.log(data.firstProduct[1].descricao)
  // console.log(data.secondProduct)
  return data.mais_vendidos;
}

export async function getProductHomeSecond(categoria) {
  const response = await fetch(`http://20.197.251.208/v1/api/produtos`);
  const data = await response.json();
  // console.log(data.firstProduct)
  console.log(data.secondProduct);
  return data.secondProduct;
}

export async function getProduct(ean) {
  const response = await fetch(`${rotaApi}/produtos/${ean}`);
  const data = await response.json();
  console.log(data);
  return data;
}

export async function buscaProduto(produto) {
  const response = await fetch(`${rotaApi}/search?nomeproduto=${produto}`);

  const data = await response.json();
  console.log(data);
  return data;
}

export async function buscaProdutoPagina(produto, pagina) {
  const response = await fetch(
    `${rotaApi}/search?nomeproduto=${produto}&page=${pagina}`
  );
  console.log(response);
  const data = await response.json();
  console.log(data);
  return data.produtos;
}

export const enviaProdutoLogado = async (produtos) => {
  const token = localStorage.getItem("token");
  let produtosArray;
  if (Array.isArray(produtos)) {
    produtosArray = produtos.map((item) => ({
      ean: item.eanproduto, // Certifique-se de usar a propriedade correta aqui
      qnt: item.qnt,
    }));
  } else {
    produtosArray = [{ ean: produtos.eanproduto, qnt: produtos.qnt }];
  }

  console.log(produtosArray);
  console.log(produtos);
  console.log(token);
  // console.log(ean)
  // console.log(qnt)
  try {
    const response = await fetch("http://20.197.251.208/v1/api/card", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ product: produtosArray }),
    });

    if (!response.ok) {
      throw new Error(`erro status: ${response.status}`);
    } else {
      const data = await response.json();
      console.log(data);
    }
  } catch (error) {
    console.error(" error", error);
  }
};

export const delProdutoLogado = async (ean) => {
  const token = localStorage.getItem("token");
  console.log(token);
  console.log(ean);
  try {
    const response = await fetch(
      `http://20.197.251.208/v1/api/card/delprod/${ean}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`erro status: ${response.status}`);
    } else {
      const data = await response.json();
      console.log(data);
    }
  } catch (error) {
    console.error(" error", error);
  }
};
export async function TextBannerHome() {
  const response = await fetch("http://20.197.251.208/v1/api/banners");
  const data = await response.json();

  if (response.ok) {
    console.log("banner test", data);
    return data;
  } else {
    throw new Error("Erro ao enviar a mensagem.");
  }
}
