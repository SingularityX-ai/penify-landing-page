import { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Banner from "@/components/Banner/Banner";

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
    <div className={inter.className}>
      <Banner />
      <Header />
      <main className="my-24"></main>
      <Footer />
    </div>
  );
}
