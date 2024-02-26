"use client";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { delProdutoLogado, enviaProdutoLogado } from "../../api/apiEcommerce";
import { UserContext } from "./UsuarioContext";

export const CarrinhoContext = createContext();

export const CarrinhoProvider = ({ children }) => {
  // const [carrinhoSalvo, setCarrinhoSalvo] = useState(localStorage.getItem("carrinho"));
  // const [carrinhoLocalStorage, setCarrinhoLocalStorage] = useState(() => {
  //   return carrinhoSalvo ? JSON.parse(carrinhoSalvo) : [];
  // });

  const [carrinhoSalvo, setCarrinhoSalvo] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("carrinho");
    }
    return null;
  });

  const [carrinhoLocalStorage, setCarrinhoLocalStorage] = useState(() => {
    if (typeof window !== "undefined") {
      return carrinhoSalvo ? JSON.parse(carrinhoSalvo) : [];
    }
    return [];
  });

  const [carrinhoApi, setCarrinhoApi] = useState([]);
  const [usuarioLogado, setUsuarioLogado] = useState();
  const [timerBtn, setTimerBtn] = useState(null);
  const [totalCarrinho, setTotalCarrinho] = useState();
  const [SubTotalCarrinho, setSubTotalCarrinho] = useState();
  const { checkToken } = useContext(UserContext);

  useEffect(() => {
    const carrinhoDoStorage = localStorage.getItem("carrinho");
    setCarrinhoSalvo(carrinhoDoStorage);
    setCarrinhoLocalStorage(
      carrinhoDoStorage ? JSON.parse(carrinhoDoStorage) : []
    );
  }, []);

  useEffect(() => {
    localStorage.setItem("carrinho", JSON.stringify(carrinhoLocalStorage));
  }, [carrinhoLocalStorage]);
  useEffect(() => {
    return () => {
      if (timerBtn) {
        clearTimeout(timerBtn);
      }
    };
  }, [timerBtn]);

  const contadorCarrinho = useCallback(() => {
    return usuarioLogado
      ? carrinhoApi.length === undefined || carrinhoApi.length === 0
        ? "0"
        : carrinhoApi.length
      : carrinhoLocalStorage.length;
  }, [usuarioLogado, carrinhoApi, carrinhoLocalStorage]);

  useEffect(() => {
    contadorCarrinho;
  }, [contadorCarrinho, carrinhoApi, carrinhoLocalStorage]);

  let quantidadeprodutoAdd = {};
  let clickContador = {};
  let timers = {};

  const iniciaContador = (ean, quantidade) => {
    if (!clickContador[ean]) {
      clickContador[ean] = 0;
    }

    if (timers[ean]) {
      clearTimeout(timers[ean]);
    }

    quantidadeprodutoAdd[ean] = quantidade + 1;
    clickContador[ean]++;

    const productData = {
      eanproduto: ean,
      qnt: quantidadeprodutoAdd[ean],
    };

    const atualizaCarrinho = (eanproduto, novaQuantidade) => {
      setCarrinhoApi(
        carrinhoApi.map((produto) =>
          produto.eanproduto === eanproduto
            ? { ...produto, qnt: novaQuantidade }
            : produto
        )
      );
    };

    atualizaCarrinho(productData.eanproduto, productData.qnt);

    timers[ean] = setTimeout(() => {
      enviaProdutoLogado({ eanproduto: ean, qnt: clickContador[ean] });
      clickContador[ean] = 0;
    }, 5000); // Debounce de 5 segundos
  };

  //====================================
  let quantidadeprodutoDel = {};
  let clickContadorDel = {};
  let timersDel = {};

  const iniciaContadorDel = (ean, quantidade) => {
    if (!clickContadorDel[ean]) {
      clickContadorDel[ean] = 0;
    }

    if (timersDel[ean]) {
      clearTimeout(timersDel[ean]);
    }

    quantidadeprodutoDel[ean] = quantidade + 1;
    clickContadorDel[ean]++;

    const productData = {
      eanproduto: ean,
      qnt: quantidadeprodutoDel[ean],
    };

    const atualizaCarrinho = (eanproduto) => {
      setCarrinhoApi(
        carrinhoApi.map((produto) =>
          produto.eanproduto === eanproduto
            ? { ...produto, qnt: produto.qnt - 1 }
            : produto
        )
      );
    };

    atualizaCarrinho(productData.eanproduto);

    timers[ean] = setTimeout(() => {
      enviaProdutoLogado({ eanproduto: ean, qnt: -clickContadorDel[ean] });
      clickContadorDel[ean] = 0;
    }, 5000); // Debounce de 5 segundos
  };

  // useEffect(() => {
  //   setUsuarioLogado(verificaLogin());
  // }, []);

  useEffect(() => {
    async function buscaCarrinhoUsuario() {
      const token = localStorage.getItem("token");
      console.log("ADSADASDADASDASDADADAd");
      const resultado = await checkToken();
      if (token) {
        console.log("buscaCArrinhoF", resultado);
        console.log("buscaCArrinhoF", resultado.carrinho);
        setCarrinhoApi(resultado.carrinho);
      }
    }
    buscaCarrinhoUsuario();
  }, [checkToken]);

  // useEffect(() => {
  //   async function fetchCarrinhoUsuario() {
  //     const resultado = await checkToken();
  //     if (usuarioLogado) {

  //       localStorage.setItem(
  //         "carrinhoLogado",
  //         JSON.stringify(resultado.carrinho)
  //       );
  //       return setCarrinhoApi(resultado.carrinho);
  //     }
  //     console.log("carrinho aqui", carrinhoApi);
  //     // console.log("carrinho aqui", resultado.carrinho);
  //   }
  //   fetchCarrinhoUsuario();
  // }, [usuarioLogado]);

  // async function verCarrinhoUsuario() {
  //   const resultado = await checkToken();
  //   if (usuarioLogado) {

  //     localStorage.setItem(
  //       "carrinhoLogado",
  //       JSON.stringify(resultado.carrinho)
  //     );
  //     setCarrinhoApi(resultado.carrinho);
  //   }
  //   console.log("carrinho aqui", carrinhoApi);
  //   // console.log("carrinho aqui", resultado.carrinho);
  // }

  async function verificaCarrinhoUsuario() {
    const token = localStorage.getItem("token");
    const resposta = await fetch(
      "https://api-n56x.onrender.com/v1/api/usuario",
      {
        cache: "no-store",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token} `,
        },
        // Token estático
        //  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlhdCI6MTcwMDMxMzc1MSwiZXhwIjoxNzAwNDAwMTUxfQ.DudgCvTiR7K2GkP9zu-5oIXAYH26mb8dAS-5Vh-q2EM
      }
    );
    const dados = await resposta.json();
    console.log("data AQUI", dados);
    if (usuarioLogado) {
      localStorage.setItem("carrinhoLogado", JSON.stringify(dados.carrinho));
      console.log("carrinho atualizado apos salvar", dados.carrinho);
      return setCarrinhoApi(dados.carrinho);
    }
  }
  // console.log("carrinho aqui", resultado.carrinho);

  // function loadCarrinhoFromLocalStorage() {
  //   const carrinhoApiLS = localStorage.getItem("carrinhoApi");
  //   if (carrinhoApiLS) {
  //     setCarrinhoApi(JSON.parse(carrinhoApiLS));
  //   }
  // }

  // useEffect(() => {
  //   loadCarrinhoFromLocalStorage();
  // }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUsuarioLogado(true);
    } else {
      setUsuarioLogado(false);
    }
  }, []);

  async function adicionarProdutoLocalStorage(
    produtoNovo,
    quantidade,
    variacao
  ) {
    // const index = carrinhoLocalStorage.findIndex(
    //   (produto) => produto.eanproduto === produtoNovo.ean
    //  );

    //  if (index === -1) {
    //   // O produto não existe no carrinho, então adicione-o
    //   carrinhoLocalStorage.push({
    //     eanproduto: produtoNovo.ean,
    //     qnt: quantidade,
    //     nomeproduto: produtoNovo.nomeproduto,
    //     image: produtoNovo.image,
    //     valor: produtoNovo.valor,
    //     variacao: variacao,
    //   });
    //  } else {
    //   // O produto já existe no carrinho, então atualize a quantidade
    //   carrinhoLocalStorage[index].qnt += quantidade;
    //  }

    //  setCarrinhoLocalStorage(carrinhoLocalStorage);
    //  salvarCarrinhoLocalStorage(carrinhoLocalStorage);

    //VERSION MAP
    const produtoadd = carrinhoLocalStorage.map((produto) => {
      if (produto.eanproduto === produtoNovo.ean) {
        return {
          ...produto,
          qnt: produto.qnt + quantidade,
        };
      }
      return produto;
    });

    if (!produtoadd.some((produto) => produto.eanproduto === produtoNovo.ean)) {
      produtoadd.push({
        eanproduto: produtoNovo.ean,
        qnt: quantidade,
        nomeproduto: produtoNovo.nomeproduto,
        image: produtoNovo.image,
        valor: produtoNovo.valor,
        pix: produtoNovo.valor_pix,
        variacao: variacao,
      });
      console.log(produtoadd);
    }

    setCarrinhoLocalStorage(produtoadd);
    salvarCarrinhoLocalStorage(produtoadd);

    // const copyCart = [...carrinhoLocalStorage];
    // const verificaItem = copyCart.find(
    //   (produto) => produto.eanproduto === produtoNovo.ean
    // );
    // if (!verificaItem) {
    //   copyCart.push({
    //     eanproduto: produtoNovo.ean,
    //     qnt: quantidade,
    //     nomeproduto: produtoNovo.nomeproduto,
    //     image: produtoNovo.image,
    //     valor: produtoNovo.valor,
    //     variacao: variacao,
    //   });
    // } else {
    //   verificaItem.qnt = verificaItem.qnt + quantidade;
    // }

    // setCarrinhoLocalStorage(copyCart);
    // salvarCarrinhoLocalStorage(copyCart);
  }

  // useEffect(() => {
  //   salvarCarrinhoLogado(carrinhoApi);
  // }, [carrinhoApi]);

  useEffect(() => {
    salvarCarrinhoLocalStorage(carrinhoLocalStorage);
  }, [carrinhoLocalStorage]);

  function salvarCarrinhoLocalStorage(carrinho) {
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
  }

  const removerProduto = (ean) => {
    console.log(ean);
    setCarrinhoLocalStorage((carrinhoAntigo) =>
      carrinhoAntigo.filter((itemNoCarrinho) => {
        console.log(itemNoCarrinho.eanproduto);
        console.log(itemNoCarrinho.ean);
        console.log(ean);
        return itemNoCarrinho.eanproduto !== ean;
      })
    );

    if (usuarioLogado) {
      delProdutoLogado(ean);
      setCarrinhoApi((carrinhoAntigo) =>
        carrinhoAntigo.filter((itemNoCarrinho) => {
          console.log(carrinhoAntigo);
          console.log(itemNoCarrinho.eanproduto);
          console.log(ean);
          return itemNoCarrinho.eanproduto !== ean;
        })
      );
    }
  };
  //a

  function addQtdCarrinho(ean, quantidade) {
    setCarrinhoLocalStorage(
      carrinhoLocalStorage.map((item) => {
        if (item.eanproduto === ean) {
          const add = quantidade + 1;
          return { ...item, qnt: add };
        }
        return item;
      })
    );

    if (usuarioLogado) {
      // console.log("EAN USUARIO LOGADO",ean)
      // console.log("QUANTIDADE USUARIO LOGADO",quantidade)
      iniciaContador(ean, quantidade);
    }
  }

  function removeQtdCarrinho(ean, quantidade) {
    if (quantidade === 1) {
      setCarrinhoLocalStorage((carrinhoAntigo) =>
        carrinhoAntigo.filter(
          (itemNoCarrinho) => itemNoCarrinho.eanproduto !== ean
        )
      );

      if (usuarioLogado) {
        delProdutoLogado(ean);
        setCarrinhoApi((carrinhoAntigo) =>
          carrinhoAntigo.filter(
            (itemNoCarrinho) => itemNoCarrinho.eanproduto !== ean
          )
        );
      }
    } else {
      // Caso contrário, apenas diminua a quantidade
      setCarrinhoLocalStorage(
        carrinhoLocalStorage.map((item) => {
          if (item.eanproduto === ean) {
            const remove = quantidade - 1;
            return { ...item, qnt: remove };
          }
          return item;
        })
      );

      if (usuarioLogado && quantidade > 1) {
        // Chama iniciaContadorDel apenas se a quantidade for maior que 1
        iniciaContadorDel(ean, quantidade);
      }

      // if (usuarioLogado) {
      //   iniciaContadorDel(ean, quantidade);
      // }
    }
  }

  const [carrinhoApiLS, setCarrinhoApiLs] = useState([]);

  async function adicionarProdutoApi(produtoNovo, quantidade, variacao) {
    const copyCart = [...carrinhoApi];

    const verificaItem = copyCart.find(
      (produto) => produto.eanproduto === produtoNovo.ean
    );
    console.log("ean produto novo", produtoNovo);

    if (!verificaItem) {
      const novoItem = {
        eanproduto: produtoNovo.ean,
        qnt: quantidade,
        nomeproduto: produtoNovo.nomeproduto,
        image: produtoNovo.image,
        pix: produtoNovo.valor_pix,
        valor: produtoNovo.valor,
        variacao: variacao,
      };

      setCarrinhoApi([...carrinhoApi, novoItem]);
      enviaProdutoLogado(novoItem);
    } else {
      const quantidadeAnterior = verificaItem.qnt;
      const itemAtualizado = {
        ...verificaItem,
        // qnt: verificaItem.qnt + quantidade
        qnt: verificaItem.qnt + quantidade - quantidadeAnterior,
      };
      const itemAtualizadoCarrinho = {
        ...verificaItem,
        qnt: verificaItem.qnt + quantidade,
        // qnt: (verificaItem.qnt + quantidade)- quantidadeAnterior
      };

      setCarrinhoApi(
        carrinhoApi.map((produto) =>
          produto.eanproduto === produtoNovo.ean
            ? itemAtualizadoCarrinho
            : produto
        )
      );
      enviaProdutoLogado(itemAtualizado);
    }
  }

  // useEffect(() => {
  //   enviaProdutoLogado(carrinhoApi);
  //  }, [carrinhoApi]);

  // useEffect(() => {
  //   console.log(carrinhoApi);
  //   setCarrinhoApiLs(carrinhoApi);
  //   console.log("carrinho teste", carrinhoApiLS);
  // }, [carrinhoApi]);

  console.log("Estado do Login:", usuarioLogado);
  // console.log("Estado Carrinho:", carrinhoApi);
  //envia carrinho para api

  useEffect(() => {
    function enviarCarrinhoDeslogadoParaApi() {
      // console.log(carrinhoLocalStorage.length);
      // console.log("🚀 ➽ file: CarrinhoContext.jsx:451  ➽ enviarCarrinhoDeslogadoParaApi  ➽ carrinhoLocalStorage.length ⏩" , carrinhoLocalStorage.length)
      // console.log(carrinhoLocalStorage);
      // console.log("🚀 ➽ file: CarrinhoContext.jsx:453  ➽ enviarCarrinhoDeslogadoParaApi  ➽ carrinhoLocalStorage ⏩" , carrinhoLocalStorage)
      if (usuarioLogado && carrinhoLocalStorage.length > 0) {
        enviaProdutoLogado(carrinhoLocalStorage);
        // console.log("delete carrinho");
        // console.log("🚀 ➽ file: CarrinhoContext.jsx:457  ➽ enviarCarrinhoDeslogadoParaApi  ➽⏩" , "delete carrinho")
        localStorage.removeItem("carrinho");
        // window.location.reload();s
      }
    }
    enviarCarrinhoDeslogadoParaApi();
  }, [usuarioLogado, carrinhoLocalStorage]);

  useEffect(() => {
    function calculaValor() {
      // console.log("Carrinho Produtos", carrinhoApi);
      if (usuarioLogado) {
        let total = 0;
        let subtotal = 0;
        for (let i = 0; i < carrinhoApi.length; i++) {
          const valor = converterNumero(carrinhoApi[i].valor_pix);
          const ValorSubtotal = converterNumero(carrinhoApi[i].valor);
          const quantidade = carrinhoApi[i].qnt;
          const subResultado = ValorSubtotal * quantidade;
          const resultado = valor * quantidade;
          subtotal = subtotal + subResultado;
          total = total + resultado;
          // console.log(total.toFixed(2));
        }
        // console.log("Valor Total:", total.toFixed(2));
        setSubTotalCarrinho(subtotal.toFixed(2));
        setTotalCarrinho(total.toFixed(2));
      } else {
        let total = 0;
        let subtotal = 0;
        for (let i = 0; i < carrinhoLocalStorage.length; i++) {
          if (carrinhoLocalStorage[i] && carrinhoLocalStorage[i].pix) {
            const valor = carrinhoLocalStorage[i].pix;
            console.log("🚀 ➽ file: CarrinhoContext.jsx:512  ➽ calculaValor  ➽ valor ⏩" , valor)
            const ValorSubtotal = converterNumero(
              carrinhoLocalStorage[i].valor
            );
            const quantidade = carrinhoLocalStorage[i].qnt;
            const resultado = valor * quantidade;
            const subResultado = ValorSubtotal * quantidade;
            total = total + resultado;
            subtotal = subtotal + subResultado;
          }
        }
        console.log("Valor SUbTotal:", subtotal.toFixed(2));
        console.log("Valor Total:", total.toFixed(2));
        setTotalCarrinho(total.toFixed(2));
        setSubTotalCarrinho(subtotal.toFixed(2));
      }
    }
    calculaValor();
  }, [carrinhoApi, carrinhoLocalStorage, usuarioLogado]);

  function converterNumero(num) {
    return parseFloat(num.replace(",", "."));
  }

  // calculaValor()

  return (
    <CarrinhoContext.Provider
      value={{
        // exibirCarrinhoLS,
        // setExibirCarrinhoLS,
        carrinhoLocalStorage,
        setCarrinhoLocalStorage,
        adicionarProdutoLocalStorage,
        adicionarProdutoApi,
        setCarrinhoApi,
        totalCarrinho,
        SubTotalCarrinho,
        // exibirCarrinhoLocalStorage,
        removerProduto,
        addQtdCarrinho,
        removeQtdCarrinho,
        usuarioLogado,
        carrinhoApi,
        carrinhoApiLS,
        setCarrinhoApiLs,
        contadorCarrinho,
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
};
