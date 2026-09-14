import React from "react";
import { BookOpen, GraduationCap, Library, School, Trophy, Users } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { facilities } from "../data/school";

export default function Facilities() {
  const icons = [School, Library, BookOpen, Trophy, GraduationCap, Users];

  return (
    <section className="section" id="facilities">
      <div className="container">
        <SectionHeading center eyebrow="Campus & Facilities" title="A place made for learning and growing." text="Purpose-built spaces help students learn beyond the classroom." />
        <div className="facility-grid">
          {facilities.map(([title, text], i) => {
            const Icon = icons[i];
            return <article className="facility" key={title}><Icon/><h3>{title}</h3><p>{text}</p></article>;
          })}
        </div>
      </div>
    </section>
  );
}
