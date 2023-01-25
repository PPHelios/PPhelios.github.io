import { Link } from "react-router-dom";
import "./noPageFound.scss";
export const NoPageFound = () => {
  return (
    <main className="noPageFound">
      <h4>You seems Lost...</h4>
      <Link to="dass-coffee/">
        <h3>Back To Home Page</h3>
      </Link>
    </main>
  );
};
