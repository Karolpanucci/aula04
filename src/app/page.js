'use client'
import '@/app/global.css'
import { useState } from "react";
import handlerAcessUser from "./functions/handlerAcess"
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export default function Login() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const { push, refresh } = useRouter();

  const handlerLogin = async (e) => {
    e.preventDefault();
    try {
     const userAuth= await handlerAcessUser(user);
     if(userAuth.token === undefined){
      toast.error("erro no E-mail ou senha");
     }
      push('/pages/dashboard');
    } catch {
      toast.error("erro na apliação")
    }
  }
  return (
    < div className=' bg-gradient-to-tl  from-gray-900 to-gray-800 w-screen h-screen flex justify-center items-center '>
    <main className='w-1/2 h-[500px] bg-zinc-950 rounded-3xl flex'> 
      <main className=' basis-5/12 flex flex-col items-center text-white'>
          <h1 className=' font-sans font-bold  text-3xl text-white my-12'>
            Faça seu Login
           <span className=' inline-block w-3 h-3 bg-white rounded-full ml-2 bg-gradient-to-tr from-[#4158D0] via-[#C850C0] via-46% to-[#FFCC70] '></span>
          </h1>
          <form onSubmit={handlerLogin} className='flex flex-col'>
            <label className=' flex flex-col'>
              Email
            </label>
            <input
              className=''
              placeholder='E-mail'
              type="email"
              onChange={(e) => { setUser({ ...user, email: e.target.value }) }}>
            </input>
            <label>
              Senha
            </label>
            <input
              placeholder='Senha'
              type='password'
              onChange={(e) => { setUser({ ...user, password: e.target.value }) }}>
            </input>
            <a>Esqueci minha senha?</a>
            <button>Entrar</button>
            <a>Ainda na possuo cadastro</a>
            <ToastContainer/>
          </form>
        
      </main>
      <main> 
            
      </main>
      
    </main>
    </ div>
  )
}
