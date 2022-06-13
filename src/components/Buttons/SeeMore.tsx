import { useNavigate } from "react-router-dom";
export default function SeeMore(props:any) {
    const id = props.item;
    const navigate = useNavigate();
    const goToProduct = () => {
        navigate(`../product/${id}`, { replace: true });
    }
    return (
        <div className="mt-3 sm:mt-0 sm:ml-3">
        <button onClick={()=>{
          goToProduct()
            }} className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white hover:text-black bg-yellow-700 hover:bg-yellow-200 md:py-4 md:text-lg md:px-10"> Ver mais </ button>
        </div>
    )
}