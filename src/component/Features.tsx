import { FaCrow } from "react-icons/fa";
import { LuClock5 } from "react-icons/lu";


const Features = () => {
    const features = [
        {
        logo: <FaCrow />,
        title: "Examine your Knowledge",
        description:"Take a test to examine your abilities so far."
        },
        {          
        logo: <LuClock5 />,
        title:"Know more with AI",
        description:"Get assistance with our AI platform"
        }
    ]
  return (
    <div className="bg-[#ecf0f2]">
        <div className="max-w-screen-xl mx-auto flex justify-between py-20">
            <div className="flex flex-col gap-y-4">
                <p className="text-lg font-semibold">Features of Our Courses</p>
                <h3 className="text-4xl font-bold">Why Choose Us?</h3>
                <p className="text-lg w-[50%] font-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="grid grid-rows-2 gap-y-8">
            {
                features.map((feature, idx) => (
                    <div key={idx.toString()} className="flex gap-x-4">
                        <div className="">
                        <span className="text-white bg-primary-700 rounded-[50%] flex justify-center items-center p-2">{feature.logo}</span>
                        </div>
                        <div>
                        <p className="text-xl font-bold">{feature.title}</p>
                        <p className="font-light">{feature.description}</p>
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
    </div>
  )
}

export default Features