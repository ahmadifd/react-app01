import { useState } from "react";

const useToggle = (initialvalue = false) => {
  const [state, setState] = useState(initialvalue);
  function toggle() {
    setState((x) => !x);
  }

 // return [state, toggle];
  return {state, toggle}
};

export default useToggle;
