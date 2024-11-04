// LazyLoad.jsx
import React, { useState, useEffect, useRef } from "react";

const LazyLoad = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      className={`transition-opacity duration-1000 delay-1000 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      ref={ref}
    >
      {isVisible ? children : null}
    </div>
  );
};

export default LazyLoad;
