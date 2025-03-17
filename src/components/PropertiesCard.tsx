import Image from "next/image";

import bedroomIcon from "../assets/icons/bedroomIcon.png"
import bedroomIcon2 from "../assets/icons/bedroomIcon2.png"
import bedroomIcon3 from "../assets/icons/bedroomIcon3.png"
import { ReactNode } from "react";

interface PropertiesCardProps {
    imageHero: HTMLImageElement
    title: string
    description: string
}

export function PropertiesCard({imageHero, title, description}: PropertiesCardProps) {
    return (
        <div className="flex flex-col px-10 py-10 border border-[#353535] w-[512px] h-[692px] rounded-xl">
            <Image
                src={imageHero}
                alt=""
            />

            <div className="mt-8 max-w-[482px]">
                <h2 className="text-2xl font-semibold text-white">{title}</h2>
                <p className="text-lg font-medium text-[#999999]">
                    {description}  
                    <span className="text-lg font-medium text-white underline underline-offset-2"> Read More</span>
                </p>
            </div>

            <div className="flex gap-2.5 mt-8">
                <div className="p-3 py-2 bg-[#1A1A1A] flex gap-1 border border-[#262626] rounded-4xl">
                    <Image src={bedroomIcon} alt=""/>
                    <h2 className="text-lg font-medium text-white">4-Bedroom</h2>
                </div>

                <div className="px-3 py-2 bg-[#1A1A1A] flex gap-1 border border-[#262626] rounded-4xl">
                    <Image src={bedroomIcon2} alt=""/>
                    <span className="text-lg font-medium text-white">3-Bathroom</span>
                </div>

                <div className="px-3 py-2 bg-[#1A1A1A] flex gap-1 border border-[#262626] rounded-4xl">
                    <Image src={bedroomIcon3} alt=""/>
                    <span className="text-lg font-medium text-white">Villa</span>
                </div>

            </div>

            <div className="mt-8 flex justify-between">
                <div>
                    <p className="text-lg font-medium text-[#999999]">Price</p>
                    <h2 className="text-2xl font-semibold text-white">$550,000</h2>
                </div>

                <button className="px-14 py-4 bg-[#703BF7] text-white rounded-xl hover:bg-[#8254F8]
                    transition-colors cursor-pointer">
                    View Property Details
                </button>
            </div>
        </div>
    )
}