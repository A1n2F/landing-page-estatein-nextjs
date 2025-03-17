import Image from "next/image"
import propertiesImage from "../assets/images/imageProperties1.png"
import propertiesImage2 from "../assets/images/imageProperties2.png"
import propertiesImage3 from "../assets/images/imageProperties3 .png"

import arrowRightImg from "../assets/icons/arrowRight.png"
import arrowLeftImg from "../assets/icons/arrowLeft.png"

import { PropertiesCard } from "./PropertiesCard"


export function Properties() {
    return (
        <div className="px-40 py-20 bg-[#141414]">
                <h1 className="text-5xl font-semibold text-white">Featured Properties</h1>
                <div className="flex items-base justify-between">
                    <p className="text-lg font-medium text-[#999999] max-w-6xl mt-3.5">
                        Explore our handpicked selection of featured properties. Each listing offers a glimpse 
                        into exceptional homes and investments available through Estatein. Click "View Details" for more information.
                    </p>

                    <button className="px-6 py-4 bg-[#1A1A1A] text-lg font-medium text-white border border-[#262626] rounded-xl
                    hover:bg-[#262626] transition-colors cursor-pointer">
                        View All Properties
                    </button>
                </div>

                <div className="flex gap-8 mt-20">
                    <PropertiesCard
                        imageHero={propertiesImage}
                        title="Seaside Serenity Villa"
                        description="A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood... "
                    />

                    <PropertiesCard
                        imageHero={propertiesImage2}
                        title="Metropolitan Haven"
                        description="A chic and fully-furnished 2-bedroom apartment with panoramic city views... "
                    />

                <PropertiesCard
                        imageHero={propertiesImage3}
                        title="Rustic Retreat Cottage"
                        description="An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community... "
                    />
                </div>

                <hr className="mt-12 border border-[#353535]" />

                <div className="flex justify-between mt-5">
                    <div>
                        <p className="text-xl font-medium text-[#999999]">
                            <span className="text-white">01</span> de 60</p>
                    </div>

                    <div className="flex gap-2.5 ">
                        <button className="w-8 flex items-center justify-center rounded-full bg-[#262626] border border-[#999999] hover:bg-[#999999]
                        transition-colors cursor-pointer">
                            <Image src={arrowLeftImg} alt=""/>
                        </button>

                        <button className="rounded-full bg-[#262626] border border-[#999999] hover:bg-[#999999]
                        transition-colors cursor-pointer">
                            <Image src={arrowRightImg} alt="" />
                        </button>
                    </div>
                </div>
        </div>
    )
}