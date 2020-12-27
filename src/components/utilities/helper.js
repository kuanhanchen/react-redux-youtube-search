import { useEffect, useRef } from "react";

export const usePrevious = value => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

export const API_KEY = "YOUR_API_KEY";
