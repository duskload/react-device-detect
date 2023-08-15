import React, { useCallback, useEffect, useState } from "react";
import { isMobile } from "../../lib/selectors";

export function useMobileOrientation() {
  if (typeof window === 'undefined') return;
  const [state, setState] = useState(() => {
    const orientation = window.innerWidth > window.innerHeight ? 90 : 0;
    return {
      isPortrait: orientation === 0,
      isLandscape: orientation === 90,
      orientation: orientation === 0 ? 'portrait' : 'landscape'
    }
  });
  const handleOrientationChange = useCallback(() => {
    const orientation = window.innerWidth > window.innerHeight ? 90 : 0;
    const next = {
      isPortrait: orientation === 0,
      isLandscape: orientation === 90,
      orientation: orientation === 0 ? 'portrait' : 'landscape'
    }
    state.orientation !== next.orientation && setState(next);
  }, [state.orientation]);
  useEffect(() => {
    if (typeof window !== undefined && isMobile) {
      handleOrientationChange();
      window.addEventListener("load", handleOrientationChange, false);
      window.addEventListener("resize", handleOrientationChange, false);
    }
    return () => {
      window.removeEventListener("resize", handleOrientationChange, false);
      window.removeEventListener("load", handleOrientationChange, false);
    }
  }, [handleOrientationChange]);
  return state;
}
