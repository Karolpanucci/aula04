import { getUsers } from "@/app/functions/handlerAcessAPI";
import { Suspense } from "react";
import ListUsers from "@/app/componente/ListUsers";

export default async function Dashboard() {
    const lista = getUsers()
    return (
        <div>
            <Suspense fallback={<p>carregando...</p>}>
                <ListUsers users={lista} />
                <a href="/pages/alterar">Altera ai pow</a>
                <a href="/pages/registrar">Registra ai mano</a>
            </Suspense>


        </div>
    );
};