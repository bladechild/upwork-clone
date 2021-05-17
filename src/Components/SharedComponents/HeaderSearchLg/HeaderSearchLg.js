/* eslint-disable */
import React from 'react'

export default function HeaderSearchLg() {
    return (
        <>
            <form id="search-form-id" className="d-flex ms-4">
                <button className="btn position-relative search-btn-cn">
                    <i className="fa fa-search text-white search-icon-cn"></i>
                </button>
                <div className="dropdown search-type-cn">
                    <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdownMenuLink"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        <i className="fa fa-sort-down text-white search-icon-cn"></i>
                    </a>
                    <ul
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdownMenuLink">
                        <a className="dropdown-item px-4" href="#">
                            <div className="d-flex align-items-center">
                                <span className="me-2 mb-3">
                                    <i className="fas fa-user fs-6"></i>
                                </span>
                                <div className="acc-cn ms-2">
                                    <p>Talent</p>
                                    <p>Hire professionals and agencies</p>
                                </div>
                            </div>
                        </a>
                        <a className="dropdown-item px-4" href="#">
                            <div className="d-flex align-items-center">
                                <span className="me-2 mb-3">
                                    <i className="fas fa-clipboard-list fs-6"></i>
                                </span>
                                <div className="acc-cn ms-2">
                                    <p>
                                        Projects
                                        <span
                                            id="search-type-projects-new"
                                            className="rounded-pill ms-2"
                                        >
                                            NEW
                                        </span>
                                    </p>
                                    <p>Buy pre-defined projects</p>
                                </div>
                            </div>
                        </a>
                        <a className="dropdown-item px-4" href="#">
                            <div className="d-flex align-items-center">
                                <span className="me-2 mb-3">
                                    <i className="fas fa-briefcase fs-6"></i>
                                </span>
                                <div className="acc-cn ms-2">
                                    <p>Jobs</p>
                                    <p>Apply to jobs posted by clients</p>
                                </div>
                            </div>
                        </a>
                    </ul>
                </div>
                <input
                    className="form-control ms-1 ps-5 py-1 border-0 text-white search-input-cnn"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                />
            </form>
        </>
    )
}
