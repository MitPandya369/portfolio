import { useEffect, useRef } from "react";

const RevealOnScroll = ({ children }) => {
  const ref = useRef(null);

  useEffect(() => {
    const observable = new IntersectionObserver(
      (entry) => {
        console.log("🚀 ~ observable ~ entry:", entry);
        // @ts-ignore
        if (entry[0].isIntersecting) {
          // @ts-ignore
          ref.current.classList.add("visible");
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) {
      observable.observe(ref.current);
    }
    return () => observable.disconnect();
  }, []);

  return (
    <div ref={ref} className="reveal">
      {children}
    </div>
  );
};

export default RevealOnScroll;
