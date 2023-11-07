import InfiniteCaraousel from "../components/InfiniteCaraousel";
import { Briefcase } from "@phosphor-icons/react";
import "react-vertical-timeline-component/style.min.css";

const About = () => {
    return (
        <>
            <div className="container mx-auto min-h-screen">
                <div className="px-5">
                    <div className="mt-12">
                        <div>
                            <div className="flex items-center gap-2">
                                <Briefcase size={32} color="#171717" />
                                <h1 className="text-2xl font-semibold">
                                    Experience
                                </h1>
                            </div>
                            <p className="text-slate-500 mt-2">
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Fuga sunt cupiditate ducimus
                                quibusdam non qui veniam laborum quas odio.
                            </p>
                        </div>
                    </div>
                    <InfiniteCaraousel></InfiniteCaraousel>
                </div>
            </div>
        </>
    );
};

export default About;
