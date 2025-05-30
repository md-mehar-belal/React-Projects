import React from "react";
import "../../App.css"; // Make sure this is imported

export default function About() {
  return (
    <div className="about-section">
      <div className="about-container">
        <div className="about-content">
          <div className="about-image">
            <img
              src="/images/img4.jpeg"
              alt="About"
            />
          </div>
          <div className="about-text">
            <h2>
              React development is carried out by passionate developers
            </h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
              omnis voluptatem accusantium nemo perspiciatis delectus atque
              autem! Voluptatum tenetur beatae unde aperiam, repellat expedita
              consequatur! Officiis id consequatur atque doloremque!
            </p>
            <p>
              Nobis minus voluptatibus pariatur dignissimos libero quaerat iure
              expedita at? Asperiores nemo possimus nesciunt dicta veniam
              aspernatur quam mollitia.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
