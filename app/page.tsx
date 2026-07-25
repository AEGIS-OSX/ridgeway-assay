"use client";

import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Capabilities from "./components/Capabilities";
import SocialProof from "./components/SocialProof";
import QuoteForm from "./components/QuoteForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main id="top">
      <Nav />
      <Hero />
      <Capabilities />
      <SocialProof />
      <QuoteForm />
      <Footer />
    </main>
  );
}
