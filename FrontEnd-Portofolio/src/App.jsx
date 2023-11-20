import Headline from "./pages/Headline";
import About from "./pages/About";
import Project from "./pages/Project";
import Footer from "./pages/Footer";

export default function App() {
    return (
        <main className="mx-auto">
            <Headline></Headline>
            <About></About>
            <Project></Project>
            <Footer></Footer>
        </main>
    );
}
