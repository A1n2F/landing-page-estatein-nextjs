import Image from "next/image";

import logoImg from "../assets/images/Logo.png"
import mailImg from "../assets/icons/mail.png"
import paperImg from "../assets/icons/paper.png"
import socialIcon from "../assets/icons/socialIcon.png"

import bgImg from "../assets/images/bgcta.png"

import { FooterSetting } from "./FooterSetting";

export function Footer() {
    return (
        <>
        <div className="px-40 py-10 bg-[#141414]">
            <div className="border border-t-[#353535] border-b-[#353535]">
            <h1 className="text-5xl font-semibold text-white mt-10">Start Your Real Estate Journey Today</h1>
            <div className="flex items-base justify-between">
                <p className="text-lg font-medium text-[#999999] max-w-6xl mt-3.5 mb-10">
                    Your dream property is just a click away. Whether you're looking for a new home, a strategic investment, or expert real estate advice, 
                    Estatein is here to assist you every step of the way. Take the first step towards your real estate goals and explore our available
                    properties or get in touch with our team for personalized assistance.
                </p>
                
                <div>
                    <button className="px-6 py-4 bg-[#703BF7] text-lg font-medium text-white border border-[#8254F8] rounded-xl
                    hover:bg-[#8254F8] transition-colors cursor-pointer">
                        Explore Properties
                    </button>
                </div>
                </div>
            </div>

            <div className="py-10 flex gap-20 justify-between">
                <div>
                    <Image src={logoImg} alt="" />
                    <div className="flex border border-[#353535] w-[423px] h-[66px] rounded-xl px-6 mt-8">
                        <div className="flex items-center gap-3 relative w-[423px]">
                            <Image src={mailImg} alt="" className="w-5 h-5" />
                            <input placeholder="Enter your Email" className="text-[#999999]" />
                            <Image src={paperImg} alt="" className="w-5 h-5 absolute right-0 top-5" />
                        </div>
                    </div>
                </div>

                <div className="">
                    <FooterSetting/>
                </div>
            </div>
        </div>

        <div className="flex items-center justify-between h-16 px-40 bg-[#1A1A1A]">
                <div className="flex gap-10 text-md font-medium text-white">
                    <p>@2023 Estatein. All Rights Reserved.</p>
                    <p>Terms & Conditions</p>
                </div>

                <div>
                    <Image src={socialIcon} alt="" className="w-36 h-12" />
                </div>
            </div>
        </>
    )
}