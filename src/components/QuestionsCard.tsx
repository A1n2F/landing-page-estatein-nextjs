import Image from "next/image";



interface ReviewsCardProps {
    title: string
    description: string
}

export function QuestionCard({title, description}: ReviewsCardProps) {
    return (
        <div className="px-12 py-14 border border-[#353535] w-[512px] h-[346px] rounded-xl">
                        <div className="h-[158px]">
                            <h2 className="text-2xl font-semibold text-white">{title}</h2>
                            <p className="text-lg font-medium text-white mt-8">
                                {description}
                            </p>
                        </div>

                        <div>
                            <button className="px-6 py-4 mt-8 bg-[#1A1A1A] text-lg text-white font-medium border border-[#999999] rounded-xl
                            hover:bg-[#999999] transition-colors cursor-pointer">Read More</button>
                        </div>
        </div>
    )
}