"use client"
import React, { useState } from "react";
import { createContext } from "react";

export const CarrinhoContext = createContext();

export const CarrinhoProvider = ({ children }) => {
    const [carrinhoCont, setCarrinhoCont] = useState([])
    // console.log("SAvant")
    // const adicionarProduto = (novoProduto) => {
    //     const verificaProduto = carrinhoCont.some((ItemNoCarrinho) => {
    //         return ItemNoCarrinho.ean === novoProduto.ean;
    //       });
         
    //       if(!verificaProduto) {
    //         novoProduto.quantidade = 1 ;
    //         return setCarrinhoCont((carrinhoAntigo) => [
    //           ...carrinhoAntigo, novoProduto,
    //         ]) 
    //       }
         
    //       setCarrinhoCont((carrinhoAntigo) => carrinhoAntigo.reduce((accumulator, itemNoCarrinho) => {
    //         if(itemNoCarrinho.ean === novoProduto.ean) {
    //           accumulator.push({...itemNoCarrinho, quantidade: itemNoCarrinho.quantidade + 1});
    //         } else {
    //           accumulator.push(itemNoCarrinho);
    //         }
    //         return accumulator;
    //        }, []))
    // }

    function adicionarProduto(produtoNovo) {
      const copyCart = [...carrinhoCont]
      const verificaItem = copyCart.find((produto) => produto.ean === produtoNovo.ean)
      if(!verificaItem) {
        copyCart.push({ean: produtoNovo.ean, qtd: 1, nome:produtoNovo.nomeproduto, image: produtoNovo.image, valor: produtoNovo.valor})
      }else {
        verificaItem.qtd = verificaItem.qtd + 1
      }

      setCarrinhoCont(copyCart)
    }

    const removerProduto = (ean) => {
        setCarrinhoCont((carrinhoAntigo) => carrinhoAntigo.filter((itemNoCarrinho) => {
         return itemNoCarrinho.ean !== ean;
        }))
       }
    
    return (
    <CarrinhoContext.Provider value={{carrinhoCont, setCarrinhoCont, adicionarProduto, removerProduto}}>
        {children}
    </CarrinhoContext.Provider>)
};


// const adicionarProduto = (novoProduto) => {
//     const verificaProduto = carrinhoCont.some((ItemNoCarrinho) => {
//         return ItemNoCarrinho.ean === novoProduto.ean;
//       });
     
//       if(!verificaProduto) {
//         novoProduto.quantidade = 1 ;
//         return setCarrinhoCont((carrinhoAntigo) => [
//           ...carrinhoAntigo, novoProduto,
//         ]) 
//       }
     
//       setCarrinhoCont((carrinhoAntigo) => carrinhoAntigo.map((itemNoCarrinho) => {
//         if(itemNoCarrinho.ean === novoProduto.ean) {
//           itemNoCarrinho.quantidade += 1;
//         }
//         return itemNoCarrinho
//       }))
// }