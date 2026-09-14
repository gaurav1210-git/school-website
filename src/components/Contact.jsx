import React from "react";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { school } from "../data/school";

export default function Contact() {
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
