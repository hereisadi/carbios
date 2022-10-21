import React,{useEffect} from 'react'
import './user.css';
import { Link } from 'react-router-dom';
import Flash from 'react-reveal/Flash';
const Admin = () => {
    useEffect(() => {
        document.title = "Admin Login || CARBIOS";
      }, []);
  return (
    <div className='user-top'>
      <h1>Welcome Admin!</h1>
      <Flash>
            <section id="login">
                    <div id="login-services">
                        <div className="box">
                            <img src="../../img/dark logo.jpeg" alt="" />
                            <div id="contact-box">
                                <form action="/" method='POST'>
                                    <div class="form-group">
                                        <label for="name">Email:</label>
                                        <input type="text" name="name" id="email" placeholder="Enter your email" required/>
                                    </div>
                                    <div class="form-group">
                                        <label for="name">Password : </label>
                                        <input type="password" name="name" id="password" placeholder="Enter your password" required/>
                                    </div>
                                    <button class="btn">Login</button>
                                    <br/><br/>
                                    <h2 className='signup'>Are you a User? <Link to={'/option/user/login'}>User Login</Link></h2><br/>
                                    <h2 className='signup'>Move back? <Link to={'/options'}>Options</Link></h2>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </Flash>
    </div>
  )
}

export default Admin