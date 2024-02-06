"use client"
import React, { createContext } from "react";
import { useState } from "react";

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [isOpenModal,setIsOpenMOdal] = useState(false);
  const [produto, setProduto] = useState();
  const [quantidadeModal, setQuantidadeModal] = useState();


  return <ModalContext.Provider value={{isOpenModal,setIsOpenMOdal,produto, setProduto,quantidadeModal, setQuantidadeModal}}>{children}</ModalContext.Provider>;
};

export default ModalContext;