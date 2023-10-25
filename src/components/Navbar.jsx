// import logo from "../logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
    <div className="container">
    <div className="container-fluid">
    <a className="navbar-brand" href="#/">
      ODP
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <FontAwesomeIcon icon={faBars} style={{color:"#fff"}}/>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#/">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#/">
            About
          </a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="#/">
          Dataset
        </a>
      </li>
      <li className="nav-item">
      <a className="nav-link" href="#/">
        Data-contributor
      </a>
    </li>
    <li className="nav-item">
    <a className="nav-link" href="#/">
      Data-resquest
    </a>
  </li>
  <li className="nav-item">
  <a className="nav-link" href="#/">
    Documentation
  </a>
</li>
<li className="nav-item">
<a className="nav-link" href="#/">
  Contact-use 
</a>
</li>
<li className="nav-item">
<a className="nav-link" href="#/">
  Blog
</a>
</li>
      </ul>
    </div>
  </div>
    </div>

    </nav>
  );
};

export default Navbar;
