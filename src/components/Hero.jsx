import { ArrowRight } from "lucide-react";
import { school } from "../data/school";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay" />
      <div className="container hero-content">
        <span className="hero-badge">Admissions Open • 2027–28</span>
        <h1>Where every child gets the <em>space to shine.</em></h1>
        <p>We nurture curious minds, confident personalities and strong values through meaningful learning and real-world experiences.</p>
        <div className="hero-actions">
          <a className="btn primary" href="#admissions">Explore Admissions <ArrowRight size={18} /></a>
          <a className="btn light" href="#about">Discover Our School</a>
        </div>
      </div>
      <div className="hero-stats container">
        <div><strong>{school.established}</strong><span>Established</span></div>
        <div><strong>42+</strong><span>Years of Excellence</span></div>
        <div><strong>1500+</strong><span>Students</span></div>
        <div><strong>80+</strong><span>Faculty Members</span></div>
      </div>
    </section>
  );
}
