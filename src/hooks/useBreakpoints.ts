import { isEqual, throttle } from "lodash";
import { useState } from "react";
import { useEvent } from "react-use";
import { BREAKPOINTS, DEBOUCE, isBrowser } from "~/constants";

const DEFAULT_BREAKPOINTS = {
  isDesktop: false,
  isMobile: false,
  isTablet: false,
};

const calculateBreakpoints = (width: number): typeof DEFAULT_BREAKPOINTS => {
  if (width < BREAKPOINTS.sm) {
    return {
      ...DEFAULT_BREAKPOINTS,
      isMobile: true,
    };
  }
  if (width >= BREAKPOINTS.sm && width < BREAKPOINTS.md) {
    return {
      ...DEFAULT_BREAKPOINTS,
      isTablet: true,
    };
  }
  if (width >= BREAKPOINTS.md) {
    return {
      ...DEFAULT_BREAKPOINTS,
      isDesktop: true,
    };
  }
  return DEFAULT_BREAKPOINTS;
};

const getWindowWidth = (): number => {
  return isBrowser ? window.innerWidth : 0;
};

/**
 * @description
 * Hook to get the current breakpoints and width of the window
 * it is optimized to avoid unnecessary re-renders due to window resize
 */
export default function useBreakpoints({
  throttleTime = DEBOUCE.medium,
}: {
  throttleTime?: number;
} = {}): { width: number } & typeof DEFAULT_BREAKPOINTS {
  const [width, setWidth] = useState(getWindowWidth());
  const [breakpoints, setBreakpoints] = useState(
    isBrowser ? calculateBreakpoints(width) : DEFAULT_BREAKPOINTS,
  );

  useEvent(
    "resize",
    throttle(() => {
      const newWidth = getWindowWidth();
      const newBreakpoints = calculateBreakpoints(newWidth);
      if (isEqual(newBreakpoints, breakpoints)) {
        return;
      }
      setBreakpoints(newBreakpoints);
      setWidth(newWidth);
    }, throttleTime),
  );

  return { ...breakpoints, width };
}
