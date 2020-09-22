import { useEffect } from "react";

export const useOnClickOutside = (enable, ref, handler) => {
  useEffect(() => {
    if (enable && ref && handler) {
      const listener = (event) => {
        console.log("listener", {
          ref,
          eventtarget: event.target,
          a: ref && ref.current,
          b: ref && ref.contains(event.target),
        });
        // Do nothing if clicking ref's element or descendent elements
        if (!ref || (ref && ref.contains(event.target))) {
          return;
        }

        handler(event);
      };
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    }
  }, [enable, ref, handler]);
};
