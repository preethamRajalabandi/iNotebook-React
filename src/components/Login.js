import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Login = (props) => { 
    // const [credentials, setCredentials] = useState({email: "", password: ""})

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password})
        });
        const json = await response.json()
        console.log(json);
        if(json.success) {
            // Save the auth token and redirect
            localStorage.setItem('token',json.authToken)
            props.showAlert("Logged in Successfully", "success")
            navigate('/');
        } else {
            props.showAlert("Invalid Details", "danger")
        }
    }

    return (
        <div className='mt-2'>
            <h2 className='my-2'>Login to continue to iNotebook</h2>
            <form onSubmit={handleSubmit}>
                <div className="my-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" onChange={e => setEmail(e.target.value)} id="email" name='email' aria-describedby="emailHelp" value={email}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" onChange={e => setPassword(e.target.value)} id="password" name='password' value={password}/>
                </div>

                <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
        </div>
    )
}

export default Login