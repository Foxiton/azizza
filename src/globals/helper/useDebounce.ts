import { useEffect } from "react"
import useTimeout from "./useTimeout";

export default function useDebounce(callback: Function, delay: number, dependencies: Array<any>) {
  const { reset, clear } = useTimeout(callback, delay)
  useEffect(() => {
      console.log("Debounced");
      reset();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...dependencies, reset])
  useEffect(clear, [clear])
}