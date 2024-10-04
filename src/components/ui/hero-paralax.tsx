import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const HeroParallax = ({
    products
}: {
    products: {
        title: string;
        link: string;
        thumbnail: string;
    }[];
}) => {
    return (
        <div id="projects" className="relative flex flex-col items-center pb-10">
            <Header />
            {/* Main container for project cards, centered horizontally */}
            <div className="flex justify-center w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 justify-items-center w-full max-w-7xl px-4">
                    {products.map((product) => (
                        <ProductCard product={product} key={product.title} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export const Header = () => {
    return (
        <div className="relative left-0 top-0 mx-auto w-full max-w-5xl px-4 py-10 md:py-20 text-center">
            <h1 className="text-3xl font-bold dark:text-white md:text-6xl">Projects worked on</h1>
        </div>
    );
};

export const ProductCard = ({
    product
}: {
    product: {
        title: string;
        link: string;
        thumbnail: string;
    };
}) => {
    const isMP4 = (thumbnail: string) => thumbnail.endsWith('.mp4');

    return (
        <div
            key={product.title}
            className="group relative h-[200px] w-[300px] md:w-[350px] lg:w-[400px] overflow-hidden rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105"
        >
            <Link href={product.link} className="block group-hover:shadow-2xl transition duration-300">
                {/* Render video or image based on file type */}
                {isMP4(product.thumbnail) ? (
                    <video
                        width="400"
                        height="200"
                        className="absolute inset-0 w-full h-full object-cover object-center"
                        autoPlay
                        loop
                        muted
                    >
                        <source src={product.thumbnail} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                ) : (
                    <Image
                        src={product.thumbnail}
                        height="200"
                        width="400"
                        className="absolute inset-0 w-full h-full object-cover object-center"
                        alt={product.title}
                    />
                )}
            </Link>
            {/* Overlay and Title */}
            <div className="pointer-events-none absolute inset-0 w-full h-full bg-black opacity-0 group-hover:opacity-70 transition duration-300"></div>
            <h2 className="absolute bottom-4 left-4 text-lg text-white opacity-0 group-hover:opacity-100 transition duration-300">
                {product.title}
            </h2>
        </div>
    );
};