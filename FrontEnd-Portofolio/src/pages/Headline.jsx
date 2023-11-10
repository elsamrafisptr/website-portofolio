import React from "react";
import Navbar from "../components/Navbar";

const Headline = () => {
    return (
        <>
            <div className="bg-lime-50 bg-[url(../../heroBg.webp)] bg-cover bg-bottom">
                <div className="container mx-auto">
                    <Navbar />
                    <div className="flex justify-center items-center min-h-screen pt-16 px-5 ">
                        <div className=" w-full h-[85vh] rounded-lg md:rounded-3xl grid grid-cols-1 md:grid-cols-2 relative gap-6 items-end px-6 py-6">
                            <div>
                                <h1 className="font-classicFont text-2xl text-white">creative</h1>
                                <h1 className="tracking-wider font-classicFont font-bold text-7xl md:text-[96px] text-white">
                                    Designer &
                                </h1>
                                <h1 className="tracking-wider font-classicFont font-bold text-7xl md:text-[96px] text-white">
                                    Developer
                                </h1>
                            </div>
                            <h2 className="text-right text-xl text-white font-medium">
                                I'am based in Indonesia, I love to design and develop digital product to get the bussiness goals and the market goals. I have 1 years of experiences leading, designing, and developing projects in all areas of digital. Happy to see you in our next cooperations ✌
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Headline;
