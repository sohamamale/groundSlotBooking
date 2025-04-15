import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"


function Signup() {

    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/home");
    }

    return (
    <>
    <div className="border border-primary m-5 p-5">
        <h1 className="display-3 centerHeader">Signup</h1>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Phone Number</label>
                <input placeholder="1234567890" type="number" required className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                {/*
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                */}
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input placeholder="abc@xyz.com" type="email" required className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                {/*
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                */}
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" required id="exampleInputPassword1" placeholder="Enter your password" />
            </div>
            <p>Already have an account? <Link to="/login">Login</Link></p>
            <button type="submit" className="btn btn-primary">Sign Up</button> 
        </form>
    </div>
    </>
)
}

export default Signup