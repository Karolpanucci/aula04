import { getUsers } from "@/app/functions/handlerAcessAPI";
import { Suspense } from "react";
import ListUsers from "@/app/componente/ListUsers";

export default async function Dashboard() {
    const lista = getUsers()
    return (
        <div>
            <Suspense fallback={<p>carregando...</p>}>
                <ListUsers users={lista} />

            </Suspense>


        </div>
    );
};