import React from 'react'
import Image from 'next/image'

export default function LayoutAuth({children}){
  return (
        
        <section className="flex w-full gap-2  h-screen overflow-hidden">
          
            <div className="w-[40%] h-auto bg-login bg-no-repeat bg-cover">

            </div>
            
            <div className="w-[60%] overflow-auto">
              
              {children}
              
            </div>
        </section>
    
    
  )
}
