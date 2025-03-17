import { QuestionCard } from "./QuestionsCard";

import arrowRightImg from "../assets/icons/arrowRight.png"
import arrowLeftImg from "../assets/icons/arrowLeft.png"
import Image from "next/image";

export function Questions() {
    return (
        <div className="px-40 py-10 bg-[#141414]">
                <h1 className="text-5xl font-semibold text-white">Frequently Asked Questions</h1>
                <div className="flex items-base justify-between">
                    <p className="text-lg font-medium text-[#999999] max-w-6xl mt-3.5">
                        Find answers to common questions about Estatein's services, property listings, and the real estate process. 
                        We're here to provide clarity and assist you every step of the way.
                    </p>

                    <button className="px-6 py-4 bg-[#1A1A1A] text-lg font-medium text-white border border-[#262626] rounded-xl
                    hover:bg-[#262626] transition-colors cursor-pointer">
                        View All FAQ’s
                    </button>
                </div>

                <div className="mt-20 flex gap-8">
                    <QuestionCard
                        title="How do I search for properties on Estatein?"
                        description="Learn how to use our user-friendly search tools to find properties that match your criteria."
                    />

                    <QuestionCard
                        title="What documents do I need to sell my property through Estatein?"
                        description="Find out about the necessary documentation for listing your property with us."
                    />

                    <QuestionCard
                        title="How can I contact an Estatein agent?"
                        description="Discover the different ways you can get in touch with our experienced agents."
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