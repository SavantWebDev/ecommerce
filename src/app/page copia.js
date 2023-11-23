
import { setCookie } from "cookies-next"

import { nextAuthOptions } from "./api/auth/[...nextauth]/route"

// export async function tokenAuthorize(token){
//   const responseJwT = await fetch('https://api-n56x.onrender.com/v1/api/jwt-teste', {
//     method: 'GET',
//     headers:{
//         'Content-type': 'application/json',
//         'Authorization': `Bearer ${token}`
//     },
//   })
  
//   const dataJwT = await responseJwT.json()
//   if(dataJwT && responseJwT.ok){ 
//     console.log(dataJwT) 
    
//     return dataJwT
//   }else{
//     return null
//   }
//  }
 
 export default async function Home() {

  return (
    <main>
      <h1>Page home</h1>
    </main>
  )
 }