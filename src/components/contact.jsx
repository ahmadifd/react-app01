import { useSelector } from "react-redux";

export const Contact = () => {
  const seletor = useSelector((state) => state.user);
  return <div>Contact {seletor.username}</div>;
};
