import { useState, useEffect, RefObject } from "react";



export function useCloseOnOutsideClick<T extends RefObject<HTMLElement>>(ref: T) {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen(true);
  const close = () => setOpen(false);
  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (ref.current === null) return;
      if (ref.current && !ref.current.contains(event.target as Node)) {
        close();
      }
      if (event.target instanceof HTMLDivElement) {
        if (event.target.classList.contains("except"))
          setTimeout(() => close(), 200);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
  return { open, toggleOpen, close };
}

