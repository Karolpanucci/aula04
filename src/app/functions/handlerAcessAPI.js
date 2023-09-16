'use server'
let lista = [
    {
        nome: "karol",
        password:"1212",
        email:"karol@gmail.com",
        token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
    },
    {
        nome: "natasha",
        password:"1313",
        email:"marcelino@gmail.com",
        token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
    },
    {
        nome: "isabela",
        password:"1414",
        email:"isa@gmail.com",
        token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
    }
]

let filmes = [
    
    {
        codigo: 1 ,
        nome: "De volta pro futuro",
        estilo:"Ficção Cientifica",
        resumo:"k De Volta para o Futuro é um filme de comédia de costumes, com elementos de fantasia e sátira. O filme conta a história de Marty McFly, um adolescente que sonha em viver de música, mas é inseguro em relação aos seus talentos como guitarrista ",
       image:"https://s2.glbimg.com/EteQ8a0fL_WmsWbtAiQ4_Gm9IgI=/smart/e.glbimg.com/og/ed/f/original/2015/09/25/de-volta-para-o-futuro-foto-2.jpg"
    },
    {
        codigo: 2 ,
        nome: "alem da janela",
        estilo:"1212",
        resumo:"karol@gmail.com",
       image:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
    },
    {
        codigo: 3 ,
        nome: "karol",
        estilo:"1212",
        resumo:"karol@gmail.com",
       image:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
    },
    { codigo: 4 ,
        nome: "karol",
        estilo:"1212",
        resumo:"karol@gmail.com",
       image:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
    },
]

const getUserAuthenticated = (userlogin) => {
    let userAuth= {}; 
    lista.map((user)=>{
        if(user.email === userlogin.email && user.password === userlogin.password){
            userAuth= user
        }
    })
     return userAuth;


}

const getUsers = () =>{
    return lista;
        
}
const getFilme = () =>{
    return filmes;
        
}
export { getUsers, getUserAuthenticated, getFilme };