import { useState, useEffect, useRef } from "react";

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Handler to calculate and update scroll progress
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (window.pageYOffset / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Effect to update class based on scroll progress
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.classList.toggle("active-progress", scrollProgress > 0);
    }
  }, [scrollProgress]);

  // Click handler to scroll to top
  const handleProgressClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      ref={scrollRef}
      className="progress-wrap"
      onClick={handleProgressClick}
    >
      <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102"><path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" stroke="#3887FE" strokeWidth="4" fill="none" style={{strokeDasharray: "308.66px", strokeDashoffset: `${308.66 - (scrollProgress * 308.66) / 100}px`}} /></svg>
      
      <style>
        {`.progress-wrap.active-progress svg.progress-circle path { stroke-dashoffset: ${308.66 - (scrollProgress * 308.66) / 100}px;}`}
      </style>
    </div>
  );
}
