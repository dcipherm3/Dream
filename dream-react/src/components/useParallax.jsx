import { useEffect, useRef, useState } from "react";

const useParallax = () => {
  const sectionsRef = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const isScrolling = useRef(false);

  useEffect(() => {
    const handleScroll = (event) => {
      if (isScrolling.current) return;
      isScrolling.current = true;

      setTimeout(() => {
        isScrolling.current = false;
      }, 800); // Prevent fast scrolling

      if (event.deltaY > 0 && currentIndex < sectionsRef.current.length - 1) {
        setCurrentIndex((prev) => prev + 1);
      } else if (event.deltaY < 0 && currentIndex > 0) {
        setCurrentIndex((prev) => prev - 1);
      }
    };

    window.addEventListener("wheel", handleScroll);

    return () => window.removeEventListener("wheel", handleScroll);
  }, [currentIndex]);

  useEffect(() => {
    sectionsRef.current.forEach((section, index) => {
      if (!section) return;

      if (index === currentIndex) {
        section.classList.add("active");
        section.classList.remove("above", "below");
      } else if (index < currentIndex) {
        section.classList.add("above");
        section.classList.remove("active", "below");
      } else {
        section.classList.add("below");
        section.classList.remove("active", "above");
      }
    });
  }, [currentIndex]);

  return sectionsRef;
};

export default useParallax;
