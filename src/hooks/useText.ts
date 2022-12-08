import { useRef, useEffect } from 'react';

export const useText = (text : string) => {
  const textRef = useRef(null);
  useEffect(() => {
    if (!textRef.current) return;
    (textRef.current as HTMLElement).innerHTML = text;
  }, [text]);
  return textRef;
};
