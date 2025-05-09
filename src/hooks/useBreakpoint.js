import { useState, useEffect } from "react";

/**
 * useBreakpoint - Custom React hook to detect the current screen size category.
 *
 * Breakpoints:
 * - "small-mobile": width < 375px (e.g., 320–374px)
 * - "mobile": width >= 375px and < 768px
 * - "tablet": width >= 768px and < 1440px
 * - "desktop": width >= 1440px
 *
 * @returns {"small-mobile" | "mobile" | "tablet" | "desktop"} The current breakpoint label.
 *
 * Example:
 * const breakpoint = useBreakpoint();
 * if (breakpoint === "desktop") renderManyItems();
 */
export const useBreakpoint = (props) => {
  const { desktop = 1440, tablet = 768, mobile = 375 } = props ?? {};

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (width >= desktop) return "desktop";
  if (width >= tablet) return "tablet";
  if (width >= mobile) return "mobile";
  return "small-mobile"; // < 375px (320–374)
};
