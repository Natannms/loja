
import products from '../../products.json';
import RateProducts from './RateProducts';
import SeeMore from '../Buttons/SeeMore';
export default function FeaturedProducts() {
    
    return (
        <div className="flex flex-col items-center max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="text-gray-500 font-bold text-4xl mb-10 mt-20">Veja os mais vendidos da nery imports</h2>
            <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 ">
                {products.map((product) => (
                    <div key={product.id} className="group flex flex-col justify-between p-4">
                        <div className="w-50 h-50 bg-indigo-700 aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                            <img
                                src={product.imageSrc}
                                alt={product.imageAlt}
                                className="w-full h-full object-center object-cover group-hover:opacity-75"
                            />
                        </div>
                        <h3 className="mt-4 font-bold text-xl text-gray-700 mb-10">{product.name}</h3>
                        <p className="mt-1 text-lg font-small text-gray-500 mb-10">{product.short_description}</p>
                        <RateProducts  rate={product.rate}/>
                        <p className="mt-1 mb-10 text-xl font-medium text-gray-900"> {product.price.toLocaleString("pt-BR", {style:"currency", currency:"BRL"})}</p>
                        <SeeMore item={product.id} />
                    </div>
                ))}
            </div>
        </div>
    );
}