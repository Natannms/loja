
import { useNavigate } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
export default function Checkout(props: any) {

    const cart = props.cart;
    const total = props.total;
    return (
        <div className="mt-3 sm:mt-0 sm:ml-3">
            <button onClick={() => {
                console.log(cart)
                let message = 'Olá Nery Imports, tenho interesse no seguintes produtos:';
                cart.forEach((item: any) => {
                    message += `\n [ nome: ${item.name} / ID:${item.id} ] `
                })
                message += `\nTotal aproximado do site: R$${total}   `
                message += `\nPor favor, entre em contato comigo, para mais informações.`
                window.open(`https://api.whatsapp.com/send?phone=553171794589&text=${message}`)
            }} className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white hover:text-black bg-green-700 hover:bg-green-200 md:py-4 md:text-lg md:px-10"> Finalizar compra  <FaWhatsapp className="ml-5"/></ button>
        </div>
    )
}