import { FaCrow } from "react-icons/fa";
import { GiSevenPointedStar } from "react-icons/gi";
import { LuClock5 } from "react-icons/lu";


const Features = () => {
    const features = [
        {
        logo: <FaCrow />,
        title: "Best Industry Leaders",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper."
        },
        {   
        logo: <GiSevenPointedStar />,   
        title:"Learn Online at Your Own Pace",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper."
        },
        {          
        logo: <LuClock5 />,
        title:"Professional Certification",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper."
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
            <div className="grid grid-rows-3 gap-y-4">
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