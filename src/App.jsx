import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Principal from "./components/Principal";
import Academics from "./components/Academics";
import Admissions from "./components/Admissions";
import Facilities from "./components/Facilities";
import Notices from "./components/Notices";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Principal />
        <Academics />
        <Admissions />
        <Facilities />
        <Notices />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}