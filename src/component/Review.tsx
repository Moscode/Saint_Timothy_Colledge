const Review = () => {

    const reviews = [
        {
            shortDescription: "Very easy way to integrate and learn more...",
            longDescription: "If you care for your learning time, I would go with this.",
            pic: "./review1.jpg",
            name: "Adedoyin Seunfumi",
            workplace: "ISL"
        },
        {
            shortDescription: "Solid foundation for science subjects....",
            longDescription: "This platform provided me with the solid understanding of the core science subjects",
            pic: "./review2.jpg",
            name: " David  Elvis",
            workplace: "Command Colledge Highschool"
        },
        {
            shortDescription: "Mind-blowing topics and tutorials",
            longDescription: "I really enjoyed the resources available on this platform and it help fast track my learning.",
            pic: "./review3.jpg",
            name: "Ahmed Aliu",
            workplace: "Alimosho Highschool"
        },
        {
            shortDescription: "Efficient collaboration",
            longDescription: "Studying with my friends has never been easier, this platform provided us a means to help each other grow and learn",
            pic: "./review4.jpg",
            name: "Olamide Korede",
            workplace: "Queens Colledge"
        }
    ]
  return (
    <div className="bg-[#ecf0f2]">
    <div className="max-w-screen-xl mx-auto flex justify-between py-28">
        <div className="grid mb-8 border border-gray-200 rounded-lg shadow-sm md:mb-12 lg:grid-cols-2 dark:bg-gray-800 gap-12 w-[50%] lg:w-[90%] mx-auto">
        {
            reviews.map((review, idx)=>(
            <figure className="w-[550px] flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700" key={idx.toString()}>
                <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{review.shortDescription}</h3>
                    <p className="my-4">{review.longDescription}</p>
                </blockquote>
                <figcaption className="flex items-center justify-center ">
                    <img className="rounded-full w-9 h-9" src={review.pic} alt="profile" />
                    <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                        <div>{review.name}</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400 ">{review.workplace}</div>
                    </div>
                </figcaption>    
            </figure>
            ))
        }
        </div>
    </div>
    </div>
  )
}

export default Review