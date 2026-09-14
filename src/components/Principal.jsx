import React from "react";
import { school } from "../data/school";
import principalImage from "../assets/image/abhinav_pic.jpeg";

export default function Principal() {
  return (
    <section className="principal section-sm">
      <div className="container principal-grid">
        <div className="principal-photo">
          <img src={principalImage} alt="Principal" />
        </div>
        <div className="principal-content">
          <span className="eyebrow">Principal's Message</span>
          <blockquote>“{school.principal.message}”</blockquote>
          <div className="principal-signature">
            <strong>{school.principal.name}</strong>
            <span className="principal-role">{school.principal.role}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
