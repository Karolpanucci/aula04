import { getFilme } from "@/app/functions/handlerAcessAPI";
import { Suspense } from "react";
import ListUsers from "@/app/componente/ListUsers";
import Link from 'next/link';
import '@/app/global.css';

export default function Dashboard() {
  const filmes = getFilme();

  return (
    <div className=' w-screen h-screen'>

      <nav className="flex h-14 w-full bg-zinc-950"></nav>

      <Suspense fallback={<p>carregando...</p>}>

        <main className="grid grid-cols-4 ml-7 mr-7 gap-4 mt-8">
          {filmes.map((filme) => (
            <div
              key={filme.codigo}
              className='border border-gray-200  bg-zinc-950  rounded-xl hover:shadow-2xl  transition-shadow duration-300'
            >
              <div className="w-60 h-60 mx-auto mt-8">
                <img className="rounded-md" src={filme.image} alt={filme.nome} />
              </div>
              <div className="text-base text-white px-4 mt-2 font-medium text-center">{filme.nome}</div>
              <div className="text-xs text-white px-4 mt-5 text-center">{filme.resumo}</div>
              <div className="flex justify-center">
                <button className="m-10 border border-cyan-500 text-base text-cyan-500 rounded-md w-44 h-11 items-center hover:bg-cyan-500 hover:text-white">
                  Ver mais
                </button>
              </div>
            </div>
          ))}
        </main>

        <a href="/pages/alterar">Altera ai pow</a>
        <a href="/pages/registrar">Registra ai mano</a>

      </Suspense>

    </div>
  );
}
