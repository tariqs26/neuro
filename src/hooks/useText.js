import { useRef, useEffect } from "react";

export const useText = (text) => {
  const textRef = useRef(null);
  useEffect(() => {
    textRef.current.innerHTML = text;
  }, [text]);
  return textRef;
};
