import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./scenes/home";
import About from "./scenes/about";
import Skills from "./scenes/skills";
import Footer from "./scenes/footer";
import { SelectedPage } from "./shared/types";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  console.log(selectedPage);
  return (
    <div className="app bg-gray-20 ">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <About setSelectedPage={setSelectedPage} />
      <Skills setSelectedPage={setSelectedPage} />
      {/* <Testimonials setSelectedPage={setSelectedPage} /> */}
      {/* <FAQ setSelectedPage={setSelectedPage} /> */}
      {/* <ContactUs setSelectedPage={setSelectedPage} /> */}
      <Footer />
    </div>
  );
}

export default App;
