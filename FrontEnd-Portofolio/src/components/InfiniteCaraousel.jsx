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
            icon: "../../icon/icons8-figma.svg",
            content: "UI/UX Design",
        },
        {
            id: "skill8",
            icon: "../../icon/icons8-react-native.svg",
            content: "React",
        },
        {
            id: "skill9",
            icon: "../../icon/icons8-python.svg",
            content: "Pyhton",
        },
        {
            id: "skill10",
            icon: "../../icon/icons8-java.svg",
            content: "Java OOP",
        },


        {
            id: "skill99",
            icon: "../../icon/icons8-html.svg",
            content: "HTML",
        },
        {
            id: "skill98",
            icon: "../../icon/icons8-css.svg",
            content: "CSS",
        },
        {
            id: "skill97",
            icon: "../../icon/icons8-javascript.svg",
            content: "Javascript",
        },
        {
            id: "skill96",
            icon: "../../icon/icons8-bootstrap.svg",
            content: "Bootstrap",
        },
        {
            id: "skill95",
            icon: "../../icon/icons8-tailwindcss.svg",
            content: "Tailwind CSS",
        },
        {
            id: "skill94",
            icon: "../../icon/icons8-sass.svg",
            content: "SaSS",
        },
        {
            id: "skill93",
            icon: "../../icon/icons8-figma.svg",
            content: "UI/UX Design",
        },
        {
            id: "skill92",
            icon: "../../icon/icons8-react-native.svg",
            content: "React",
        },
        {
            id: "skill91",
            icon: "../../icon/icons8-python.svg",
            content: "Pyhton",
        },
        {
            id: "skill90",
            icon: "../../icon/icons8-java.svg",
            content: "Java OOP",
        },
    ];

    return (
        <>
            <div className="mt-6">
                <div className="">
                    <div className="flex items-center gap-2">
                        <Code size={32} color="#171717" />
                        <h1 className="text-2xl font-semibold ">Skills</h1>
                    </div>
                    <p className="text-slate-500 mt-2">
                        About of my skill, hardskill and softskill to you know more about me 
                    </p>
                </div>
                <div className="mt-4 overflow-hidden relative h-20 w-full">
                    <div className="flex absolute left-0 justify-center items-center gap-4 h-full w-[700%] lg:w-[300%] animate-[scrollLeft_24s_linear_infinite] lg:animate-[scrollLeft_24s_linear_infinite]">
                        {inputsSkills.map((input) => (
                            <div
                                key={input.id}
                                className="flex justify-center items-start px-5 py-2.5 border rounded-full shadow-md"
                            >
                                <img src={input.icon} className="w-6 h-6 mx-2" alt="" />
                                <div>{input.content}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="overflow-hidden relative mt-2 h-16 w-full px-6">
                    <div className="flex absolute left-0 justify-center items-center gap-4 h-full w-[700%] lg:w-[300%] animate-[scrollRight_24s_linear_infinite] lg:animate-[scrollRight_24s_linear_infinite]">
                        {inputsSkills.map((input) => (
                            <div
                                key={input.id}
                                className="flex flex-row justify-center items-start px-5 py-2.5 border rounded-full shadow-md"
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
