import React from "react";
import { ArrowRight, BookOpen, GraduationCap, Library } from "lucide-react";
import SectionHeading from "./SectionHeading";

export default function Academics() {
  const cards = [
    [BookOpen, "Primary School", "Classes I–V", "A strong foundation through activity-based and experiential learning."],
    [GraduationCap, "Middle School", "Classes VI–VIII", "Building concepts, curiosity and independent thinking."],
    [Library, "Senior School", "Classes IX–XII", "Focused academic preparation with guidance for future pathways."]
  ];

  return (
    <section className="section alt" id="academics">
      <div className="container">
        <SectionHeading center eyebrow="Academics" title="Learning designed around every stage." text="Our academic programme balances strong fundamentals with creativity, collaboration and practical experiences." />
        <div className="card-grid three">
          {cards.map(([Icon, title, sub, text]) => (
            <article className="info-card" key={title}>
              <div className="icon-box"><Icon /></div>
              <span className="card-sub">{sub}</span>
              <h3>{title}</h3>
              <p>{text}</p>
              <a href="#contact">Know more <ArrowRight size={15}/></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
