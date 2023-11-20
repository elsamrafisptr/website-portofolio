import React, { useState } from "react"

const delay = 2500

const SlideShow = () => {
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
        {
            id: "pj4",
            img: "",
            alt: "",
            title: "title 4",
            desc: "desc 4",
            date: "date 4"
        },
        {
            id: "pj5",
            img: "",
            alt: "",
            title: "title 5",
            desc: "desc 5",
            date: "date 5"
        },
    ]

    const [index, setIndex] = useState(0)

    React.useEffect(() => {
        setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === inputs.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );

        return () => { };
    }, [index])

    
    return (
        <>
            <div className="mt-6 slideshow my-0 mx-auto overflow-hidden">
                <div className="slideshowSlider whitespace-nowrap" style={{ transform: `translate3d(${-index * 336}px, 0, 0)`, transition: "ease 1250ms"}}>
                    <div className="slide flex flex-row">
                        {inputs.map((input) => (
                            <a key={input.id} href="" className="cursor-pointer mr-4">
                                <img src={input.id} alt={input.alt} className="w-80 max-w-xs h-32 bg-sky-200 rounded border-none" />
                                <div className="mt-2">
                                    <h1 className="font-semibold text-lg">{input.title}</h1>
                                    <p className="">{input.desc}</p>
                                    <p className="text-sm">{input.date}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            <div className="slideshowDots text-center">
                {inputs.map((_, idx) => (
                    <div key={idx} className={`${index === idx ? "bg-slate-900" : ""} slideshowDot inline-block w-3 h-3 rounded-full cursor-pointer mt-4 mx-2 bg-slate-300`}></div>
                ))}
            </div>
        </>
    )
}

export default SlideShow
