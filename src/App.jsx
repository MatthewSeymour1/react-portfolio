import { BrowserRouter as Router, Routes, Route } from "react-router"
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


// Pages
import Home from "./pages/Home";
import About from "./pages/About";
// import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import ProjectIndex from "@/pages/projects/Index";



export default function App() {
    return (

        <div className="min-h-screen bg-background text-foreground relative">
            <Navbar />
            <main className="max-w-4xl mx-auto ">
                <Intro />
                <Projects />
                <Contact />
                <Footer />
            </main>
        </div>


        // <Router>
        //     <Navbar />
        // <Routes>
        //     <Route path="/" element={<Home />} />
        //     <Route path="/about" element={<About />} />
        //     <Route path="/contact" element={<Contact />} />

        //     <Route path="/projects" element={<ProjectIndex />} />

        //     <Route path="/*" element={<PageNotFound />} />
        // </Routes>
        //     <Navbar />
        // </Router>


    );
};