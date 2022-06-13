

export default function RemoveToCart(props: any) {
    const product = props.item;
    return (
        <div className="mt-3 sm:mt-0 sm:ml-3">
            <button onClick={() => {
                const cart = JSON.parse(localStorage.getItem('cart') || '[]');
                const newCart = cart.filter((item: any) => item.id !== product.id);
                localStorage.setItem('cart', JSON.stringify(newCart))
                window.location.reload();
            }} className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white hover:text-black bg-indigo-700 hover:bg-indigo-200 md:py-2 md:text-lg md:px-2"> Remove </ button>
        </div>
    )
}