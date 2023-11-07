import { Code } from "@phosphor-icons/react";


const InfiniteCaraousel = () => {
    const inputsSkills = [
        {
            id: "skill1",
            icon: "../../public/icon/icons8-html.svg",
            content: "HTML",
        },
        {
            id: "skill2",
            icon: "icon1",
            content: "CSS",
        },
        {
            id: "skill3",
            icon: "icon1",
            content: "Javascript",
        },
        {
            id: "skill4",
            icon: "iconakhir",
            content: "Bootstrap",
        },
        {
            id: "skill5",
            icon: "iconakhir",
            content: "Tailwind CSS",
        },
        {
            id: "skill6",
            icon: "iconakhir",
            content: "SaSS",
        },
        {
            id: "skill7",
            icon: "icon1",
            content: "UI/UX Design",
        },
        {
            id: "skill8",
            icon: "iconakhir",
            content: "React",
        },
    ];

    return (
        <>
            <div className="">
                <div className="">
                    <div className="flex items-center gap-2">
                        <Code size={32} color="#171717" />
                        <h1 className="text-2xl font-semibold">Skills</h1>
                    </div>
                    <p className="text-slate-500 mt-2">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Fuga sunt cupiditate ducimus quibusdam non qui
                        veniam laborum quas odio.
                    </p>
                </div>
                <div className="mt-4 overflow-hidden relative h-16 w-full">
                    <div className="flex absolute left-0 justify-center items-center gap-4 h-full w-[200%] animate-[scrollLeft_20s_linear_infinite] lg:animate-[scrollLeft_40s_linear_infinite]">
                        {inputsSkills.map((input) => (
                            <div
                                key={input.id}
                                className="flex justify-center items-start w-60 px-4 py-3 border rounded"
                            >
                                <div className={`bg-[url(${input.icon})]`}></div>
                                <div>{input.content}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="overflow-hidden relative mt-2 h-20 w-full">
                    <div className="flex absolute left-0 justify-center items-center gap-4 h-full w-[200%] animate-[scrollRight_20s_linear_infinite] lg:animate-[scrollRight_40s_linear_infinite]">
                        {inputsSkills.map((input) => (
                            <div
                                key={input.id}
                                className="flex flex-row justify-center items-start w-60 px-4 py-3 border rounded"
                            >
                                <div>{input.icon}</div>
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
