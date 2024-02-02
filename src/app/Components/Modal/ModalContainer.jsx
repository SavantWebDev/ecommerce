import React, { useContext, useState } from 'react'
import { CarrinhoContext } from '../context/CarrinhoContext';
import ModalCard from './ModalCard';

const ModalContainer = () => {
    const {
        carrinhoLocalStorage,
        setCarrinhoLocalStorage,
        adicionarProdutoLocalStorage,
        adicionarProdutoApi,
        setCarrinhoApi,
     } = useContext(CarrinhoContext);
     const [isOpen, setIsOpen] = useState(false);
     const [produto, setProduto] = useState(null);
     const [qnt, setQnt] = useState(1);

  return (
    <ModalCard 
    isOpen={isOpen}
    setOpen={setIsOpen}
    produto={produto}
    qnt={qnt}
    />
  )
}

export default ModalContainer