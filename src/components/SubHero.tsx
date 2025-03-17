import Image from "next/image";

import iconContainer1 from "../assets/images/IconContainer1.png"
import iconContainer2 from "../assets/images/IconContainer2.png"
import iconContainer3 from "../assets/images/IconContainer3.png"
import iconContainer4 from "../assets/images/IconContainer4.png"
import arrowIconImg from "../assets/icons/arrowIcon.png"

export function SubHero() {
    return (
        <div className="px-5 py-5 bg-[#141414] mx-auto">
            <div className="flex gap-5">
                <div className="w-[455px] h-[212px] bg-[#1A1A1A] rounded-xl flex flex-col items-center justify-center gap-5 text-center relative">
                    <Image
                        src={iconContainer1}
                        alt="icon container 1"
                    />

                    <h2 className="text-2xl text-white font-semibold">Find Your Dream Home</h2>

                    <Image
                        src={arrowIconImg}
                        alt=""
                        className="absolute right-5 top-5"
                    />
                </div>

                <div className="w-[455px] h-[212px] bg-[#1A1A1A] rounded-xl flex flex-col items-center justify-center gap-5 text-center relative">
                    <Image
                        src={iconContainer2}
                        alt="icon container 1"
                    />

                    <h2 className="text-2xl text-white font-semibold">Unlock Property Value</h2>

                    <Image
                        src={arrowIconImg}
                        alt=""
                        className="absolute right-5 top-5"
                    />
                </div>

                <div className="w-[455px] h-[212px] bg-[#1A1A1A] rounded-xl flex flex-col items-center justify-center gap-5 text-center relative">
                    <Image
                        src={iconContainer3}
                        alt="icon container 1"

                    />

                    <h2 className="text-2xl text-white font-semibold">Effortless Property Management</h2>

                    <Image
                        src={arrowIconImg}
                        alt=""
                        className="absolute right-5 top-5"
                    />
                </div>

                <div className="w-[455px] h-[212px] bg-[#1A1A1A] rounded-xl flex flex-col items-center justify-center gap-5 text-center relative">
                    <Image
                        src={iconContainer4}
                        alt="icon container 1"
                    />

                    <h2 className="text-2xl text-white font-semibold">Smart Investments, Informed Decisions</h2>

                    <Image
                        src={arrowIconImg}
                        alt=""
                        className="absolute right-5 top-5"
                    />
                </div>
            </div>
        </div>
    )
}