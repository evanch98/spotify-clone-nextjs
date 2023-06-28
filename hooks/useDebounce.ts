import { useEffect, useState } from "react";

// to avoid refetching songs on every single input by adding a delay
// will only refetch the song when user stops typing for a certain amount of time
function useDebounce<T>(value: T, delay?: number): T {
  const [debounceValue, setDebounceValue] = useState<T>(value);

  // will only get the result after 500 milliseconds (if the delay is not specified) of user not typing
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(value);
    }, delay || 500);

    return () => {
      // clear the timer
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debounceValue;
}

export default useDebounce;
