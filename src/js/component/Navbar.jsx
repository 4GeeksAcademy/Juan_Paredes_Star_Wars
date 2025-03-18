import React from "react";


const Navbar = () => {

    return (
        <nav className="navbar custom-navbar px-3">

            <a className="navbar-brand" href="#">
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg" width="80" alt="Star Wars" />
            </a>
            <div className="dropdown">
                <button className="btn btn-primary dropdown-toggle position-relative" type="button" id="favoritesDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                    Favorites
                </button>
              
            </div>
        </nav>

    )

}
export default Navbar;