import { Suspense } from 'react'
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Testimonials3 from '@/components/Testimonials3';

export default function Home() {
  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <main>
        <Hero />
        <Testimonials3 />
        <CTA />
      </main>
      <Footer />
    </>
  );
}