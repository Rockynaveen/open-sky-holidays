import React from "react"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "./ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const DOMESTIC_PLACES = [
    {
        name: "Kashmir",
        desc: "Snowy valleys, gardens & houseboats",
        image: "https://images.unsplash.com/photo-1588001400947-6385aef4ab0e?auto=format&fit=crop&w=800&q=80",
    },
    {
        name: "Ladakh",
        desc: "Mountain passes, lakes & monasteries",
        image: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=800&q=80",
    },
    {
        name: "Himachal Pradesh",
        desc: "Pine forests, hill resorts & peaks",
        image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80",
    },
    {
        name: "Kerala",
        desc: "Serene backwaters, tea fields & canals",
        image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80",
    },
    {
        name: "Maharashtra",
        desc: "Historic hill forts & coastal views",
        image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=800&q=80",
    },
    {
        name: "Karnataka",
        desc: "Palace gardens & ancient heritage sites",
        image: "https://images.unsplash.com/photo-1600112356915-089abb8fc71a?auto=format&fit=crop&w=800&q=80",
    },
    {
        name: "Rajasthan",
        desc: "Thar desert, palaces & forts",
        image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80",
    },
    {
        name: "Goa",
        desc: "Sandy beaches & sunny coastal life",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    },
]

const DOMESTIC_SLIDER = [
    "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1609920658906-8223bd289001?q=80&w=301&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1697730420879-dc2a8dbaa31f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1589136777351-fdc9c9cab193?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1678966432189-d58296e45ad2?q=80&w=327&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
]

export default function DomesticTours() {
    return (
        <section id="explore-india" className="w-full bg-white py-8">
            <div className="mx-auto max-w-7xl px-4">
                <div className="mb-10 flex items-center gap-4">
                    <div className="h-px flex-1 bg-[#026fc5]" />
                    <h2 className="whitespace-nowrap text-center text-xl font-extrabold italic text-[#026fc5] md:text-2xl">
                        Experience the Wonders of India
                    </h2>
                    <div className="h-px flex-1 bg-[#026fc5]" />
                </div>

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-[2fr_1fr]">
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4">
                        {DOMESTIC_PLACES.map((place) => (
                            <div
                                key={place.name}
                                className="group relative h-[260px] overflow-hidden rounded-2xl"
                            >
                                <img
                                    src={place.image}
                                    alt={place.name}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />

                                {/* Smooth gradient overlay for better legibility */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent" />

                                <div className="absolute inset-0 flex flex-col justify-end items-center p-5 pb-6 text-center text-white">
                                    <h3 className="text-lg font-black tracking-tight text-white mb-1.5">
                                        {place.name}
                                    </h3>

                                    <p className="text-[11px] text-white/80 leading-relaxed mb-4 max-w-[170px]">
                                        {place.desc}
                                    </p>

                                    <a href="#packages" className="rounded-full bg-[#026fc5] px-5 py-2 text-xs font-bold text-white hover:bg-[#073f70] transition-all cursor-pointer shadow-lg shadow-brand-500/10">
                                        View Packages
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="h-[532px]">
                        <Carousel 
                            plugins={[
                                Autoplay({
                                    delay: 3000,
                                    stopOnInteraction: false,
                                }),
                            ]}
                            opts={{
                                loop: true,
                            }}
                            className="h-full w-full"
                        >
                            <CarouselContent className="h-full">
                                {DOMESTIC_SLIDER.map((image, index) => (
                                    <CarouselItem key={index}>
                                        <div className="h-[532px] overflow-hidden">
                                            <img
                                                src={image}
                                                alt="Domestic tour"
                                                className="h-full w-full object-cover"
                                            />
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>

                            <CarouselPrevious className="left-4 border-none bg-transparent text-white shadow-none hover:bg-transparent hover:text-white" />
                            <CarouselNext className="right-4 border-none bg-transparent text-white shadow-none hover:bg-transparent hover:text-white" />
                        </Carousel>
                    </div>
                </div>
            </div>
        </section>
    )
}