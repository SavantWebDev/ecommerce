'use client'
import { useState } from 'react';

const LoginForm = () => {
 const [users, setUsers] = useState({
   name: '',
   email: '',
   message: '',
 });

 const handleChange = (e) => {
   setUsers({ ...users, [e.target.name]: e.target.value });
 };

 const handleSubmit = async (e) => {
   e.preventDefault();

   const response = await fetch('https://api-n56x.onrender.com/v1/api/login', {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json',
      //  'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlhdCI6MTcwMDI2NDg5MSwiZXhwIjoxNzAwMzUxMjkxfQ.e000rxj1FZB-oebwrattd994_BHcKPJndTOKvNJLPoY'
     },
     body: JSON.stringify(users),
   });

   if (response.ok) {
    var res = await response.json()
     console.log(res.token)
   } else {
     alert('Ocorreu um erro ao enviar a mensagem.');
   }
 };

   return(
    <form onSubmit={handleSubmit} action="" className='flex flex-col w-full border border-[#ccc] max-w-lg items-left justify-center mx-auto p-20 bg-[#ccc] gap-2 h-screen'>
    <h1 className='w-full text-center'>Login</h1>
    <label htmlFor="">Login</label>
    <input type="email" name="email" value={users.email}   onChange={handleChange} id="" className='border border-[#ccc] p-2'/>

    <label htmlFor="">Senha</label>
    <input type="password" name="senha" value={users.senha}   onChange={handleChange} id="" className='border border-[#ccc] p-2' />

    <input type="submit" value="Entrar"  className='border border-[#fff] mt-5 p-2 cursor-pointer'/>
   </form>
   )
  
}

export default LoginForm