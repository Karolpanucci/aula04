'use client'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

const FormTudo = () => {


  const handlerLogin = async (e) => {
    e.preventDefault();
  toast.error("AI MANO DEU CERTOOOO !!😊")
  }
  return (
    <div>
      <h1>Registar</h1>
      <form onSubmit={handlerLogin}>
      <input
          placeholder='NOME'
          type="nome">
        </input>
        <input
          placeholder='E-mail'
          type="email">
        </input>
        <input
          placeholder='Senha'
          type='password'>
        </input>
        <button>Entrar</button>
        <ToastContainer/>
      </form>
    </div>
  )
}

export default FormTudo;
