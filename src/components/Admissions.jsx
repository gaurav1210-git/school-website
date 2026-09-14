import React from "react";
import { ArrowRight } from "lucide-react";

export default function Admissions() {
  return (
    <section className="admission section" id="admissions">
      <div className="container admission-grid">
        <div>
          <span className="eyebrow">Admissions</span>
          <h2>Start your child's journey with us.</h2>
          <p>We welcome families who share our belief in learning with curiosity, confidence and compassion.</p>
          <a className="btn primary" href="#contact">Admission Enquiry <ArrowRight size={18}/></a>
        </div>
        <div className="steps">
          {[
            ["01", "Submit enquiry", "Share your details with our admissions team."],
            ["02", "Campus interaction", "Visit the school and understand our approach."],
            ["03", "Complete admission", "Finish the required documentation and formalities."]
          ].map(([n, t, d]) => (
            <div className="step" key={n}><b>{n}</b><div><h3>{t}</h3><p>{d}</p></div></div>
          ))}
        </div>
      </div>
    </section>
  );
}
