import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

function Footer() {
  return (
    <footer className="bg-body-tertiary text-center py-3">
      <div className="container">
        <p className="mb-0">
          <Link className="text-black" to="/">
            Home
          </Link>{" "}
          |{" "}
          <Link className="text-black" to="/create">
            Create
          </Link>{" "}
          |{" "}
          <Link className="text-black" to="/display">
            Display
          </Link>
        </p>
        <form className="d-flex mt-2" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </footer>
  );
}

export default Footer;
