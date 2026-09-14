import React from "react";
import { gallery } from "../data/school";
import SectionHeading from "./SectionHeading";

export default function Gallery() {
  return (
    <section className="section" id="gallery">
      <div className="container">
        <SectionHeading center eyebrow="Gallery" title="Life at MSM Gyanoday Gyanpeeth" text="A glimpse of our campus, classrooms and student activities." />
        <div className="gallery-grid">
          {gallery.map(item => <figure key={item.title}><img src={item.image} alt={item.title}/><figcaption>{item.title}</figcaption></figure>)}
        </div>
      </div>
    </section>
  );
}
