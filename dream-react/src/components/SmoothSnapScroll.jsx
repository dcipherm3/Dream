import { useEffect } from "react";

const SmoothSnapScroll = () => {
  useEffect(() => {
    const sections = document.querySelectorAll(".section");
    let isScrolling;

    const handleScroll = () => {
      if (isScrolling) return; // Prevent multiple triggers
      isScrolling = true;

      setTimeout(() => {
        let currentScroll = window.scrollY;
        let closestSection = sections[0];

        sections.forEach((section) => {
          if (
            Math.abs(section.offsetTop - currentScroll) <
            Math.abs(closestSection.offsetTop - currentScroll)
          ) {
            closestSection = section;
          }
        });

        window.scrollTo({
          top: closestSection.offsetTop,
          behavior: "smooth",
        });

        isScrolling = false; // Reset scrolling lock
      }, 100); // Increase this value to slow down the snap
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return null;
};

export default SmoothSnapScroll;
