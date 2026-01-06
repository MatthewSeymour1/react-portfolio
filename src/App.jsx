import { BrowserRouter as Router, Routes, Route  } from 'react-router'
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';
import Aurora from '@/components/animations/Aurora.jsx';

// pages
// import Home from './pages/Home';
// import About from './pages/About';
// import Contact from './pages/Contact'
// import PageNotFound from './pages/PageNotFound';
// import ProjectIndex from '@/pages/projects/Index';

export default function App() {

  const [activeSection, setActiveSection] = useState('');
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('dark');
    return saved === null ? true : saved === 'true';
  });

  useEffect(() => {
    console.log("Dark Mode:", isDark);

    document.documentElement.classList.toggle('dark', isDark);

    localStorage.setItem('dark', isDark);

  }, [isDark]);

  useEffect(() => {
    const sections = ['intro', 'about', 'projects', 'contact'];
    const targets = sections.map(section => document.getElementById(section));
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: 0.3 });
  
    targets.forEach(el => observer.observe(el));
  
    return () => observer.disconnect();
  }, []);
  

  const toggleTheme = () => setIsDark(currentMode => !currentMode);

  return (
    
    <div className="min-h-screen text-foreground relative">
        <div className="fixed inset-0 bg-background -z-20"></div>
        <div className="fixed inset-0 -z-10">
            <Aurora
                colorStops={isDark ? ["#3A29FF", "#FF94B4", "#FF3232"] : ["#FFF1E0", "#FFD6A5", "#FFC6A3"]}
                blend={isDark ? 0.5 : 1.4}
                amplitude={isDark ? 1.0 : 0.6}
                speed={0.5}
            />
        </div>

      <Navbar activeSection={activeSection} />
      <main className='max-w-7xl mx-auto px-6 sm:px-8 lg:px-16'>
        <Intro />
        <About />
        <Projects />
        <Contact />
        <Footer toggleTheme={toggleTheme} isDark={isDark} />
      </main>

      <div className='fixed bottom-0 left-0 h-24 w-full bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none'></div>
    </div>
    // <Router>
    //   <Navbar />
    //   <Routes>
    //     <Route path='/' element={<Home />} />
    //     <Route path='/about' element={<About />} />
    //     <Route path='/contact' element={<Contact />} />

    //     <Route path='/projects' element={<ProjectIndex />} />


    //     <Route path='*' element={<PageNotFound />} />
    //   </Routes>

    //   <Navbar />

    // </Router>
  );
}