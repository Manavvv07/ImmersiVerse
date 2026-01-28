import { testimonials } from "../constants"

const Testimonials = () => {
  return (
    <div className="mt-20 tracking-wide">
        <h2 className="text-2xl sm:text-5xl lg:text-5xl text-center my-8 tracking-wide">What people are saying</h2>
        <div className="flex flex-wrap justify-center">
            {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
                    <div className="bg-neutral rounded-md p-6 text-md border border-neutral-700 font-extralight h-full flex flex-col justify-between cursor-pointer transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl hover:bg-black">
                        <p>{testimonial.text}</p>
                        <div className="flex mt-8 items-start">
                            <img className="w-12 h-12 mr-6 rounded-full border border-neutral-300" src={testimonial.image} alt={testimonial.user} />
                            <div>
                                <h6>{testimonial.user}</h6>
                                <span className="text-sm fornt-normal italic text-neutral-300">{testimonial.company}</span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Testimonials