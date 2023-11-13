import { RocketLaunch } from "@phosphor-icons/react";
import SlideShow from "../components/SlideShow";

const Project = () => {
    const inputs = [
        {
            id: "pj1",
            img: "",
            alt: "",
            title: "Fish Auction Mobile App",
            desc: "To support the fisherman to get more money",
            date: "10 August 2022"
        },
        {
            id: "pj2",
            img: "",
            alt: "",
            title: "Schedule and Shopping List Feature",
            desc: "To increase the users satisfaction",
            date: "31 October 2023"
        },
        {
            id: "pj3",
            img: "",
            alt: "",
            title: "title 3",
            desc: "desc 3",
            date: "date 3"
        },
    ]

    return (
        <>
            <div className="container mx-auto pb-6 min-h-screen">
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
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Fuga sunt cupiditate ducimus
                                quibusdam non qui veniam laborum quas odio.
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
