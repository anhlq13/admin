/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Header = () => {
    return (
        <nav className="topnav navbar navbar-expand shadow justify-content-between justify-content-sm-start navbar-light bg-white" id="sidenavAccordion">
            {/* Sidenav Toggle Button*/}
            <button className="btn btn-icon btn-transparent-dark order-1 order-lg-0 me-2 ms-lg-2 me-lg-0" id="sidebarToggle"><i data-feather="menu" /></button>
            {/* Navbar Brand*/}
            {/* * * Tip * * You can use text or an image for your navbar brand.*/}
            {/* * * * * * * When using an image, we recommend the SVG format.*/}
            {/* * * * * * * Dimensions: Maximum height: 32px, maximum width: 240px*/}
            <a className="navbar-brand pe-3 ps-4 ps-lg-2" href="index.html">Admin</a>
            {/* Navbar Search Input*/}
            {/* * * Note: * * Visible only on and above the lg breakpoint*/}
            <form className="form-inline me-auto d-none d-lg-block me-3">
                <div className="input-group input-group-joined input-group-solid">
                    <input className="form-control pe-0" type="search" placeholder="Search" aria-label="Search" />
                    <div className="input-group-text"><i data-feather="search" /></div>
                </div>
            </form>
            {/* Navbar Items*/}
            <ul className="navbar-nav align-items-center ms-auto">
                {/* Documentation Dropdown*/}
                <li className="nav-item dropdown no-caret d-none d-md-block me-3">
                    <a className="nav-link dropdown-toggle" id="navbarDropdownDocs" href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <div className="fw-500">Documentation</div>
                        <i className="fas fa-chevron-right dropdown-arrow" />
                    </a>
                    <div className="dropdown-menu dropdown-menu-end py-0 me-sm-n15 me-lg-0 o-hidden animated--fade-in-up" aria-labelledby="navbarDropdownDocs">
                        <a className="dropdown-item py-3" href="https://docs.startbootstrap.com/sb-admin-pro" target="_blank" rel="noreferrer">
                            <div className="icon-stack bg-primary-soft text-primary me-4"><i data-feather="book" /></div>
                            <div>
                                <div className="small text-gray-500">Documentation</div>
                                Usage instructions and reference
                            </div>
                        </a>
                        <div className="dropdown-divider m-0" />
                        <a className="dropdown-item py-3" href="https://docs.startbootstrap.com/sb-admin-pro/components" target="_blank" rel="noreferrer">
                            <div className="icon-stack bg-primary-soft text-primary me-4"><i data-feather="code" /></div>
                            <div>
                                <div className="small text-gray-500">Components</div>
                                Code snippets and reference
                            </div>
                        </a>
                        <div className="dropdown-divider m-0" />
                        <a className="dropdown-item py-3" href="https://docs.startbootstrap.com/sb-admin-pro/changelog" target="_blank" rel="noreferrer">
                            <div className="icon-stack bg-primary-soft text-primary me-4"><i data-feather="file-text" /></div>
                            <div>
                                <div className="small text-gray-500">Changelog</div>
                                Updates and changes
                            </div>
                        </a>
                    </div>
                </li>
                {/* Navbar Search Dropdown*/}
                {/* * * Note: * * Visible only below the lg breakpoint*/}
                <li className="nav-item dropdown no-caret me-3 d-lg-none">
                    <a className="btn btn-icon btn-transparent-dark dropdown-toggle" id="searchDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i data-feather="search" /></a>
                    {/* Dropdown - Search*/}
                    <div className="dropdown-menu dropdown-menu-end p-3 shadow animated--fade-in-up" aria-labelledby="searchDropdown">
                        <form className="form-inline me-auto w-100">
                            <div className="input-group input-group-joined input-group-solid">
                                <input className="form-control pe-0" type="text" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
                                <div className="input-group-text"><i data-feather="search" /></div>
                            </div>
                        </form>
                    </div>
                </li>
                {/* Alerts Dropdown*/}
                <li className="nav-item dropdown no-caret d-none d-sm-block me-3 dropdown-notifications">
                    <a className="btn btn-icon btn-transparent-dark dropdown-toggle" id="navbarDropdownAlerts" href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i data-feather="bell" /></a>
                    <div className="dropdown-menu dropdown-menu-end border-0 shadow animated--fade-in-up" aria-labelledby="navbarDropdownAlerts">
                        <h6 className="dropdown-header dropdown-notifications-header">
                            <i className="me-2" data-feather="bell" />
                            Alerts Center
                        </h6>
                        {/* Example Alert 1*/}
                        <a className="dropdown-item dropdown-notifications-item" href="#!">
                            <div className="dropdown-notifications-item-icon bg-warning"><i data-feather="activity" /></div>
                            <div className="dropdown-notifications-item-content">
                                <div className="dropdown-notifications-item-content-details">December 29, 2021</div>
                                <div className="dropdown-notifications-item-content-text">This is an alert message. It's nothing serious, but it requires your attention.</div>
                            </div>
                        </a>
                        {/* Example Alert 2*/}
                        <a className="dropdown-item dropdown-notifications-item" href="#!">
                            <div className="dropdown-notifications-item-icon bg-info"><i data-feather="bar-chart" /></div>
                            <div className="dropdown-notifications-item-content">
                                <div className="dropdown-notifications-item-content-details">December 22, 2021</div>
                                <div className="dropdown-notifications-item-content-text">A new monthly report is ready. Click here to view!</div>
                            </div>
                        </a>
                        {/* Example Alert 3*/}
                        <a className="dropdown-item dropdown-notifications-item" href="#!">
                            <div className="dropdown-notifications-item-icon bg-danger"><i className="fas fa-exclamation-triangle" /></div>
                            <div className="dropdown-notifications-item-content">
                                <div className="dropdown-notifications-item-content-details">December 8, 2021</div>
                                <div className="dropdown-notifications-item-content-text">Critical system failure, systems shutting down.</div>
                            </div>
                        </a>
                        {/* Example Alert 4*/}
                        <a className="dropdown-item dropdown-notifications-item" href="#!">
                            <div className="dropdown-notifications-item-icon bg-success"><i data-feather="user-plus" /></div>
                            <div className="dropdown-notifications-item-content">
                                <div className="dropdown-notifications-item-content-details">December 2, 2021</div>
                                <div className="dropdown-notifications-item-content-text">New user request. Woody has requested access to the organization.</div>
                            </div>
                        </a>
                        <a className="dropdown-item dropdown-notifications-footer" href="#!">View All Alerts</a>
                    </div>
                </li>
                {/* Messages Dropdown*/}
                <li className="nav-item dropdown no-caret d-none d-sm-block me-3 dropdown-notifications">
                    <a className="btn btn-icon btn-transparent-dark dropdown-toggle" id="navbarDropdownMessages" href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i data-feather="mail" /></a>
                    <div className="dropdown-menu dropdown-menu-end border-0 shadow animated--fade-in-up" aria-labelledby="navbarDropdownMessages">
                        <h6 className="dropdown-header dropdown-notifications-header">
                            <i className="me-2" data-feather="mail" />
                            Message Center
                        </h6>
                        {/* Example Message 1  */}
                        <a className="dropdown-item dropdown-notifications-item" href="#!">
                            <img className="dropdown-notifications-item-img" src="assets/img/illustrations/profiles/profile-2.png" />
                            <div className="dropdown-notifications-item-content">
                                <div className="dropdown-notifications-item-content-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                                <div className="dropdown-notifications-item-content-details">Thomas Wilcox ?? 58m</div>
                            </div>
                        </a>
                        {/* Example Message 2*/}
                        <a className="dropdown-item dropdown-notifications-item" href="#!">
                            <img className="dropdown-notifications-item-img" src="assets/img/illustrations/profiles/profile-3.png" />
                            <div className="dropdown-notifications-item-content">
                                <div className="dropdown-notifications-item-content-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                                <div className="dropdown-notifications-item-content-details">Emily Fowler ?? 2d</div>
                            </div>
                        </a>
                        {/* Example Message 3*/}
                        <a className="dropdown-item dropdown-notifications-item" href="#!">
                            <img className="dropdown-notifications-item-img" src="assets/img/illustrations/profiles/profile-4.png" />
                            <div className="dropdown-notifications-item-content">
                                <div className="dropdown-notifications-item-content-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                                <div className="dropdown-notifications-item-content-details">Marshall Rosencrantz ?? 3d</div>
                            </div>
                        </a>
                        {/* Example Message 4*/}
                        <a className="dropdown-item dropdown-notifications-item" href="#!">
                            <img className="dropdown-notifications-item-img" src="assets/img/illustrations/profiles/profile-5.png" />
                            <div className="dropdown-notifications-item-content">
                                <div className="dropdown-notifications-item-content-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                                <div className="dropdown-notifications-item-content-details">Colby Newton ?? 3d</div>
                            </div>
                        </a>
                        {/* Footer Link*/}
                        <a className="dropdown-item dropdown-notifications-footer" href="#!">Read All Messages</a>
                    </div>
                </li>
                {/* User Dropdown*/}
                <li className="nav-item dropdown no-caret dropdown-user me-3 me-lg-4">
                    <a className="btn btn-icon btn-transparent-dark dropdown-toggle" id="navbarDropdownUserImage" href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img className="img-fluid" src="assets/img/illustrations/profiles/profile-1.png" /></a>
                    <div className="dropdown-menu dropdown-menu-end border-0 shadow animated--fade-in-up" aria-labelledby="navbarDropdownUserImage">
                        <h6 className="dropdown-header d-flex align-items-center">
                            <img className="dropdown-user-img" src="assets/img/illustrations/profiles/profile-1.png" />
                            <div className="dropdown-user-details">
                                <div className="dropdown-user-details-name">Valerie Luna</div>
                                <div className="dropdown-user-details-email"><a href="cdn-cgi/l/email-protection.html" className="__cf_email__" data-cfemail="5c2a3029323d1c3d3330723f3331">[email&nbsp;protected]</a></div>
                            </div>
                        </h6>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" href="#!">
                            <div className="dropdown-item-icon"><i data-feather="settings" /></div>
                            Account
                        </a>
                        <a className="dropdown-item" href="#!">
                            <div className="dropdown-item-icon"><i data-feather="log-out" /></div>
                            Logout
                        </a>
                    </div>
                </li>
            </ul>
        </nav>

    );
};

export default Header;