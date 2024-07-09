
/** This Header component is used to render the Header content in the application */

import { Link } from "react-router-dom";

const Header =function(){

    return(
        <>
        <nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary fixed-top" data-bs-theme="dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">MyBlog</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Post</Link>
                    </li>
                </ul>
                <Link className="btn btn-sm btn-outline-light" to='/add-form'>New Post</Link>
                </div>
            </div>
            </nav>
        </>
    )
}

export default Header;