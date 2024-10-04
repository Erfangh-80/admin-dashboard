import { useEffect, useRef } from "react";

type Handler = (event: MouseEvent | TouchEvent) => void;

export function useOnClickOutside<T extends HTMLElement>(
  onClickOutside: Handler,
  listenCapturing: boolean = true
) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClickOutside(event);
      }
    };

    document.addEventListener("mousedown", handleClickOutside, listenCapturing);
    document.addEventListener("touchstart", handleClickOutside, listenCapturing);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside, listenCapturing);
      document.removeEventListener("touchstart", handleClickOutside, listenCapturing);
    };
  }, [onClickOutside, listenCapturing]);

  return ref;
}
