
import React from "react"
import logo from '../Images/Logo/favicon.ico'
import usericon from '../Images/Logo/usericon.png'
import logouticon from '../Images/Logo/logout.png'


function Navbar(props) {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    {/* <a className="navbar-brand" href="/">Navbar</a> */}
                    <a className="navbar-brand" href="/"><img src={logo} alt="No Logo" height="35px" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Dashboard</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">App</a>
                            </li>

                        </ul>
                        <form className="d-flex">
                            <a className="navbar-brand" href="/"><img src={usericon} alt="No Logo" height="25px" /></a>
                            <span className="my-2 ">{props.username}</span>
                            <a className="navbar-brand ms-1 " href="/"><img src={logouticon} alt="No Logo" height="25px" /></a>



                        </form>
                    </div>
                </div>
            </nav>
        </>
    )

}

export default Navbar;

