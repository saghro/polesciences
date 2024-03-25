import React, { useState } from "react";
import "./Services.css";
import { AnimatePresence, motion } from "framer-motion";
import { MyServices } from "./MyServices";

const Services = () => {
  const [currentCategory, setCurrentCategory] = useState("all");

  const filterServices = (category) => {
    setCurrentCategory(category);
  };

  const filteredServices =
    currentCategory === "all"
      ? MyServices
      : MyServices.filter((service) =>
          service.category
            .map((cat) => cat.toLowerCase())
            .includes(currentCategory.toLowerCase())
        );

  return (
    <div>
      <h2>Services</h2>
      <main id="project" className="flex">
        <section className="left-section flex">
          <button
            onClick={() => filterServices("all")}
            className={currentCategory === "all" ? "active" : null}
          >
            All SERVICES
          </button>
          {[
            "web development",
            "mobile development",
            "design UX/UI",
            "management",
          ].map((category, index) => (
            <button
              key={index}
              onClick={() => filterServices(category)}
              className={currentCategory === category ? "active" : null}
            >
              {category.toUpperCase()}
            </button>
          ))}
        </section>
        <section className="flex right-section">
          <AnimatePresence>
            {filteredServices.map((service, index) => (
              <motion.article
                layout
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ type: "spring", damping: 8, stiffness: 80 }}
                key={index}
                className="card"
              >
                <img width={250} src={service.imgPath} alt={service.title} />
                <div style={{ width: "250px" }} className="box">
                  <h1 className="title">{service.title}</h1>
                  <p className="sub-title">{service.description}</p>
                  <button className="bttn bttn-gradientt btn-gloww">
                    See More
                  </button>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </section>
      </main>
    </div>
  );
};

export default Services;
