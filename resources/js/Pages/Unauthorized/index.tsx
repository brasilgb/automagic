import React from 'react'
import { MdLockPerson } from "react-icons/md"

type Props = {}

const Unauthorized = (props: Props) => {
  return (
    <main className="h-screen flex flex-col items-center justify-center bg-blue-secundary">
        <div className="w-5/12 bg-gray-50 border-2 border-white rounded-md shadow-md">
        <div className="py-10 flex items-center">
            <div className="text-red-primary">
            <MdLockPerson size={200} />
            </div>
            <div className="px-8">
                <h1 className="text-4xl text-center mb-4 uppercase font-bold">Desculpe!</h1>
                <p className="text-xl text-center">Você não têm autorização para acessar esta página. Porfavor cheque suas credenciais de acesso ou entre em contato com o administrador!</p>
            </div>
        </div>
        </div>
    </main>
  )
}

export default Unauthorized