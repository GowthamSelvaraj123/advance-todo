import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import "../styles/Layout.css"

export default function Layout() {
    return (
        <>
            <div className="layout">
                <header className="header">
                    <h1 className="header-title">My Dashboard</h1>
                </header>

                <div className="container">
                    <div className="sidebar">
                        <ul className="sidebar-menu">
                            <li>
                                <Link to="/todo" className="sidebar-link">
                                    📝 Todo
                                </Link>
                            </li>
                            <li>
                                <Link to="/notes" className="sidebar-link">
                                    🗒️ Notes
                                </Link>
                            </li>
                            <li>
                                <Link to="/contacts" className="sidebar-link">
                                    📞 Contacts
                                </Link>
                            </li>
                            <li>
                                <Link to="/resources" className="sidebar-link">
                                    📚 Resources
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="content">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}
