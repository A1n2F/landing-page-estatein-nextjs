import Image from "next/image";

import { ReviewsCard } from "./ReviewsCard" 

import arrowRightImg from "../assets/icons/arrowRight.png"
import arrowLeftImg from "../assets/icons/arrowLeft.png"

import profileImg1 from "../assets/images/Profile.png"
import profileImg2 from "../assets/images/Profile1.png"
import profileImg3 from "../assets/images/Profile2.png"

export function Reviews() {
    return (
        <div className="px-40 py-10 bg-[#141414]">
             <h1 className="text-5xl font-semibold text-white">What Our Clients Say</h1>
                <div className="flex items-base justify-between">
                    <p className="text-lg font-medium text-[#999999] max-w-6xl mt-3.5">
                        Read the success stories and heartfelt testimonials from our valued clients. 
                        Discover why they chose Estatein for their real estate needs.
                    </p>

                    <button className="px-6 py-4 bg-[#1A1A1A] text-lg font-medium text-white border border-[#262626] rounded-xl
                    hover:bg-[#262626] transition-colors cursor-pointer">
                        View All Testimonials
                    </button>
                </div>

                <div className="mt-20 flex gap-8">
                   <ReviewsCard
                        title="Exceptional Service!"
                        description="Our experience with Estatein was outstanding. Their team's dedication and
                        professionalism made finding our dream home a breeze. Highly recommended!"
                        imageHero={profileImg1}
                        name="Wade Warren"
                        location="USA, California"
                    />

                    <ReviewsCard
                        title="Efficient and Reliable"
                        description="Estatein provided us with top-notch service. They helped us sell our
                        property quickly and at a great price. We couldn't be happier with the results."
                        imageHero={profileImg2}
                        name="Emelie Thomson"
                        location="USA, Florida"
                    />

                    <ReviewsCard
                        title="Trusted Advisors!"
                        description="The Estatein team guided us through the entire buying process. Their knowledge 
                        and commitment to our needs were impressive. Thank you for your support!"
                        imageHero={profileImg3}
                        name="John Mans"
                        location="USA, Nevada"
                    />
                </div>

                <hr className="mt-12 border border-[#353535]" />

                <div className="flex justify-between mt-5">
                    <div>
                        <p className="text-xl font-medium text-[#999999]">
                            <span className="text-white">01</span> de 10</p>
                    </div>

                    <div className="flex gap-2.5">
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