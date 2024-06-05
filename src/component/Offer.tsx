const Offer = () => {
    const offers = [
        {
            title:"Experience",
            subtitle:"Lorem ipsum dolor sit amet, consec tetur adipis cing elit. Ut elit tellus, luctus nec ullam corper mattis, pulvinar dapibus."
        },
        {
            title:"Education",
            subtitle:"Lorem ipsum dolor sit amet, consec tetur adipis cing elit. Ut elit tellus, luctus nec ullam corper mattis, pulvinar dapibus."
        },
        {
            title:"Certificate",
            subtitle:"Lorem ipsum dolor sit amet, consec tetur adipis cing elit. Ut elit tellus, luctus nec ullam corper mattis, pulvinar dapibus."
        }
    ]
  return (
    <div className="bg-primary-600 z-[999] opacity-90">
        <div className="max-w-screen-xl mx-auto grid grid-cols-3 py-20 gap-8 min-w-[50%]">
           {
            offers.map((offer, id) => (
            <div key={id.toString()}>
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