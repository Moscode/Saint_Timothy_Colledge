import CourseCard from "./CourseCard"

const courses = [
    {
        title:"BIOLOGY",
        description:"Learn about a natural science discipline that studies living things, which is a very large and broad field due to the wide variety of life found on Earth."
    },
    {
        title:"PHYSICS",
        description:" Learn about the science which deals with the structure of matter and the interactions between the fundamental constituents of the observable universe."
    },
    {
        title:"CHEMISTRY",
        description:"Learn about the natural science that deals principally with the properties of substances, the changes they undergo, and the natural laws that describe these changes."
    }
]

const Courses = () => {
    const subject = [
        './biology.png',
        './chemistry.png',
        './physics.png'
    ]
  return (
    <div className="bg-[#ecf0f2] py-40">
        <div className="mx-8">
        <div className="max-w-screen-xl mx-auto lg:flex lg:justify-between w-[50%] lg:w-[90%]">
            <h2 className="text-5xl font-bold pb-8">Subjects You Will Learn</h2>
            <p className="flex justify-between w-[40%]">{subject.map((subject, id) => <span key={id.toString()}><img src={subject} alt="subject" className="w-[60px]"/></span>)}</p>
        </div>
        <div className="max-w-screen-xl mx-auto pt-20 gap-4 w-[50%] lg:w-[90%]">
            <div>
            <span className="text-lg font-semibold">Top Categories</span>
            <p className="text-4xl font-bold">Popular Courses</p>
            </div>
        </div>
        <div className="max-w-screen-xl mx-auto grid lg:grid-cols-3 flex-wrap pt-20 gap-4 ">
        {
            courses.map((course, idx)=>(
                <div key={idx.toString()} className="mx-auto">
                    <CourseCard title={course.title} description={course.description}/>
                </div>
            ))
        }
        </div>
        </div>
    </div>
  )
}

export default Courses