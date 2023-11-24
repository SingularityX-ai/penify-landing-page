import { useState, useEffect } from "react";

export default function ScrollProgress() {
  // State to store the scroll progress percentage
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    // Function to update scroll progress on scroll event
    const handleScroll = () => {
      // Calculate total scrollable height
      const totalScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      // Calculate current scroll position as a percentage
      // Clamping the value between 0 and 100
      const currentScroll =
        Math.min(Math.max(window.scrollY / totalScroll, 0), 1) * 100;
      setScrollProgress(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // this effect runs once on mount

  // Scrolls the window to the top smoothly
  const handleProgressClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Circle properties for the progress indicator
  const radius = 22;
  const circumference = 2 * Math.PI * radius;

  return (
    <button
      className={`progress-wrap ${scrollProgress > 0 ? "active-progress" : ""}`}
      onClick={handleProgressClick}
      type='button'
      aria-label='scroll to top'
    >
      <svg
        width='100%'
        height='100%'
        viewBox='0 0 50 50'
        className='progress-circle'
      >
        <circle
          cx='25'
          cy='25'
          r={radius}
          fill='transparent'
          strokeDasharray={circumference}
          // Calculate stroke dash offset for progress animation
          strokeDashoffset={
            circumference - (scrollProgress * circumference) / 100
          }
          // Rotate the circle to start progress from the top
          transform='rotate(-90 25 25)'
        />
      </svg>
    </button>
  );
}
