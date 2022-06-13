import { useEffect, useState } from "react";
import { FaOpencart } from "react-icons/fa";
import Checkout from "../components/Buttons/Checkout";
import RemoveToCart from "../components/Buttons/RemoveToCart";

export default function Cart() {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    function getCart() {
        const cart = JSON.parse(localStorage.getItem("cart") || "[]");
        setCart(cart);
        console.log('cart', cart)
        const total = cart.reduce((total:any, item:any) => {
            return total + item.price;
        }, 0);
        console.log('total', total)
        setTotal(total);
    }

    useEffect(() => {
        getCart();
    }, []);
    return (
        <div className="Cart bg-blue-900 flex items-center flex-col w-full h-full">
           <div className="box bg-white flex items-center flex-col p-6 w-10/12 mt-10">
                <h1 className="text-2xl text-gray-900 flex justify-around"><strong>Meu carrinho</strong> <FaOpencart className="ml-9 text-4xl"/></h1>
                {
                    cart.map((item: any) => {
                        return (
                                <div className="cardItem flex flex-row justify-between mt-32 border-t-2 w-8/12">
                                    <div className="flex flex-row  rounded-tl rounded-bl  w-10/12">
                                        <img width="100" className="mr-10 rounded-tl rounded-bl" src={item.imageSrc} alt={item.imageAlt} />
                                        <div className="details flex flex-col items-center justify-around">
                                            Produto : {item.name},<br />
                                            Descrição curta: {item.short_description},<br />
                                            Quantidade: 1 <br />
                                        </div>
                                    </div>
                                    <div className="left flex flex-col justify-between p-4">
                                        <p className="text-gray-900 text-xl font-bold mb-10">{item.price.toLocaleString("pt-BR", {style:"currency", currency:"BRL"})}</p>
                                        <RemoveToCart item={item}/>
                                    </div>
                                </div>
                           
                        )
                    })
                }
           </div>
           <div className="subtotal flex flex-col items-center w-10/12 bg-white p-2 border rounded m-2">
               <div className="price-total flex bg-white w-10/12 justify-around  p-10 border-b-2  border-t-2 mb-2">
                     <div className="text-gray-900 text-xl font-bold mb-10">
                            Desconto: <br />
                            Frete: <br /><br />
                            Subtotal:<br/>
                     </div>
                     <div className="text-gray-900 text-xl font-bold mb-10">
                            0,00%<br />
                            R$ 0,00<br /><br />
                            {total.toLocaleString("pt-BR", {style:"currency", currency:"BRL"})}<br/>
                     </div>
                     <div className="buttons flex flex-col items-center">
                        <Checkout cart={cart} total={total}/>
                        <a href="/" className="text-indigo-500 mt-4 mb-20">Ou continuar comprando</a>
                     </div>
               </div>
              
           </div>
        </div>
    );
}