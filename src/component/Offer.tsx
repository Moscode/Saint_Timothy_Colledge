const Offer = () => {
    const offers = [
        {
            title:"Experience",
            subtitle:"The best form of e-learning platform for students in senior secondary school"
        },
        {
            title:"Education",
            subtitle:"Build yourself on core basic science subjects to improve your abilities and better preparation for your examination"
        },
    ]
  return (
    <div className="bg-primary-600 z-[999] opacity-90">
        <div className="max-w-screen-lg mx-auto grid grid-cols-2 py-20 gap-52">
           {
            offers.map((offer, id) => (
            <div key={id.toString()} className="w-[80%]">
            <span className="text-primary-700 text-4xl transform -skew-x-12 flex pb-4">
                <span className="px-2">|</span>
                <span className="px-2">|</span>
                <span className="px-2">|</span>
                <span className="px-2">|</span>
            </span>
            <h1 className="text-2xl text-white font-semibold">{offer.title}</h1>
            <p className="text-white text-lg pt-8">{offer.subtitle}</p>
            </div>
            ))
            }
        </div>
        <div className="text-white w-[20%] h-[100%]">

        </div>
    </div>
  )
}

export default Offer