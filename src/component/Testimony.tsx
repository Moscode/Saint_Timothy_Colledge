import { IoMdStar } from "react-icons/io";

const Testimony = () => {
  return (
    <div className="bg-[#ecf0f2]">
        <div className="flex items-end pl-16">
            <div className="">
                <img src="./testimonybg.png" alt="" className="w-32"/>
            </div>
            <div className="max-w-screen-xl flex justify-between pl-24">
                <div className="w-[50%]">
                    <span className="text-lg font-semibold">Testimonials</span>
                    <p className="text-5xl font-bold">
                        Trusted by Thousand of Students and Tutors
                    </p>
                </div>
                <div className="flex justify-center items-center gap-x-4">
                    <p className="text-8xl font-extrabold text-[#22323d]">4.8</p>
                    <div>
                    <div className="flex text-primary-700">
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                    </div>
                    <p>2,394 Ratings</p>
                    <p>Google Reviews</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimony