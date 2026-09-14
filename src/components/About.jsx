import React from "react";
import { CheckCircle2, ChevronRight } from "lucide-react";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container about-grid">
        <div className="image-card">
          <img src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=85" alt="School campus" />
          <div className="experience"><strong>42+</strong><span>Years of<br/>Excellence</span></div>
        </div>
        <div>
          <SectionHeading eyebrow="About Our School" title="Building a strong foundation for tomorrow." text="A supportive environment where academic learning and character development go hand in hand." />
          <p className="body-text">MSM Gyanoday Gyanpeeth is committed to creating an inclusive and inspiring learning environment. Our students are encouraged to ask questions, explore ideas, work together and develop the confidence to lead.</p>
          <div className="check-list">
            <div><CheckCircle2 /> Student-focused learning</div>
            <div><CheckCircle2 /> Experienced and caring educators</div>
            <div><CheckCircle2 /> Strong focus on values and life skills</div>
            <div><CheckCircle2 /> Sports, arts and co-curricular activities</div>
          </div>
          <a className="text-link" href="#academics">Learn more about us <ChevronRight size={17}/></a>
        </div>
      </div>
    </section>
  );
}
