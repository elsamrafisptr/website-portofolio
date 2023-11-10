import InfiniteCaraousel from "../components/InfiniteCaraousel";
import { Briefcase } from "@phosphor-icons/react";
import "react-vertical-timeline-component/style.min.css";
import ExperienceTimeline from "../components/ExperienceTimeline";

const About = () => {
    return (
        <>
            <div className="container mx-auto py-6">
                <div className="px-5">
                    <div className="mt-6">
                        <div>
                            <div className="flex items-center gap-2">
                                <Briefcase size={32} color="#171717" />
                                <h1 className="text-2xl font-semibold">
                                    Experience
                                </h1>
                            </div>
                            <p className="text-slate-500 mt-2">
                                All about my experiences dan my journey in this scope of information technology era
                            </p>
                        </div>
                    </div>
                    <ExperienceTimeline></ExperienceTimeline>
                    <InfiniteCaraousel></InfiniteCaraousel>
                </div>
            </div>
        </>
    );
};

export default About;
