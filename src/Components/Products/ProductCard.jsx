import React from 'react';
const Stars = (props) => {
    let stars = []
    for (let i = 0; i < props; ++i) {
        stars.push(
            <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
                 xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                </path>
            </svg>
        )
    }

    return (
        <>
            {stars}
        </>
    )
}

const ProductCard = (props) => {

    return (
        <div className="max-w-2xl w-full mx-auto">
            <div className="bg-white !h-[400px] shadow-md rounded-lg max-w-sm bg-cover dark:bg-stone-900 dark:border-gray-700">
                <a href="#">
                    <img className="rounded-t-lg object-cover h-48 w-96 w-full p-3"
                         src="https://i.ibb.co/KqdgGY4/cosmetic-packaging-mockup-1150-40280.webp" alt="product image" />
                </a>
                <div className="px-4 pb-8">
                    <a href="#">
                        <h3 className="text-gray-900 font-semibold text-xl tracking-tight dark:text-white">{props.product.name}</h3>
                    </a>
                    <div className="justify-between flex">
                        <div className="text-white justify-content-start flex">
                            <div className="w-8 rounded-full bg-gray-800 h-8" />
                            <div className="ml-2 mt-1">
                            waldensoft
                            </div>
                        </div>
                        <div className="flex items-center mt-2.5 mb-5">
                            {Stars(props.product.star)}
                           </div>
                    </div>

                    <div className="flex items-center mt-2.5 mb-5">
                        <span
                            className="text-white">{props.product.desc}</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold text-gray-900 dark:text-white">{props.product.price}₺</span>
                        <a href="#"
                           className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sepete Ekle</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;