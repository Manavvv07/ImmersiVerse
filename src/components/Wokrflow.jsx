import { CheckCircle2 } from "lucide-react";
import { checklistItems } from "../constants";
const Wokrflow = () => {
  return (
    <div className="">
        <h2 className="text-2xl sm:text-5xl lg:text-5xl text-center tracking-wide">
            Accelerate your 
            <br className="block sm:hidden" />
            <span className="bg-linear-to-r from-cyan-300 to-blue-400 text-transparent bg-clip-text">
                {" "}development workflow
            </span>
        </h2>
        <div className="flex flex-wrap justify-center">
            <div className="p-2 w-full lg:w-1/2"> 
                <img src="/assets/code.jpg" alt="code" />
            </div>
            <div className="mt-10 pt-12 w-full lg:w-1/2">
                {checklistItems.map((item, index) => (
                    <div key={index} className="flex mb-12">
                        <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                            <CheckCircle2/>
                        </div>
                        <div>
                            <h5 className="mt-1 mb-2 text-xl">
                                {item.title}
                            </h5>
                            <p className="text-md text-neutral-500 leading-relaxed max-w-[26ch] sm:max-w-sm lg:max-w-[50ch]">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Wokrflow