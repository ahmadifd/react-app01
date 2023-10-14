import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import useToggle from "./usetoggle";
import Cat from "./cat";

function NotFound() {
  const routeParams = useParams();
  //const [ isvisible, toggle ] = useToggle(false);
  const { state: isvisible, toggle } = useToggle(false);

  return (
    <>
      <h1>NotFound</h1>
      {isvisible && (
        <h1>
          {routeParams.name}  {routeParams.id} <Cat />
        </h1>
      )}

      <button onClick={toggle} className="btn btn-primary">
        isvisible
      </button>
    </>
  );
}

export default NotFound;
