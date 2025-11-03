import { BrowserRouter as Router, Routes, Route } from "react-router"
import Navbar from "./components/Navbar";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import ProjectIndex from "@/pages/projects/Index";


export default function App() {
    return (
        <Router>
            <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/projects" element={<ProjectIndex />} />

            <Route path="/*" element={<PageNotFound />} />
        </Routes>
            <Navbar />
        </Router>
    );
};