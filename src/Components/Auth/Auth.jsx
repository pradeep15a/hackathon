import React,{ useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Auth.css';


const initialFormData = { name: ' ', company: ' ', email: ' ', password: ' ', confirmPassword: ' ' }


const Auth = () => {
    const navigate = useNavigate();
    const [isSignUp, setIsSignUp ] = useState(true);
    const [formData, setFormData] = useState(initialFormData);

    
    const handleSubmit = (e) => {
        e.preventDefault();

    }
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name] : e.target.value })
    }
    const switchMode = () => {
        setIsSignUp((prevIsSignUp) => (!prevIsSignUp));
    }
  return (
    <div className="body-auth-container">
         <div className="auth-container">
        <h1>{isSignUp ? 'Sign Up' : 'Login'}</h1>
        <form className='form' onSubmit={handleSubmit}>
        {
            isSignUp &&
            <>
              <div className="inputBox">
                <input type="text" name="name" required onChange={handleChange} />
                <span>  Name  </span>
              </div>
              <div className="inputBox">
                <input type="text" name="company" required onChange={handleChange}/>
                <span>  Company  </span>
              </div>
            </>
        }
        <div className="inputBox">
          <input type="text" name="email" required onChange={handleChange} />
          <span>Email  </span>
        </div>
        <div className="inputBox">
          <input type="password" name='password' required onChange={handleChange}/>
          <span>Password  </span>
        </div>
        {
          isSignUp &&
          <>
            <div className="inputBox">
              <input type="password" name='confirmPassword' required onChange={handleChange}  />
              <span>Confirm Password  </span>
            </div>
          </>
        }
        <div className="btn">
          <button type="submit" >{isSignUp ? 'Sign Up' : 'Login'}</button>
          <button onClick={switchMode} >{isSignUp ? 'Already have an account ?' : 'Create a new account ?'}</button>
        </div>
        </form>
    </div>
    </div>
   
  )
}

export default Auth;