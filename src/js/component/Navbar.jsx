import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();  // Hook para redirigir al hacer clic en un favorito

    return (
        <nav className="navbar custom-navbar px-3">
            <a className="navbar-brand" href="#">
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg" width="80" alt="Star Wars" />
            </a>

            <div className="dropdown">
                <button className="btn btn-primary dropdown-toggle position-relative" type="button" id="favoritesDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                    Favorites 
                    <span className="badge bg-danger ms-2">{store.favorites.length}</span> {/* Número de favoritos */}
                </button>

                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="favoritesDropdown">
                    {store.favorites.length === 0 ? (
                        <li className="dropdown-item text-muted">No favorites yet</li>
                    ) : (
                        store.favorites.map((fav, index) => (
                            <li key={index} className="dropdown-item d-flex justify-content-between align-items-center">
                                <span 
                                    className="text-primary cursor-pointer"
                                    onClick={() => navigate(fav.url)} // Redirige a la página de detalles
                                >
                                    {fav.name} ({fav.type}) 
                                </span>
                                <button 
                                    className="btn btn-sm btn-outline-danger ms-2" 
                                    onClick={() => actions.removeFavorite(fav.name)}
                                >
                                    <i className="fa-solid fa-trash"></i>
                                </button>
                            </li>
                        ))
                    )}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
