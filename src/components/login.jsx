import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom";

function Login() {
    
    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/home');
    }
    
    return (
    <>
    <div className="border border-primary m-5 p-5">
        <h1 className="display-3 centerHeader">Login</h1>
        <form onSubmit={handleSubmit}>
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
            <p>Don't have an account? <Link to="/signup">Signup.</Link> </p>
            <button type="submit" className="btn btn-primary">Log In</button>
        </form>
    </div>
    </>
)
}

export default Login