import React, { useState } from "react";
import {
  ArrowRight, BookOpen, CalendarDays, CheckCircle2, ChevronRight,
  Clock3, GraduationCap, Library, Mail, MapPin, Menu, Phone,
  School, ShieldCheck, Trophy, Users, X
} from "lucide-react";
import { school, notices, events, facilities, gallery, navItems } from "./data/school";
import principalImage from "./assets/image/abhinav_pic.jpeg";

function SectionHeading({ eyebrow, title, text, center = false }) {
  return (
    <div className={`section-heading ${center ? "center" : ""}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <div className="topbar">
        <div className="container topbar-inner">
          <span><Phone size={14} /> {school.phone}</span>
          <span><Mail size={14} /> {school.email}</span>
          <span className="topbar-hide"><Clock3 size={14} /> {school.timings}</span>
        </div>
      </div>
      <div className="nav-wrap">
        <div className="container nav">
          <a className="brand" href="#home" onClick={() => setOpen(false)}>
            <span className="brand-mark"><School size={25} /></span>
            <span><strong>{school.shortName}</strong><small>{school.name}</small></span>
          </a>
          <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
          <nav className={open ? "nav-links open" : "nav-links"}>
            {navItems.map(item => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>
            ))}
            <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>Enquire Now</a>
          </nav>
        </div>
      </div>
    </header>
  );
}

function Hero() {
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
        <div><strong>25+</strong><span>Years of Excellence</span></div>
        <div><strong>1500+</strong><span>Students</span></div>
        <div><strong>80+</strong><span>Faculty Members</span></div>
      </div>
    </section>
  );
}

function About() {
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

function Principal() {
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

function Academics() {
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

function Admissions() {
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
          ].map(([n,t,d]) => <div className="step" key={n}><b>{n}</b><div><h3>{t}</h3><p>{d}</p></div></div>)}
        </div>
      </div>
    </section>
  );
}

function Facilities() {
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

function Notices() {
  return (
    <section className="section alt" id="notices">
      <div className="container notice-grid">
        <div>
          <SectionHeading eyebrow="Notice Board" title="Latest updates" text="Important announcements and school information." />
          <div className="notice-list">
            {notices.map(n => <div className="notice" key={n.title}><span>{n.date}</span><div><b>{n.type}</b><h3>{n.title}</h3></div></div>)}
          </div>
        </div>
        <div>
          <SectionHeading eyebrow="Upcoming" title="Events" text="Keep up with what is happening around campus." />
          <div className="event-list">
            {events.map(e => <div className="event" key={e.title}><div className="event-date"><strong>{e.date}</strong><span>{e.month}</span></div><div><h3>{e.title}</h3><p>{e.text}</p></div></div>)}
          </div>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
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

function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="container contact-grid">
        <div>
          <span className="eyebrow">Contact Us</span>
          <h2>We'd love to hear from you.</h2>
          <p>Have a question about admissions, academics or visiting the campus? Get in touch with our team.</p>
          <div className="contact-items">
            <div><MapPin/><span><b>Address</b>{school.address}</span></div>
            <div><Phone/><span><b>Phone</b>{school.phone}</span></div>
            <div><Mail/><span><b>Email</b>{school.email}</span></div>
          </div>
        </div>
        <form className="contact-form" onSubmit={(e) => { e.preventDefault(); alert("Thank you! Your enquiry has been recorded for this demo."); }}>
          <h3>Send an enquiry</h3>
          <label>Name<input required placeholder="Your name"/></label>
          <label>Email<input type="email" required placeholder="you@example.com"/></label>
          <label>Phone<input required placeholder="+91"/></label>
          <label>Message<textarea required rows="4" placeholder="How can we help?"></textarea></label>
          <button className="btn primary" type="submit">Send Enquiry <ArrowRight size={18}/></button>
          <small>Demo form — connect this to a backend/form service when needed.</small>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return <footer className="footer"><div className="container footer-grid">
    <div><a className="brand footer-brand" href="#home"><span className="brand-mark"><School size={25}/></span><span><strong>{school.shortName}</strong><small>{school.name}</small></span></a><p>Learn. Lead. Inspire.</p></div>
    <div><h4>Quick Links</h4>{navItems.slice(0,5).map(n=><a key={n.href} href={n.href}>{n.label}</a>)}</div>
    <div><h4>Contact</h4><span>{school.address}</span><span>{school.phone}</span><span>{school.email}</span></div>
  </div><div className="copyright">© {new Date().getFullYear()} {school.name}. All rights reserved.</div></footer>;
}

export default function App() {
  return <>
    <Header />
    <main><Hero/><About/><Principal/><Academics/><Admissions/><Facilities/><Notices/><Gallery/><Contact/></main>
    <Footer />
  </>;
}