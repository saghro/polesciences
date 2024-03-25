import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Training from "./components/Training/Training";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import { useEffect, useState } from "react";

function App() {
  const [showScrollBtn, setShowScrollBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollBtn(true);
      } else {
        setShowScrollBtn(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const slides = [
    {
      image:"../../public/image.png",
      title: "Optimize & Elevate Towards Growth and Evolution ",
      text: `Discover a world of possibilities with our comprehensive range of services and studies. 
      From cutting-edge design to efficient project management,
       we provide the tools and expertise to bring your ideas to life. 
      Dive into the realm of front-end development, 
      backend development, mobile app development, 
      `,
      buttonText: "Get Started",
    },
    {
      image:"../../public/image2.png",
      title: "Optimize & Elevate Towards Growth and Evolution ",
      text: `Discover a world of possibilities with our 
      comprehensive range of services and studies. 
      From cutting-edge design to efficient project management,
       we provide the tools and expertise to bring your ideas to life. 
      Dive into the realm of front-end development, 
      backend development, mobile app development, 
    `,
      buttonText: "Get Started",
    },
    {
      image:"../../public/image3.png",
      title: "Optimize & Elevate Towards Growth and Evolution ",
      text: `Discover a world of possibilities with our 
      comprehensive range of services and studies. 
      From cutting-edge design to efficient project management,
      we provide the tools and expertise to bring your ideas to life. 
      Dive into the realm of front-end development, 
      backend development, mobile app development, 
   `,
      buttonText: "Get Started",
    },
  ];
  
  return (
    <div className="container">
      <Header />
      <Hero slides={slides} />
      <div className="divider"></div>
      <About/>
      <div className="divider"></div>
      <Services />
      <div className="divider"></div>
      <Training />
      <div className="divider"></div>
      <Footer />
      {showScrollBtn && (
          <button
            onClick={scrollToTop}
            className="icon-chevron-with-circle-up"
          ></button>
        )}
    </div>
  );
}

const NotFound = () => {
  return <h1>404 - Not Found</h1>;
};
export default App;
