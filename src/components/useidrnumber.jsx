import { useState } from "react";

const useIDRnumber = (initialValue = 20) => {
  const [num, setNum] = useState(initialValue);
  function increase() {
    setNum(num + 1);
  }
  function decrease() {
    setNum(num - 1);
  }
  function reset() {
    setNum(0);
  }
  return [num, increase, decrease, reset];
};

export default useIDRnumber;
