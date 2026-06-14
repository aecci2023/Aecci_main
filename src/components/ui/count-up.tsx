import * as React from "react";
import { useInView } from "framer-motion";

interface CountUpProps {
  value: number;
  duration?: number;
  suffix?: string;
}

export function CountUp({ value, duration = 1.5, suffix = "" }: CountUpProps) {
  const [count, setCount] = React.useState(0);
  const ref = React.useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  React.useEffect(() => {
    if (!isInView) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min(
        (timestamp - startTimestamp) / (duration * 1000),
        1,
      );
      setCount(Math.floor(progress * value));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [isInView, value, duration]);

  const formatted = count.toLocaleString("en-US");

  return (
    <span ref={ref}>
      {formatted}
      {suffix}
    </span>
  );
}
