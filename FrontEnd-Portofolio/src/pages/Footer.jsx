const Footer = () => {
    const SocialMedia = [
        {
            name: "instagram",
            alt: "instagram",
            link: "www.instagram.com/elsamm___",
            icon: "../../icon/icons8-instagram.svg"
        },
        {
            name: "linkedin",
            alt: "linkedin",
            link: "www.linkedin.com",
            icon: "../../icon/icons8-linkedin.svg"
        },
        {
            name: "telegram",
            alt: "telegram",
            link: "www.telegram.com",
            icon: "../../icon/icons8-telegram.svg"
        },
    ]

    return (
        <>
            <div className="container mx-auto pb-6 min-h-screen relative">
                <div className="px-5">
                    <div className="pt-20 grid grid-cols-1 md:grid-cols-2">
                        <div className="bg-[url(../../heroBg.webp)]  rounded-lg w-full min-h-full bg-cover bg-bottom p-4 shadow-xl">
                            <div className="flex items-end flex-col gap-2 drop">

                                <h1 className="text-7xl font-classicFont text-white">
                                    Let's Connect
                                </h1>
                                <p className="text-white font-semibold">Find me on : </p>
                                <div className="flex gap-2">
                                    {SocialMedia.map((data) => (
                                        <a key={data.name} href={data.link}><img src={data.icon} alt={data.alt} className="h-8 w-8 "/></a>
                                    ))}
                                </div>
                            </div>

                        </div>
                        <div className="mt-4 bg-slate-200 p-4 rounded-md ">
                            <form action="" className="grid grid-cols-2 gap-2 backdrop-blur-sm">
                                <label
                                    htmlFor="Name"
                                    className="relative block overflow-hidden rounded-md border bg-white px-3 pt-3 shadow-sm focus-within:border-amber-500 focus-within:ring-1 focus-within:ring-amber-500"
                                >
                                    <input
                                        type="text"
                                        id="Name"
                                        placeholder="Your name"
                                        className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                                    />

                                    <span
                                        className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
                                    >
                                        Your name
                                    </span>
                                </label>
                                <label
                                    htmlFor="UserEmail"
                                    className="relative block overflow-hidden rounded-md border bg-white px-3 pt-3 shadow-sm focus-within:border-amber-500 focus-within:ring-1 focus-within:ring-amber-500"
                                >
                                    <input
                                        type="email"
                                        id="UserEmail"
                                        placeholder="Email"
                                        className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                                    />

                                    <span
                                        className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
                                    >
                                        Email
                                    </span>
                                </label>

                                <label
                                    htmlFor="textDesc"
                                    className="relative block overflow-hidden rounded-md border bg-white px-3 pt-3 shadow-sm focus-within:border-amber-500 focus-within:ring-1 focus-within:ring-amber-500 col-span-2"
                                >
                                    <textarea name="textDesc" id="tesxtDesc" cols="10" rows="5" className="peer h-24 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm">

                                    </textarea>
                                </label>
                                
                                <button className="bg-white col-start-2 px-3 py-2 rounded shadow-sm focus-within:border-amber-500 focus-within:ring-1 focus-within:ring-amber-500">Send</button>
                            </form>
                        </div>
                        <p className="text-xs font-medium text-slate-700 bottom-2 absolute">Copyright 2023 by Elsam Rafi Saputra. All Right Reserved </p>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer