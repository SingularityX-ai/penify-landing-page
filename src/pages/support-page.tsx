import Banner from "@/components/Banner/Banner";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Support from "@/components/Support/Support";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import { Bounce, ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export default function SupportPage() {
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
        <Support />
        <ToastContainer
          position="top-right"
          autoClose={3500}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable={false}
          pauseOnHover
          theme="dark"
          transition={Bounce}
        />
      </main>
      <Footer />
    </div>
  );
}
