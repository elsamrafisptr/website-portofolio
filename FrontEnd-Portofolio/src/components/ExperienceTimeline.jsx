import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";

const ExperienceTimeline = () => {
    const inputsExperience = [
        {
            id: "1",
            position: "Posisi",
            compName: "Nama Perusahaan",
            linkComp: "https://www.google.com/",
            timeSpace: "Apr 2022 - Present",
            duration: "+1 years",
        },
        {
            id: "2",
            position: "Posisi",
            compName: "Nama Perusahaan",
            linkComp: "https://www.google.com/",
            timeSpace: "Apr 2022 - Present",
            duration: "+1 years",
        },
        {
            id: "3",
            position: "Posisi",
            compName: "Nama Perusahaan",
            linkComp: "https://www.google.com/",
            timeSpace: "Apr 2022 - Present",
            duration: "+1 years",
        },
    ];
    return (
        <>
            <VerticalTimeline>
                {inputsExperience.map((input) => (
                    <VerticalTimelineElement
                        key={input.id}
                        className="vertical-timeline-element--work"
                        date="2011 - present"
                    >
                        <div className="w-20 h-20 bg-slate-100"></div>
                        <div>
                            <h1 className="font-medium text-lg">
                                {input.position}
                            </h1>
                            <a href={input.linkComp}>{input.compName}</a>
                            <p>{input.timeSpace}</p>
                            <p>{input.duration}</p>
                        </div>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
            <div className="mt-6">
                {inputsExperience.map((input) => (
                    <div
                        key={input.id}
                        className="flex items-center gap-4 px-5 py-4 border rounded-lg mt-4"
                    >
                        <div className="w-20 h-20 bg-slate-100"></div>
                        <div>
                            <h1 className="font-medium text-lg">
                                {input.position}
                            </h1>
                            <a href={input.linkComp}>{input.compName}</a>
                            <p>{input.timeSpace}</p>
                            <p>{input.duration}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default ExperienceTimeline;
