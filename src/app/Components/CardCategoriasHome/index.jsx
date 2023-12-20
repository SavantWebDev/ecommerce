import Image from 'next/image'
import React from 'react'
import arrow from '../../../../public/images/assets/arrow.svg'

const CategoriasHome = ({categoria,imagem }) => {
  return (
    <div className={`${imagem ? 'bg-cover bg-center' : ''} rounded-lg`} style={{backgroundImage: `url(${imagem})`}}>
        <div>{categoria}</div>
        <button><Image src={arrow} /></button>
    </div>
  )
}

export default CategoriasHome