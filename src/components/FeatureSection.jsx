import { features } from "../constants"
const FeatureSection = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-200">
        <div className="text-center">
            <span className="bg-neutral-900 text-cyan-500 rounded-full h-6 text-md font-medium px-2 py-1 uppercase">
                features 
            </span>
            <h2 className="text-2xl sm:text-5xl lg:text-5xl mt-7 lg:mt-15 tracking-wide">
                Easily build immersive 
                <br className="block sm:hidden" />
                <span className="bg-linear-to-r from-cyan-300 to-blue-400 text-transparent bg-clip-text">
                    {" "}VR experiences
                </span>
            </h2>
        </div>
        <div className="flex flex-wrap mt-10 lg:mt-20">
            {features.map((feature, index) => (
                <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
                    <div className="flex items-start ml-4">
                        <div className="flex mx-6 h-10 w-10 pl-2 bg-neutral-900 text-cyan-500 justify-center items-center rounded-full">
                            {feature.icon}
                        </div>
                        <div className="mt-0.5">
                            <h5 className="mt-1 mb-5 text-xl">
                                {feature.text}
                            </h5>
                            <p className="text-md mb-20 text-neutral-500 leading-relaxed max-w-[26ch] sm:max-w-sm lg:max-w-[30ch]">
                                {feature.description}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default FeatureSection