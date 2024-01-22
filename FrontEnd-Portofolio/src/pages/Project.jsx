import { RocketLaunch } from "@phosphor-icons/react";
import SlideShow from "../components/SlideShow";

const Project = () => {

    return (
        <>
            <div className="container mx-auto pb-6">
                <div className="px-5">
                    <div className="pt-20">
                        <div>
                        <div className="flex justify-between items-end">
                                <div className="flex items-center gap-2">
                                    <RocketLaunch size={32} color="#171717" />
                                    <h1 className="text-2xl font-semibold">
                                        Project
                                    </h1>
                                </div>
                                <a href="" className="text-sky-600 underline">Show More</a>
                            </div>
                            <p className="text-slate-500 mt-2">
                                List of my project that can describe my logic, my skill and my expertise in programming
                            </p>
                        </div>
                        <SlideShow></SlideShow>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Project;
