import About from "@/components/About/About";
import Banner from "@/components/Banner/Banner";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function AboutUsPage() {
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
        <About />
      </main>
      <Footer />
    </div>
  );
}
