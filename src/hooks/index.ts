import { useState, useEffect, RefObject } from "react";



export function useCloseOnOutsideClick<T extends RefObject<HTMLElement>>(ref: T) {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen(!open);
  const close = () => setOpen(false);
  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (ref.current === null) return;
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
      if (event.target instanceof HTMLDivElement) {
        if (event.target.classList.contains("except"))
          setTimeout(() => setOpen(false), 200);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
  return { open, toggleOpen, close };
}

