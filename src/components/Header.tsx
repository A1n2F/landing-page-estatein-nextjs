import Image from "next/image";

import closeButtonImg from "../assets/icons/closeButton.png"
import logoImg from "../assets/images/Logo.png"

import bgImg from "../assets/images/BACKGROUND2.png"

export function Header() {
    return (
        <div className="w-full h-40 bg-[#1E1E1E]">
            <div className="flex items-center justify-center gap-2.5 h-16 text-white relative z-20">
                <p className="text-lg/normal font-medium">
                    ✨Discover Your Dream Property with Estatein
                </p>

                <a href="#" className="text-lg font-medium underline underline-offset-2">
                    Learn More
                </a>

                <div className="absolute right-4">
                    <Image
                        src={closeButtonImg}
                        alt="close button"
                        className="text-white"
                    />
                </div>
            </div>

            <hr className="border border-[#353535]" />

            <Image
                src={bgImg}
                alt=""
                className="absolute top-0 opacity-40"
            />

            <div className="px-40 mx-auto">
                <div className="flex items-center justify-between text-white py-5">
                        <Image
                            src={logoImg}
                            alt="Logo image"
                            width={160}
                            height={48}

                        />

                    <div className="flex gap-8 text-lg">
                        <a href="#" className="hover:underline underline-offset-2">Home</a>
                        <a href="#" className="hover:underline underline-offset-2">About Us</a>
                        <a href="#" className="hover:underline underline-offset-2">Properties</a>
                        <a href="#" className="hover:underline underline-offset-2">Services</a>
                    </div>

                   <button className="bg-[#141414] px-6 py-4 rounded-lg hover:bg-[#292929] transition-colors cursor-pointer">Contact Us</button>
                </div>
            </div>
        </div>
    )
}