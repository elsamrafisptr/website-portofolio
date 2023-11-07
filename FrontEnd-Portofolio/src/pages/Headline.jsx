import React from "react";
import Navbar from "../components/Navbar";

const Headline = () => {
    return (
        <>
            <div className="bg-lime-50 bg-[url(../../heroBg.webp)] bg-cover bg-bottom">
                <div className="container mx-auto ">
                    <Navbar />
                    <div className="flex justify-center items-center min-h-screen pt-16 px-5">
                        <div className=" w-full h-[85vh] rounded-lg md:rounded-3xl grid grid-cols-1 md:grid-cols-2 relative gap-6 items-end px-6 py-6">
                            <div>
                                <h1 className="font-bold text-5xl text-white">
                                    I'am
                                </h1>
                                <h1 className="font-bold text-5xl text-white">
                                    Elsam Rafi S
                                </h1>
                            </div>
                            <h2 className="text-right text-xl text-white font-medium">
                                I AM SAM BASED IN INDONESIA, I DESIGN AND DEVELOP DIGITAL PRODUCT WITH PRIORITY OF USER AND ACCESSIBILTY OF THE PRODUCT TO SUCCED THE BUSSINESS PURPOSE. I HAVE +- 3 YEARS OF EXPERIENCE LEADING, DESIGN, AND DEVELOP IN ALL AREAS OF DIGITAL. I LOVE MINIMALISM AND GOOD FUNTIONALITY PRODUCT.
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Headline;
