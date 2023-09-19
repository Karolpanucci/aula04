import { getFilme } from "@/app/functions/handlerAcessAPI";
import { Suspense } from "react";
import ListUsers from "@/app/componente/ListUsers";
import Link from 'next/link';
import { Eye, Gem, LogOut } from 'lucide-react';
import '@/app/global.css';

export default function Dashboard() {
  const filmes = getFilme();

  return (
   
    <div className=' bg-slate-800 min-h-screen items-center justify-between'>
      <Suspense fallback={<p>carregando...</p>}>
      <header className="w-full bg-zinc-950">
      <div className="flex w-full h-28 items-center">
        <img
          className='mt-0 ml-4 sm:ml-10'
          src="/logo.png"
          width={100}
          height={100}
          alt="Picture of the author"
        />
        <div className="flex items-center ml-4 sm:ml-16">
          <div className="flex text-white">
            <p className="mt-3 sm:mt-0 ml-4 sm:ml-20 flex hover:text-[#C850C0]"> <a href="/pages/alterar">Alterar Usuario</a> </p>
          </div>
          <div className="flex text-white">
            <p className="mt-3 sm:mt-0 ml-4 sm:ml-20 flex hover:text-[#C850C0]"> <a href="/pages/registrar">Registar Novo Usuario</a>
</p>
          </div>
          <div className="flex text-white">
            <p className="mt-3 sm:mt-0 ml-4 sm:ml-20 flex hover:text-[#C850C0]"> Categorias </p>
          </div>
        </div>
        <button className="flex font-bold text-[#FFCC70] p-5 mt-3 ml-auto mr-4">
          <LogOut/>  <spam className='ml-3'>Sair</spam>
        </button>
        </div>

        </header>

      
        <h1 className="font-bold text-5xl ml-[35%] mt-8 text-white justify-center items-center">Seja Bem Vindo!!</h1>
        <h2 className="font-bold text-xl ml-[35%] mt-8 text-white justify-center items-center">Aqui temos Alguns dos nossos Usuarios</h2>
      <main className="grid grid-cols-1 md:grid-cols-4 ml-7 mr-7 gap-4 mt-8 ">
       
        {filmes.map((filme) => (
          <div
            key={filme.codigo}
            className='bg-zinc-950 rounded-xl shadow-2xl hover:shadow-2xl hover:shadow-black transition-shadow duration-300 bg-whit'
          >
      
            <div className="text-base text-white font-medium px-3 mt-3 ">{filme.nome}</div>
            <div className="text-[12px] m-3 mt-3 text-gray-400 text-justify">{filme.resumo}</div>
           
            <div className="text-xs text-cyan-700 um= px-3 mt-3 flex">
              <div className='flex '>
                <div className='w-[12px] h-[12px]'>
                  <Gem size={12} />
                </div>
                <div className=' ml-1'>
                  {filme.estilo}
                </div>
                <div className='  ml-16 text-gray-400 flex'>
                  <div className='w-[12px] h-[12px]'>
                    <Eye size={12} />
                  </div>
                  <div className=' ml-1'>
                    {filme.visu}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <button className="m-5 border border-cyan-500 text-base text-cyan-500 rounded-md w-full md:w-40 h-11 items-center hover:bg-cyan-500 hover:text-white">
                <Link href={filme.link}>VER DETALHES</Link>
              </button>
            </div>
          </div>
        ))}
      </main>
        
        
      </Suspense>

    </div>
  );
}
