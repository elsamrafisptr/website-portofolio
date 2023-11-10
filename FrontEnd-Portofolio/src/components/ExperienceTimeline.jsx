
const ExperienceTimeline = () => {
    const inputsExperience = [
        {
            id: "1",
            image: "../../telu-logo.png",
            alt: "Logo Telkom University",
            position: "Undergraduate Informatic Student",
            compName: "Telkom Univeristy",
            linkComp: "https://telkomuniversity.ac.id/",
            timeSpace: "September 2021 - Present",
            duration: "GAP : 3.73/4.00",
        },
        {
            id: "2",
            image: "../../rainbow-logo.png",
            alt: "Logo Rainbow Kids Bandung",
            position: "English and Math Teacher",
            compName: "Rainbow Kids Bandung",
            linkComp: "",
            timeSpace: "September 2022 - May 2023",
            duration: "8 Months"
        },
        {
            id: "3",
            image: "../../team-logo.jpg",
            alt: "Logo TEAM",
            position: "Member of Design and Publication Team",
            compName: "Telkom University Education Movement(TEAM)",
            linkComp: "",
            timeSpace: "November 2021 - November 2022",
            duration: "1 Year"

        },
    ];
    return (
        <>
            <div className="mt-6">
                {inputsExperience.map((input) => (
                    <div className="grid grid-cols-5">
                        <div className="col-span-1 w-1 bg-black">
                            
                        </div>
                        <div key={input.id} className="flex items-center gap-4 px-5 py-4 border rounded-lg mt-4 col-span-4">
                            <div className="w-16 h-16 flex justify-center items-center">
                                <img src={input.image} alt={input.alt} className="w-20" />
                            </div>
                            <div>
                                <h1 className="font-medium text-lg">
                                    {input.position}
                                </h1>
                                <a href={input.linkComp}>{input.compName}</a>
                                <p>{input.timeSpace}</p>
                                <p>{input.duration}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default ExperienceTimeline;
