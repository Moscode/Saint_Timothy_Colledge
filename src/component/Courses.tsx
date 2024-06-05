import CourseCard from "./CourseCard"

const Courses = () => {
    const subject = [
        './biology.png',
        './chemistry.png',
        './physics.png'
    ]
  return (
    <div className="bg-[#ecf0f2] py-40">
        <div className="max-w-screen-xl mx-auto flex justify-between">
            <h2 className="text-5xl font-bold">Subjects You Will Learn</h2>
            <p className="flex justify-between w-[40%]">{subject.map((subject, id) => <span key={id.toString()}><img src={subject} alt="subject" className="w-[60px]"/></span>)}</p>
        </div>
        <div className="max-w-screen-xl mx-auto grid grid-cols-2 divide-x-2 divide-primary-700 pt-20 gap-4">
            <div>
            <span className="text-lg font-semibold">Top Categories</span>
            <p className="text-4xl font-bold">Popular Courses</p>
            </div>
            <div className="pl-36 text-xl">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
            </div>
        </div>
        <div className="max-w-screen-xl mx-auto grid grid-cols-3 pt-20 gap-4">
        <CourseCard />
        <CourseCard />
        <CourseCard />
        </div>
    </div>
  )
}

export default Courses