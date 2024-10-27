"use client"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
interface ProductType {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: string[];
    brand: string;
    sku: string;
    weight: number;
    dimensions: {
        width: number;
        height: number;
        depth: number;
    };
    warrantyInformation: string;
    shippingInformation: string;
    availabilityStatus: string;
    reviews: {
        rating: number;
        comment: string;
        date: string;
        reviewerName: string;
        reviewerEmail: string;
    }[];
    returnPolicy: string;
    minimumOrderQuantity: number;
    meta: {
        createdAt: string;
        updatedAt: string;
        barcode: string;
        qrCode: string;
    };
    images: string[];
    thumbnail: string;
};

export default function Page(): JSX.Element {
    const [products, setProducts] = useState<ProductType>()
    const getCustomerData = async () => {
        const response: Response = await fetch("http://localhost:8080/products");
        const data: ProductType = await response.json();
        setProducts(data);
    }
    useEffect(() => {
        getCustomerData()
    }, [])
    return <>
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {products && products?.map((product: ProductType) => (
                        <div key={product.id} className="group relative border border-black">
                            <div
                                className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                <Image
                                    alt={product.thumbnail}
                                    src={product.thumbnail}
                                    width={100}
                                    height={100}
                                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        <h1>
                                            <span aria-hidden="true" className="absolute inset-0" />
                                            {product.title}
                                        </h1>
                                    </h3>

                                </div>
                                <p className="text-sm font-medium text-gray-900">Price: {product.price}</p>
                                <p className="text-sm font-medium text-gray-900">rating:{product.rating}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </>
}