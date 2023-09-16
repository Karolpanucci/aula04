
export default async function ListUsers({users}){
    await new Promise((resolve) => setTimeout(resolve, 500));
    return(
        
<main className="grid grid-cols-4 ml-7 mr-7 gap-4 mt-8 ">

         {users?.map ((user)=>
     
             <div className='border border-gray-200 rounded-xl hover:shadow-2xl transition-shadow duration-300' >{user.estilo}</div>
          
          )}



    
            

        </main>





    )



}