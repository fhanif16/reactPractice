import React, { useContext } from 'react';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location)

    let from = location.state?.from?.pathname || "/";


    const handleLogIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        signIn(email , password)
        .then(result => {
            const logged = result.user;
            console.log(logged)
            form.reset();
            navigate(from, {replace:true});
        })
        .catch(error => {
            console.log(error)
        })
    }
    return (
        <div className='form-container'>
            <h1 className='form-title'>Login</h1>
            <form onSubmit={handleLogIn}>
                <div className='form-control'>
                    <label htmlFor =" ">Email</label>
                    <input type ="email" name ="email" id="email" required />
                </div>
                <div className='form-control'>
                    <label htmlFor =" ">Password</label>
                    <input type ="password" name ="password" id="password" required />
                </div>
                <input className='btn-submit' type="submit" value="LogIn"/>
            </form>
            <p className='link'><small>New to Ema John? <Link to ="/signup">Create New Account</Link></small></p>
        </div>
    );
};

export default Login;