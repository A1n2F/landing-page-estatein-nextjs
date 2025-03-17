import Image from "next/image";

import starIcon from "../assets/icons/star.png"

interface ReviewsCardProps {
    title: string
    description: string
    imageHero: HTMLImageElement
    name: string
    location: string
}

export function ReviewsCard({title, description, imageHero, name, location}: ReviewsCardProps) {
    return (
        <div className="px-12 py-14 border border-[#353535] w-[512px] h-[442px] rounded-xl">
                        <span className="flex gap-2.5">
                            <Image src={starIcon} alt=""/> 
                            <Image src={starIcon} alt=""/> 
                            <Image src={starIcon} alt=""/> 
                            <Image src={starIcon} alt=""/> 
                            <Image src={starIcon} alt=""/> 
                        </span>

                        <div className="mt-10 h-[158px]">
                            <h2 className="text-2xl font-semibold text-white">{title}</h2>
                            <p className="text-lg font-medium text-white mt-3.5">
                                {description}
                            </p>
                        </div>

                        <div className="flex gap-3 mt-12">
                            <Image src={imageHero} alt=""/>
                            <div>
                                <h2 className="text-xl font-medium text-white">{name}</h2>
                                <p className="text-lg font-medium text-[#999999]">{location}</p>
                            </div>
                        </div>
        </div>
    )
}