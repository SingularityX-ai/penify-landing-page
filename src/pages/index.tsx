import { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Banner from "@/components/Banner/Banner";
import FAQ from "@/components/FAQ/FAQ";
import Features from "@/components/Features/Features";
import Tour from "@/components/Tour/Tour";
import Hero from "@/components/Hero/Hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const handleLoad = () => setIsLoading(false);

    if (document.readyState === "complete") {
      setIsLoading(false);
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return isLoading ? (
    <div id="preloader">
      <div className="loader"></div>
    </div>
  ) : (
    <div className={`app-wrapper ${inter.className} bg-themeBg`}>
      <Banner />
      <Header />
      <main>
        <Hero />
        <Tour />
        <Features />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
