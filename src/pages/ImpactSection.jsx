// src/components/ImpactSection.jsx
import React from "react";
import { Play } from "lucide-react";

const ImpactSection = () => {
  return (
    <section className="impact">
      <div className="impact__left">
        <h2>
          You Have the <br />
        </h2>
        <p className="subtitle">
          <em>Green. That’s how we’d like the world to be</em>
        </p>
        <p className="description">
          There are many ways to take small steps in changing your living habits
          while making big strides in helping the environment.
        </p>
       
      </div>

      <div className="impact__right">
        <div className="overlay">
          <h3>You must be the change you wish to see in the world</h3>
          <p>
            Water covers two-thirds of the surface of the Earth, but Fresh water
            is 0.002% on Earth. What will your children drink?
          </p>
          <a href="#" className="cta">
            Make a difference now!
          </a>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
