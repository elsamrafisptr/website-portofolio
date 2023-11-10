import { Newspaper } from "@phosphor-icons/react";

const Article = () => {
    return (
        <>
            <div className="container mx-auto pb-6">
                <div className="px-5">
                    <div className="mt-12">
                        <div>
                            <div className="flex justify-between items-end">
                                <div className="flex items-center gap-2">
                                    <Newspaper size={32} color="#171717" />
                                    <h1 className="text-2xl font-semibold">
                                        Article
                                    </h1>
                                </div>
                                <a href="" className="text-sky-600">Show More</a>
                            </div>
                            <p className="text-slate-500 mt-2">
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Fuga sunt cupiditate ducimus
                                quibusdam non qui veniam laborum quas odio.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Article;
