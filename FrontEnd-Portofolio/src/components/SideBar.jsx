import { Rocket, Newspaper } from "@phosphor-icons/react"

const SideBar = () => {
    const inputs = [
        {
            
            id: "nav1",
            icon: "",
            content: "Home",
        },
        {
            id: "nav2",
            icon: "",
            content: "About",
        },
        {
            id: "nav3",
            icon: "",
            content: "Project",
        },
        {
            id: "nav4",
            icon: "",
            content: "Article",
        },
        {
            id: "nav5",
            icon: "",
            content: "Contact",
        },
    ]

    return (
        <>
            <aside className="flex flex-col w-full h-[95vh] px-4 py-8 overflow-y-auto bg-white border-r border m-4 rounded-lg">
                <div className="flex flex-col items-center mt-6 -mx-2">
                    <img className="object-cover w-24 h-24 mx-2 rounded-full" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="avatar" />
                    <h4 className="mx-2 mt-2 font-medium text-gray-800 ">John Doe</h4>
                    <p className="mx-2 mt-1 text-sm font-medium text-gray-600">john@example.com</p>
                </div>

                <div className="flex flex-col justify-between flex-1 mt-6 ">
                    <nav className="flex flex-col gap-2">
                        {inputs.map((input => (
                            <a key={input.id} className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg" href="#">
                                <div>{input.icon}</div>

                                <span className="mx-4 font-medium">{input.content}</span>
                            </a>
                        )))}

                    </nav>
                </div>
            </aside>
        </>
    )
}

export default SideBar