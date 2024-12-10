import Image from "next/image";
import Link from "next/link";

export default function ShopTopPicks() {
    const products = [
        {
            id: 1,
            image: "/images/Trenton modular sofa_3 1.png",
            title: "Trenton modular sofa_3",
            price: "Rs. 25,000.00",
        },
        {
            id: 2,
            image: "/images/Granite dining table with dining chair 1.png",
            title: "Granite dining table with dining chair",
            price: "Rs. 25,000.00",
        },
        {
            id: 3,
            image: "/images/Outdoor bar table and stool 1.png",
            title: "Outdoor bar table and stool",
            price: "Rs. 25,000.00",
        },
        {
            id: 4,
            image: "/images/Plain console with teak mirror 1.png",
            title: "Plain console with teak mirror",
            price: "Rs. 25,000.00",
        },
        {
            id: 5,
            image: "/images/Grain coffee table 1.png",
            title: "Plain Coffee Table",
            price: "Rs. 15,000.00",
        },
        {
            id: 6,
            image: "/images/Kent coffee table 1.png",
            title: "Kent Coffee Table",
            price: "Rs. 225,000.00",
        },
        {
            id: 7,
            image: "/images/Round coffee table_color 2 1.png ",
            title: "Round Coffee Table with Coffer",
            price: "Rs. 251,000.00",
        },
        {
            id: 8,
            image: "/images/Reclaimed teak coffee table 1.png",
            title: "The Almed Teak Coffee Table",
            price: "Rs. 25,200.00",
        }, {
            id: 9,
            image: "/images/Plain console_ 1.png",
            title: "Plain Console",
            price: "Rs. 258,200.00",
        },
        {
            id: 10,
            image: "/images/Reclaimed teak Sideboard 1.png",
            title: "Reclaimed Teak Sideboard",
            price: "Rs. 20,000.00",
        },
        {
            id: 11,
            image: "/images/SJP_0825  1.png",
            title: "S-2",
            price: "Rs. 200,000.00",
        },
        {
            id: 12,
            image: "/images/Bella chair and table 1.png",
            title: "Teak Chair Outdoor",
            price: "Rs. 100,000.00",
        },
        {
            id: 13,
            image: "/images/Granite square side table 2.png",
            title: "Brinkley Square Side Table",
            price: "Rs. 258,800.00",
        },
        {
            id: 14,
            image: "/images/Asgaard sofa 2.png",
            title: "Noguchi Sofa",
            price: "Rs. 250,000.00",
        },
        {
            id: 15,
            image: "/images/Maya sofa three seater 1.png",
            title: "Maya Sofa Three-Seater",
            price: "Rs. 115,000.00",
        },
        {
            id: 16,
            image: "/images/Outdoor sofa set 1.png",
            title: "Chandos Sofa Set",
            price: "Rs. 244,000.00",
        },
    ];

    return (
        <section className="py-12 bg-white">
            <div className="max-w-[1440px] mx-auto px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="text-center p-4 flex flex-col items-center hover:shadow-md transition-shadow"
                        >
                            <Image
                                src={product.image}
                                alt={product.title}
                                className="w-full h-auto rounded-md mb-4"
                                width={200}
                                height={200}
                            />
                            <h3 className="text-lg font-medium">{product.title}</h3>
                            <p className="text-sm font-semibold text-gray-700">
                                {product.price}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mt-8">
                    <nav className="flex gap-4">
                        <button className="px-4 py-2  bg-[#FBEBB5] rounded-md hover:bg-gray-100">1</button>
                        <button className="px-4 py-2  rounded-md hover:bg-[#FBEBB5]"><Link href={'/Blog'}>2</Link></button>
                        <button className="px-4 py-2  rounded-md hover:bg-[#FBEBB5]"><Link href={'/Blog'}>3</Link></button>
                        <button className="px-4 py-2  rounded-md hover:bg-[#FBEBB5]"><Link href={'/Blog'}>Next</Link></button>
                    </nav>
                </div>
            </div>
        </section>
    );
}
