"use client";

import { useEffect, useRef, useState } from "react";

export function useScrollDirection() {
  const [direction, setDirection] = useState("up"); // "up" | "down"
  const lastY = useRef(0);

  useEffect(() => {
    lastY.current = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;

      // if user is at the very top, treat as "up" so navbar shows
      if (y <= 0) {
        setDirection("up");
        lastY.current = y;
        return;
      }

      if (y > lastY.current) setDirection("down");
      else if (y < lastY.current) setDirection("up");

      lastY.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return direction;
}
