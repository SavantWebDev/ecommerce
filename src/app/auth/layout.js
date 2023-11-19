import React from 'react'
import Image from 'next/image'

export default function LayoutAuth({children}){
  return (
        
        <section className="flex w-full h-full gap-2 overflow-none  ">
            <div className="w-[40%] h-screen bg-login bg-cover bg-center  ">

            </div>
            
            <div className="sd w-[60%] h-full flex flex-col items-center justify-center overflow-auto ">
              
              {children}
              
            </div>
        </section>
    
    
  )
}
