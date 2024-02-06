// LoginForm.js
'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { login, loginVerify } from '../api/api'; 


const LoginForm = () => {
 const router = useRouter();
 const [users, setUsers] = useState({
   email: '',
   senha: '',
 });
 const [showPassword, setShowPassword] = useState(false);

 const handleChange = (e) => {
   setUsers({ ...users, [e.target.name]: e.target.value });
 };

 const handleSubmit = async (e) => {
   e.preventDefault();

   try {
    
     const res = await login(users);
     console.log(res)
     var token = res.token
     console.log(token)
     localStorage.setItem('token', token);
     router.push('/')
   } catch (error) {
     alert(error.message);
     router.push('/users');
   }
 };

 return(
    <form onSubmit={handleSubmit} action="" className='flex flex-col w-full border border-[#ccc] max-w-lg items-left justify-center mx-auto p-20 bg-[#ccc] gap-2 h-screen'>
    <h1 className='w-full text-center'>Login</h1>
    <label htmlFor="">Login</label>
    <input type="email" name="email" value={users.email}   onChange={handleChange} id="" className='border border-[#ccc] p-2'/>

    <label htmlFor="">Senha</label>
    <input type={showPassword ? 'text' : 'password'} name="senha" value={users.senha} onChange={handleChange} id="" className='border border-[#ccc] p-2 cursor-pointer' />
     <label onClick={() => setShowPassword(!showPassword)}>
       {showPassword ? 'Esconder senha' : 'Mostrar senha'}
     </label>
    

    <input type="submit" value="Entrar"  className='border border-[#fff] mt-5 p-2 cursor-pointer'/>
   </form>
   )
}

export default LoginForm;
