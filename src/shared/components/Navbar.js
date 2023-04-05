import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { auth } from "../../firebase/firebase";

const Navbar = () => {
    const { currentUser } = useContext(AuthContext);
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light mx-4">
            <Link to="/">
                <a className="navbar-brand">BlogOBia</a>
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active" to={"/"}>
                        <Link to="/">
                            <a className="nav-link">All-Blogs</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/myblogs"}>
                            <a className="nav-link">My-Blogs</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/create">
                            <a className="nav-link">Create-Blog</a>
                        </Link>
                    </li>
                    {!currentUser && (
                        <>
                            <li className="nav-item">
                                <Link to="/login">
                                    <a className="nav-link">Login</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/signup">
                                    <a className="nav-link">SignUp</a>
                                </Link>
                            </li>
                        </>
                    )}
                    {currentUser && (
                        <li className="nav-item">
                            <button className="btn btn-lg btn-info" onClick={(e)=>auth.signOut()}>
                                Sign Out
                            </button>
                        </li>
                    )}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
