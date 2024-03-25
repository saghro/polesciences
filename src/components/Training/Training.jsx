import React from "react";
import "./Training.css";
import { motion } from "framer-motion";
import { MyTraining } from "./MyTraining";

const Training = () => {
  // Filtered services based on the current category
  const servicesToShow = MyTraining.slice(0, 3); // Get the first three services

  return (
    <div>
      <div id="Training">
        <h2 className="title">Training</h2>
        <section className="flex section">
          {servicesToShow.map((service, index) => (
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
              </div>
              <button className="bttn bttn-gradientt btn-gloww">
                See More
              </button>
            </motion.article>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Training;
