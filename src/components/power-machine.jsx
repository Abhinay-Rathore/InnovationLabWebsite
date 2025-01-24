import React from "react";
import "../styles/power-machine.css"; 

const PowerMachine = () => {
  const machines = [
    {
      title: "CNC LASER CUTTER",
      image: "/assets/images/cnc-laser.jpg", 
      make: "Kavone Technology",
      model: "KL1060",
      links: {
        spec: "#",
        form: "#",
        charge: "#",
      },
    },
    {
      title: "CNC MILLING MACHINE",
      image: "/assets/images/cnc-miling.jpg", 
      make: "Tormach",
      model: "PCNC 770",
      links: {
        spec: "#",
        form: "#",
        charge: "#",
      },
    },
    {
      title: "FDM 3D PRINTER",
      image: "/assets/images/3d-printer.jpg", 
      make: "Ultimaker",
      model: "Ultimaker 2+",
      links: {
        spec: "#",
        form: "#",
        charge: "#",
      },
    },
    {
        title: "CNC LASER CUTTER",
        image: "/assets/images/cnc-laser.jpg", 
        make: "Kavone Technology",
        model: "KL1060",
        links: {
          spec: "#",
          form: "#",
          charge: "#",
        },
      },
      {
        title: "CNC MILLING MACHINE",
        image: "/assets/images/cnc-miling.jpg", 
        make: "Tormach",
        model: "PCNC 770",
        links: {
          spec: "#",
          form: "#",
          charge: "#",
        },
      },
      {
        title: "FDM 3D PRINTER",
        image: "/assets/images/3d-printer.jpg", 
        make: "Ultimaker",
        model: "Ultimaker 2+",
        links: {
          spec: "#",
          form: "#",
          charge: "#",
        },
      },
  ];

  return (
    <div className="power-machine-container">
      {machines.map((machine, index) => (
        <div className="machine-card" key={index}>
          <img src={machine.image} alt={machine.title} className="machine-image" />
          <h2 className="machine-title">{machine.title}</h2>
          <p className="machine-make">Make: {machine.make}</p>
          <p className="machine-model">Model: {machine.model}</p>
          <div className="machine-links">
            <a href={machine.links.spec}>Technical Spec</a>
            <a href={machine.links.form}>Job Request Form</a>
            <a href={machine.links.charge}>User Charge</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PowerMachine;
