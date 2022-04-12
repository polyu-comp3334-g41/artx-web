import React, { Component } from 'react'
import { Link, Outlet } from 'react-router-dom'

export default class Main extends Component {
    render() {
        return (
            <div>
                <div style={{background: 'linear-gradient(rgba(47, 23, 15, 0.65), rgba(47, 23, 15, 0.65)), url("assets/img/bg.jpg")', borderColor: 'var(--bs-blue)'}}>
                    <h1 className="text-center text-white d-none d-lg-block site-heading"><span style={{fontSize: 40, color: 'var(--bs-white)'}}><br />&nbsp; &nbsp; &nbsp; &nbsp;NFT -Share your creative artwork !<br /></span></h1>
                    <nav className="navbar navbar-dark navbar-expand-lg bg-dark py-lg-4" id="mainNav">
                    <div className="container">
                        <div className="collapse navbar-collapse" id="navbarResponsive-1">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item"><Link className="nav-link" to='/main/home'>Home</Link></li>
                            <li className="nav-item"><Link className="nav-link" to='/main/swap'>swap</Link></li>
                            <li className="nav-item"><Link className="nav-link" to='/main/browse'>browse</Link></li>
                            <li className="nav-item"><Link className="nav-link" to='/main/me'>me</Link></li>
                        </ul>
                        </div>
                    </div>
                    </nav>
                    <div>
                        <Outlet/>
                    </div>
                </div>
            </div>
        )
    }
}
