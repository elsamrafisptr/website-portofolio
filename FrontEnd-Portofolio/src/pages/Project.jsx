import { RocketLaunch } from "@phosphor-icons/react";

const Project = () => {
    return (
        <>
            <div className="container mx-auto pb-6">
                <div className="px-5">
                    <div className="mt-6">
                        <div>
                            <div className="flex items-center gap-2">
                                <RocketLaunch size={32} color="#171717" />
                                <h1 className="text-2xl font-semibold">
                                    Project
                                </h1>
                            </div>
                            <p className="text-slate-500 mt-2">
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Fuga sunt cupiditate ducimus
                                quibusdam non qui veniam laborum quas odio.
                            </p>
                        </div>
                        <div className="overflow-hidden flex flex-row w-[960px]">
                            <a
                                href="#"
                                class="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
                            >
                                <span
                                    class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
                                ></span>

                                <div className="float-right-right bg-sky-400 w-full h-12">
                                    <dl class=" text-right mt-6 flex gap-4 sm:gap-6">
                                        <div class="flex flex-col-reverse">
                                            <dt class="text-sm font-medium text-gray-600">Published</dt>
                                            <dd class="text-xs text-gray-500">31st June, 2021</dd>
                                        </div>
                                    </dl>
                                </div>

                                <div class="sm:flex sm:justify-between sm:gap-4">
                                    <div>
                                        <h3 class="text-lg font-bold text-gray-900 sm:text-xl">
                                            Building a SaaS product as a software developer
                                        </h3>
                                    </div>

                                    <div class="hidden sm:block sm:shrink-0">
                                        <img
                                            alt="Paul Clapton"
                                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                                            class="h-16 w-16 rounded-lg object-cover shadow-sm"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. A nobis sed expedita ipsa! </p>
                                </div>
                            </a>
                            <a
                                href="#"
                                class="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
                            >
                                <span
                                    class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
                                ></span>

                                <div className="float-right-right bg-sky-400 w-full h-12">
                                    <dl class=" text-right mt-6 flex gap-4 sm:gap-6">
                                        <div class="flex flex-col-reverse">
                                            <dt class="text-sm font-medium text-gray-600">Published</dt>
                                            <dd class="text-xs text-gray-500">31st June, 2021</dd>
                                        </div>
                                    </dl>
                                </div>

                                <div class="sm:flex sm:justify-between sm:gap-4">
                                    <div>
                                        <h3 class="text-lg font-bold text-gray-900 sm:text-xl">
                                            Building a SaaS product as a software developer
                                        </h3>
                                    </div>

                                    <div class="hidden sm:block sm:shrink-0">
                                        <img
                                            alt="Paul Clapton"
                                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                                            class="h-16 w-16 rounded-lg object-cover shadow-sm"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. A nobis sed expedita ipsa! </p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Project;
