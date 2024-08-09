import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import Destinations from "./Components/Destinations";
import Book from "./Components/Book";
import Testimonials from "./Components/Testimonials";
import Logos from "./Components/Logos";
import Subscribe from "./Components/Subscribe";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <main className="w-full min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Destinations />
      <Book />
      <Testimonials />
      <Logos />
      <Subscribe />
      <Footer />
    </main>
  );
};

export default App;
