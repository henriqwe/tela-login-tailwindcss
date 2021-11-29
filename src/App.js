import React, { useState } from 'react';

function App() {

  const [formularioLogin, setFormularioLogin] = useState({email:"",password:""})

  function handleForm(input) {
    setFormularioLogin({ ...formularioLogin, [input.name]: input.value })
  }

  return (
    <main className='grid grid-cols-1 md:grid-cols-2 w-full h-screen'>
      <div className='w-full h-screen bg-gray-50 hidden items-center md:flex'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/600px-Tailwind_CSS_Logo.svg.png" alt="logo tailwind" className='h-44 w-44 m-auto'/>
      </div>

      <div className='grid grid-cols-1 w-full h-screen bg-blue-300 justify-center items-center'>

        <form action="/" method='post' className='m-auto grid-cols-1 md:w-1/2'>

          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/600px-Tailwind_CSS_Logo.svg.png" alt="logo tailwind" className='h-14 w-14 md:hidden'/>

          <input type="email" value={formularioLogin.email} name='email' autoComplete="email" placeholder='E-mail' className='bg-green-100 block mb-4 p-2 rounded shadow-lg w-full' onChange={(e) => { handleForm(e.target) }} required />

          <input type="password" value={formularioLogin.password} name='password' autoComplete="current-password" placeholder='Senha' className='bg-green-100 block mb-4 p-2 rounded shadow-lg w-full' onChange={(e) => { handleForm(e.target) }} required />

          <div className='md:grid md:grid-cols-2 md:items-center md:gap-2'>
            <div className='flex justify-between md:grid md:grid-row-2 mb-4 md:mb-0'>
              <a className='text-sm text-gray-900 md:mb-2 hover:underline' href='/#'>Esqueceu a senha?</a>
              <a className='text-sm text-gray-900 hover:underline' href='/#'>Criar conta</a>
            </div>
            <div className='md:grid-cols-1'>
              <button type='button' className='bg-blue-800 p-2 rounded text-white w-full hover:bg-blue-700  shadow-lg' >
                Acessar
              </button>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}

export default App;
