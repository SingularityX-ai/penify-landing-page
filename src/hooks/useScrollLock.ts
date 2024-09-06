import { useEffect } from "react";

export function useScrollLock(isLocked: boolean) {
  useEffect(() => {
    const initialOverflow = window.getComputedStyle(document.body).overflow;

    document.body.style.overflow = isLocked ? "hidden" : initialOverflow;

    return () => {
      document.body.style.overflow = initialOverflow;
    };
  }, [isLocked]);
}
