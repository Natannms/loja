import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RateProducts from "../components/Products/RateProducts";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import products from '../products.json';
import AddToBag from "../components/Buttons/AddToBag";

export default function Product() {
    const productId = useParams().productId;
    const [product, setProduct] = useState({
        id: 0,
        name: "",
        imageSrc: "",
        imageAlt: "",
        short_description: "",
        price: 0,
        rate: 0,
        long_description: "",
    });
    useEffect(() => {
        products.forEach(element => {
            if (element.id == Number(productId)) {
                setProduct(element);
            }
        });
    },[])
    return (
        <div className="">
            <div className="bg-white">           
                <div className="pt-6">
                    <nav aria-label="Breadcrumb">
                        <ol role="list" className="max-w-2xl mx-auto px-4 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8">
                            <li>
                                <div className="flex items-center">
                                    <a href="/" className="mr-2 text-4xl font-medium text-gray-900"> <FaArrowAltCircleLeft /> </a>
                                    <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-4 h-5 text-gray-300">
                                        <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                                    </svg>
                                </div>
                            </li>
                            <li>
                                <div className="flex items-center">
                                    <a href="#" className="mr-2 text-4xl font-medium text-gray-900"> {product.name} </a>
                                    <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-4 h-5 text-gray-300">
                                        <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                                    </svg>
                                </div>
                            </li>
                        </ol>
                    </nav>

                    <div className="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
                        <div className="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
                            <img src={product.imageSrc} alt={product.imageAlt} className="w-full h-full object-center object-cover" />
                        </div>
                        <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                            <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                                <img src={product.imageSrc} alt="Model wearing plain black basic tee." className="w-full h-full object-center object-cover" />
                            </div>
                            <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                                <img src={product.imageSrc} alt="Model wearing plain gray basic tee." className="w-full h-full object-center object-cover" />
                            </div>
                        </div>
                        <div className="aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4">
                            <img src={product.imageSrc} alt="Model wearing plain white basic tee." className="w-full h-full object-center object-cover" />
                        </div>
                    </div>

                    <div className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
                        <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                            <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">{product.name}</h1>
                        </div>

                        <div className="mt-4 lg:mt-0 lg:row-span-3">
                            <h2 className="sr-only">Product information</h2>
                            <p className="text-3xl text-gray-900">$ {product.price}</p>

                            <div className="mt-6">
                                <h3 className="sr-only">Reviews</h3>
                                <div className="flex items-center">
                                    <div className="flex items-center">
                                    <RateProducts rate={product.rate} />
                                    </div>
                                    <p className="sr-only">4 out of 5 stars</p>
                                    <a href="#" className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">117 reviews</a>
                                
                                </div>
                                <AddToBag item={product}/>
                            </div>
                        </div>

                        <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                            <div>
                                <h3 className="sr-only">Description</h3>

                                <div className="space-y-6">
                                    <p className="text-base text-gray-900">
                                        {product.long_description}
                                    </p>
                                </div>
                            </div>

                            <div className="mt-10">
                                <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

                                <div className="mt-4">
                                    <ul role="list" className="pl-4 list-disc text-sm space-y-2">
                                        <li className="text-gray-400"><span className="text-gray-600">Hand cut and sewn locally</span></li>

                                        <li className="text-gray-400"><span className="text-gray-600">Dyed with our proprietary colors</span></li>

                                        <li className="text-gray-400"><span className="text-gray-600">Pre-washed &amp; pre-shrunk</span></li>

                                        <li className="text-gray-400"><span className="text-gray-600">Ultra-soft 100% cotton</span></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-10">
                                <h2 className="text-sm font-medium text-gray-900">Details</h2>

                                <div className="mt-4 space-y-6">
                                    <p className="text-sm text-gray-600">The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming &quot;Charcoal Gray&quot; limited release.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}