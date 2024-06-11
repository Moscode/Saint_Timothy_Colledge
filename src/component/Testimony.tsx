import { IoMdStar } from "react-icons/io";

const Testimony = () => {
  return (
    <div className="bg-[#ecf0f2]">
        <div className="flex items-end lg:pl-16">
            <div className="lg:block hidden">
                <img src="./testimonybg.png" alt="" className="w-32"/>
            </div>
            <div className="max-w-screen-xl lg:flex lg:justify-between lg:pl-28 w-[50%] lg:w-[90%] mx-auto lg:mx-0">
                <div className="lg:w-[50%] pb-4">
                    <span className="text-lg font-semibold">Testimonials</span>
                    <p className="text-5xl font-bold">
                        Trusted by Thousand of Students and Tutors
                    </p>
                </div>
                <div className="lg:flex lg:justify-center lg:items-center lg:gap-x-4">
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