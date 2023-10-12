import { useParams } from "react-router-dom";

function NotFound() {
  const routeParams = useParams();
  return (
    <h1>
      NotFound - {routeParams.name} - {routeParams.id}{" "}
    </h1>
  );
}

export default NotFound;
