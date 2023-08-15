import { getUsers } from "@/app/functions/handlerAcessAPI";

export default async function Dashboard() {
   const lista = getUsers()
    return (
        <div>
            <h2> todos usuarios cadastrados</h2>
         {lista.map ((user)=>{
               <p>{user.nome}</p>


         })}
            
        </div>
    );
};