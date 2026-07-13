import React, { useEffect, useState } from "react";
import {
    Carousel,
    type CarouselApi,
    CarouselContent,
    CarouselItem,
} from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const internationalTours = [
    {
        name: "France",
        image:
            "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=900&q=80",
    },
    {
        name: "Dubai",
        image:
            "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=80",
    },
    {
        name: "Switzerland",
        image:
            "https://images.unsplash.com/photo-1527668752968-14dc70a27c95?auto=format&fit=crop&w=900&q=80",
    },
    {
        name: "Singapore",
        image:
            "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=900&q=80",
    },
    {
        name: "Thailand",
        image:
            "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=900&q=80",
    },
    {
        name: "Maldives",
        image:
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=900&q=80",
    },
    {
        name: "Australia",
        image:
            "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=900&q=80",
    },
];

const archStyles = [
    "lg:translate-y-10 lg:-rotate-[5deg]",
    "lg:translate-y-4 lg:-rotate-[2.5deg]",
    "lg:-translate-y-1 lg:rotate-0",
    "lg:translate-y-4 lg:rotate-[2.5deg]",
    "lg:translate-y-10 lg:rotate-[5deg]",
];

export default function InternationalTours() {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const duplicatedTours = [...internationalTours, ...internationalTours];

    useEffect(() => {
        if (!api) return;

        setCurrent(api.selectedScrollSnap());

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap());
        });
    }, [api]);

    return (
        <section className="w-full overflow-hidden bg-white py-8 px-4">
            <div className="mx-auto max-w-7xl px-4">
                <div className="mb-12 text-center">
                    <p
                        className="text-4xl text-[#026fc5] md:text-5xl"
                        style={{ fontFamily: "cursive" }}
                    >
                        Explore The World
                    </p>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-extrabold tracking-tight text-[#026fc5] leading-tight">
                        International Tours
                    </h2>
                </div>

                <Carousel
                    setApi={setApi}
                    plugins={[
                        Autoplay({
                            delay: 3000,
                            stopOnInteraction: false,
                        }),
                    ]}
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="relative w-full"
                >
                    <CarouselContent className="-ml-3 pb-16 pt-6">
                        {duplicatedTours.map((item, index) => {
                            const position =
                                (index - current + duplicatedTours.length) %
                                duplicatedTours.length;

                            const style =
                                position >= 0 && position <= 4
                                    ? archStyles[position]
                                    : "lg:translate-y-10 lg:rotate-0";

                            return (
                                <CarouselItem
                                    key={`${item.name}-${index}`}
                                    className="basis-full pl-3 sm:basis-1/2 md:basis-1/3 lg:basis-1/6"
                                >
                                    <div
                                        className={`group mx-auto max-w-[180px] text-center transition-all duration-700 ease-out ${style}`}
                                    >
                                        <div className="mx-auto h-[180px] w-[180px] overflow-hidden rounded-[22px] shadow-lg transition-all duration-500 group-hover:-translate-y-2 group-hover:rotate-0">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                        </div>

                                        <h3 className="mt-4 text-xl font-bold text-[#123f4a]">
                                            {item.name}
                                        </h3>

                                        <a
                                            href="#"
                                            className="mt-1.5 inline-block text-sm font-semibold text-gray-500 hover:text-brand-600 transition-colors"
                                        >
                                            See More
                                        </a>
                                    </div>
                                </CarouselItem>
                            );
                        })}
                    </CarouselContent>


                </Carousel>

                <div className="mt-2 flex justify-center gap-6">
                    {internationalTours.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => api?.scrollTo(index)}
                            className={`h-5 w-5 rounded-full border border-[#123f4a] ${
                                (current % internationalTours.length) === index ? "bg-[#19a8c7]" : "bg-white"
                            }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}