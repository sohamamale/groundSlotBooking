import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Timings from "./timings";
function Nav() {
    return (
        <>
        <nav className="sticky-top navbar navbar-expand-lg bg-body-secondary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">groundSlotBooking</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/timings">Timings</Link>
                        </li>
                        <li className="nav-item">
                        {/*<a className="nav-link " href="#"><span className="">Log out</span></a>*/}
                        <Link className = "nav-link text-danger" to="/login">Log out</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </>
    )
}

export default Nav;