import Image from "next/image";

import containerImg from "../assets/images/Container.png"
import subContainerImg from "../assets/images/subContainer.png"

export function Hero() {
    return (
        <div className="flex items-center gap-20 bg-[#141414] relative">
            <div className="pl-40 py-36">
                <h1 className="text-6xl font-semibold text-white">
                    Discover Your Dream <br/> Property with Estatein
                </h1>
                <p className="text-lg font-medium text-[#999999] max-w-[758px] mt-6">
                    Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.
                </p>

                <div className="flex gap-5 mt-14">
                    <button className="px-4 py-6 text-white text-lg font-medium border border-[#999999] rounded-xl 
                    hover:bg-[#999999] transition-colors cursor-pointer">
                        Learn More
                    </button>

                    <button className="px-4 py-6 text-white text-lg font-medium bg-[#703BF7] rounded-xl
                    hover:bg-[#8254F8] transition-colors cursor-pointer">
                        Browse Properties
                    </button>
                </div>

                <div className="flex gap-5 mt-14">
                    <div className="bg-[#1a1a1a] px-6 py-4 rounded-xl">
                        <h2 className="text-white text-4xl font-bold">200+</h2>
                        <p className="text-[#999999] text-lg">Happy Customers</p>
                    </div>
                    <div className="bg-[#1a1a1a] px-6 py-4 rounded-xl">
                        <h2 className="text-white text-4xl font-bold">10k+</h2>
                        <p className="text-[#999999] text-lg">Properties For Clients</p>
                    </div>
                    <div className="bg-[#1a1a1a] px-6 py-4 rounded-xl">
                        <h2 className="text-white text-4xl font-bold">16+</h2>
                        <p className="text-[#999999] text-lg">Years of Experience</p>
                    </div>
                </div>
            </div>
            
            <div>
                <Image 
                    src={containerImg} 
                    alt=""
                    width={920}
                    height={814}
                />
            </div>

            <Image
                src={subContainerImg}
                alt="subContainer image"
                className="absolute left-[904px] top-36"
            />
        </div>
    )
}