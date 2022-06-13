
import { useNavigate } from "react-router-dom";

export default function AddToBag(props: any) {

    const navigate = useNavigate();

    const goToCart = () => {
        navigate(`../cart`, { replace: true });
    }
    const product = props.item;
    return (
        <div className="mt-3 sm:mt-0 sm:ml-3">
            <button onClick={() => {
                const cart = JSON.parse(localStorage.getItem('cart') || '[]');
                cart.push(product);
                console.log(cart)
                localStorage.setItem('cart', JSON.stringify(cart))
                goToCart()
            }} className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white hover:text-black bg-yellow-700 hover:bg-yellow-200 md:py-4 md:text-lg md:px-10"> Adicionar ao carrinho </ button>
        </div>
    )
}