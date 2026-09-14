import React from "react";
import { School } from "lucide-react";
import { school, navItems } from "../data/school";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <a className="brand footer-brand" href="#home"><span className="brand-mark"><School size={25}/></span><span><strong>{school.shortName}</strong><small>{school.name}</small></span></a>
          <p>Learn. Lead. Inspire.</p>
        </div>
        <div>
          <h4>Quick Links</h4>
          {navItems.slice(0,5).map(n=><a key={n.href} href={n.href}>{n.label}</a>)}
        </div>
        <div>
          <h4>Contact</h4>
          <span>{school.address}</span>
          <span>{school.phone}</span>
          <span>{school.email}</span>
        </div>
      </div>
      <div className="copyright">© {new Date().getFullYear()} {school.name}. All rights reserved.</div>
    </footer>
  );
}
