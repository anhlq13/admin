/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Sidebar = () => {
    return (
        <div id="layoutSidenav_nav">
            <nav className="sidenav shadow-right sidenav-light">
                <div className="sidenav-menu">
                    <div className="nav accordion" id="accordionSidenav">
                        
                        <div className="sidenav-menu-heading">Core</div>
                        {/* Sidenav Accordion (Dashboard)*/}
                        <a className="nav-link collapsed" href="javascript:void(0);" data-bs-toggle="collapse" data-bs-target="#collapseDashboards" aria-expanded="false" aria-controls="collapseDashboards">
                            <div className="nav-link-icon"><i data-feather="activity" /></div>
                            Manager
                            <div className="sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div>
                        </a>
                        <div className="collapse" id="collapseDashboards" data-bs-parent="#accordionSidenav">
                            <nav className="sidenav-menu-nested nav accordion" id="accordionSidenavPages">
                                <a className="nav-link" href="#">
                                    Dashboard
                                </a>
                                <a className="nav-link" href="#">Tours Manager</a>
                                <a className="nav-link" href="#">Users Manager</a>
                                <a className="nav-link" href="#">Booking Manager</a>
                            </nav>
                        </div>
                        
                    </div>
                </div>
                {/* Sidenav Footer*/}
                <div className="sidenav-footer">
                    <div className="sidenav-footer-content">
                        <div className="sidenav-footer-subtitle">Logged in as:</div>
                        <div className="sidenav-footer-title">Admin</div>
                    </div>
                </div>
            </nav>
        </div>

    );
};

export default Sidebar;