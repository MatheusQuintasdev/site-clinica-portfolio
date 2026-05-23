import { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";

export function useCountUp(end: number, duration: number = 2) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!inView) return;

    let startTime: number | null = null;
    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / (duration * 1000), 1);
      
      // Easing out cubic
      const easeOutCubic = 1 - Math.pow(1 - percentage, 3);
      setCount(Math.floor(end * easeOutCubic));

      if (percentage < 1) {
        requestAnimationFrame(updateCount);
      }
    };

    requestAnimationFrame(updateCount);
  }, [end, duration, inView]);

  return { count, ref };
}
