import { Code } from "@phosphor-icons/react";

const InfiniteCaraousel = () => {
    const inputsSkills = [
        {
            id: "skill1",
            icon: "../../icon/icons8-html.svg",
            content: "HTML",
        },
        {
            id: "skill2",
            icon: "../../icon/icons8-css.svg",
            content: "CSS",
        },
        {
            id: "skill3",
            icon: "../../icon/icons8-javascript.svg",
            content: "Javascript",
        },
        {
            id: "skill4",
            icon: "../../icon/icons8-bootstrap.svg",
            content: "Bootstrap",
        },
        {
            id: "skill5",
            icon: "../../icon/icons8-tailwindcss.svg",
            content: "Tailwind CSS",
        },
        {
            id: "skill6",
            icon: "../../icon/icons8-sass.svg",
            content: "SaSS",
        },
        {
            id: "skill7",
            icon: "",
            content: "UI/UX Design",
        },
        {
            id: "skill8",
            icon: "",
            content: "React",
        },
    ];

    return (
        <>
            <div className="mt-6">
                <div className="">
                    <div className="flex items-center gap-2">
                        <Code size={32} color="#171717" />
                        <h1 className="text-2xl font-semibold">Skills</h1>
                    </div>
                    <p className="text-slate-500 mt-2">
                        About of my skill, hardskill and softskill to you know more about me 
                    </p>
                </div>
                <div className="mt-4 overflow-hidden relative h-20 w-full">
                    <div className="flex absolute left-0 justify-center items-center gap-4 h-full w-[300%] animate-[scrollLeft_20s_linear_infinite] lg:animate-[scrollLeft_40s_linear_infinite]">
                        {inputsSkills.map((input) => (
                            <div
                                key={input.id}
                                className="flex justify-center items-start px-4 py-3 border rounded"
                            >
                                <img src={input.icon} className="w-6 h-6 mx-2" alt="" />
                                <div>{input.content}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="overflow-hidden relative mt-2 h-20 w-full px-6">
                    <div className="flex absolute left-0 justify-center items-center gap-4 h-full w-[300%] animate-[scrollRight_20s_linear_infinite] lg:animate-[scrollRight_40s_linear_infinite]">
                        {inputsSkills.map((input) => (
                            <div
                                key={input.id}
                                className="flex flex-row justify-center items-start px-4 py-3 border rounded"
                            >
                                <img src={input.icon} className="w-6 h-6 mx-2" alt="" />
                                <div>{input.content}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default InfiniteCaraousel;
