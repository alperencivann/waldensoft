import React, {useState} from "react";
import classNames from 'classnames'
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import {
    Square3Stack3DIcon,
    UserCircleIcon,
    Cog6ToothIcon,
} from "@heroicons/react/24/solid";
import ProductCard from "./ProductCard";

const ProductList = () => {
    const handleClick = (value) => {
        if (value == selectedMenu) {
            return;
        }
        setSelectedMenu(value)
    }
    const data = [
        {
            label: "Masaüstü Yazılım",
            value: "masaustu-yazilim",
            icon: Square3Stack3DIcon,
            desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people
      who are like offended by it, it doesn't matter.`,
        },
        {
            label: "Web Yazılım",
            value: "web-yazilim",
            icon: UserCircleIcon,
            desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
        },
        {
            label: "Bot Yazılım",
            value: "bot-yazilim",
            icon: Cog6ToothIcon,
            desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
        }, {
            label: "Bayilerimizin Ürünleri",
            value: "bayilerimizin-urunleri",
            icon: Cog6ToothIcon,
            desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
        },
    ];
    const products = [
        {
            id: 0,
            name: "GMaps 1 Aylık Paket",
            category: "masaustu-yazilim",
            desc: "Google Maps üzerinde bulunan işletmeleri toplarsınız.",
            star: "5",
            price: 250
        },{
            id: 1,
            name: "GMaps 3 Aylık Paket",
            category: "masaustu-yazilim",
            desc: "Google Maps üzerinde bulunan işletmeleri toplarsınız.",
            star: "5",
            price: 400
        },{
            id: 2,
            name: "GMaps 6 Aylık Paket",
            category: "masaustu-yazilim",
            desc: "Google Maps üzerinde bulunan işletmeleri toplarsınız.",
            star: "5",
            price: 600
        },{
            id: 3,
            name: "GMaps 12 Aylık Paket",
            category: "masaustu-yazilim",
            desc: "Google Maps üzerinde bulunan işletmeleri toplarsınız.",
            star: "5",
            price: 1000
        },
        {
            id: 4,
            name: "Emlak Teması",
            category: "web-yazilim",
            desc: "Açık kaynak kodlu emlak sitesi.",
            star: "5",
            price: 250
        },{
            id: 5,
            name: "Nakliye Teması",
            category: "web-yazilim",
            desc: "Açık kaynak kodlu Nakliye sitesi.",
            star: "5",
            price: 400
        },{
            id: 6,
            name: "Pin Satış Teması",
            category: "web-yazilim",
            desc: "Açık kaynak kodlu Pin Satış sitesi.",
            star: "5",
            price: 400
        },{
            id: 7,
            name: "Waldensoft-V2 Teması",
            category: "web-yazilim",
            desc: "E-Pin, Dijital Ürün satış sitesi.",
            star: "5",
            price: 400
        },

    ];
    const [selectedMenu, setSelectedMenu] = useState(data[0].value)

    return (
        <div className="container mx-auto max-w-screen-xl">
            <div className="text-center p-8">
                <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl font-heading text-gray-900">
                    Ürünler
                </h1>
            </div>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
                {
                    data.map(({label, value, icon}) => (
                        <div
                            className="w-full h-full text-center py-2 hover:bg-stone-900 hover:text-white rounded cursor-pointer"
                            onClick={() => {
                                handleClick(value)
                            }}>
                            <p className="mx-auto">
                                {label}
                            </p>
                        </div>
                    ))
                }

            </div>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4  mt-4">
                {
                    products.map((product) => (
                        product.category == selectedMenu && <ProductCard product = {product} />
                    ))

                }
            </div>
        </div>
    );
};

export default ProductList;