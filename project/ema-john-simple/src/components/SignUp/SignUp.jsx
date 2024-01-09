import React, { useContext, useState } from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const SignUp = () => {
    const [error , setError] = useState('');
    const {createUser} =  useContext(AuthContext);
    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email, password , confirm);
        setError('');
        if(password !== confirm){
            setError('Your Password did not match');
            return;

        }

        else if(password.length < 6){
            setError("Must be 6 characters or longer")
            return;
        }

        createUser(email, password)
        .then(result => {
            const logged = result.user;
            console.log(logged);
            form.reset();
        })
        .catch (error => {
            console.log(error)
        })
    }
    return (
        <div className='form-container'>
            <h1 className='form-title'>Sign UP</h1>
            <form onSubmit={handleSignUp}>
                <div className='form-control'>
                    <label htmlFor =" ">Email</label>
                    <input type ="email" name ="email" id="email" required />
                </div>
                <div className='form-control'>
                    <label htmlFor =" ">Password</label>
                    <input type ="password" name ="password" id="password" required />
                </div>
                <div className='form-control'>
                    <label htmlFor =" ">Confirm Password</label>
                    <input type ="password" name ="confirm" id="" required />
                </div>
                <input className='btn-submit' type="submit" value="LogIn"/>
            </form>
            <p className='link'><small>Already Have an account? <Link to ="/login">LogIn</Link></small></p>
            <p className='text-error'>{error}</p>
        </div>
    );
};

export default SignUp;