import useIDRnumber from "./useidrnumber";

const Shownumber = () => {
  const [num, increase, decrease, reset] = useIDRnumber(10);
  return (
    <>
      <div>
        <h1>ShowNumber</h1>
        <div>
          <div className="d-inline">{num}</div>
          <button onClick={increase} className="btn btn-primary">
            +
          </button>
          <button onClick={decrease} className="btn btn-secondary">
            -
          </button>
          <button onClick={reset} className="btn btn-info">
            0
          </button>
        </div>
      </div>
    </>
  );
};

export default Shownumber;
