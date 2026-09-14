import React, { useState } from "react";
import { Clock3, Mail, Menu, Phone, School, X } from "lucide-react";
import { school, navItems } from "../data/school";

export default function Header() {
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
