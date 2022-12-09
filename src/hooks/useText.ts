import { useRef, useEffect } from 'react';

export const useText = <T extends HTMLElement>(text: string) => {
  const textRef = useRef<T>(null);
  useEffect(() => {
    (textRef.current as HTMLElement).innerHTML = text;
  }, []);
  return textRef;
};
