import { Link } from "react-router-dom";
import { logo } from "../contstants/index.js";

function Navbar() {
  return (
    <div>
      <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom container pt-3">
        <Link to={"/"}>
          <img src={logo} alt="" style={{ width: "100px" }} />
        </Link>

        <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
          <Link
            to={"/login"}
            className="me-3 py-2 link-body-emphasis text-decoration-none"
          >
            Login
          </Link>
          <Link
            to={"/register"}
            className="me-3 py-2 link-body-emphasis text-decoration-none"
          >
            Register
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;