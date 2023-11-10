import SideBar from "../components/SideBar"
import About from "./About"
import Project from "./Project"
import Article from "./Article"
import Footer from "./Footer"

const Dashboard = () => {
    return (
        <>
            <div className="container mx-auto">
                <div className="px-5 grid grid-cols-1 lg:grid-cols-4 lg:max-h-screen overflow-hidden">
                    <div id="sideBar" className="col-span-1 justify-center items-start hidden md:flex">
                        <SideBar></SideBar>
                    </div>
                    <div id="mainScroll" className="col-span-3  md:mt-0">
                        <About></About>
                        <Project></Project>
                        <Article></Article>
                        <Footer></Footer>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard