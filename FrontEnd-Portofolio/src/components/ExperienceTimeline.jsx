
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
            <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-4">
                {inputsExperience.map((input) => (
                    <div key={input.id} 
                        className="flex items-center gap-4 px-5 py-4 border rounded-lg 
                        hover:scale-105 transition-all duration-300 hover:bg-stone-50
                        hover:border-stone-500 hover:shadow-lg"
                        >
                        <div className="w-16 h-16 flex justify-center items-center">
                            <img src={input.image} alt={input.alt} className="w-20" />
                        </div>
                        <div>
                            <h1 className="font-semibold text-lg text-slate-900">
                                {input.position}
                            </h1>
                            <a className="text-slate-900 underline" href={input.linkComp}>{input.compName}</a>
                            <p className="text-slate-600">{input.timeSpace}</p>
                            <p className="italic text-slate-600 text-sm font-medium">~ {input.duration}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default ExperienceTimeline;
