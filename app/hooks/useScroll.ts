"use client";

import { useState, useEffect } from "react";

/**
 * Custom hook to detect if the page has been scrolled past a threshold.
 * @param threshold - The scroll Y value to trigger the state change (default: 50)
 * @returns boolean - True if scrolled past threshold, false otherwise
 */
export function useScroll(threshold: number = 50): boolean {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > threshold);
    };

    // Check initial value
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return isScrolled;
}
