import React, { useEffect } from 'react'
import './user.css';
import { Link } from 'react-router-dom';
import Flash from 'react-reveal/Flash';
const Usersignup = () => {
    useEffect(() => {
        document.title = "User SignUp || CARBIOS";
    }, []);
    return (
        <>
            <div className="user-top">
                <h1>SignUp to Carbios. It's Free!</h1>
                <Flash>
                    <section id="login">
                        <div id="login-services">
                            <div className="box">
                                <img src="../../img/dark logo.jpeg" alt="" />

                                <div id="contact-box">
                                    <form action="/" method='POST'>
                                        <div class="form-group">
                                            <label for="name">Name:</label>
                                            <input type="text" name="name" placeholder="Enter your Name:" required />
                                        </div>
                                        <div class="form-group">
                                            <label for="name">Email/Mobile No.:</label>
                                            <input type="text" name="name" id="email" placeholder="Enter your email or mobile no" required />
                                        </div>
                                        <div class="form-group">
                                            <label for="name">Password : </label>
                                            <input type="password" name="name" id="password" placeholder="Enter your password" required />
                                        </div>

                                        <div class="form-group">
                                            <label for="name">Confirm Password : </label>
                                            <input type="password" name="name" id="password" placeholder="Enter your password again" required />
                                        </div>
                                        <button class="btn">SignUp</button>
                                        <br /><br />
                                        <h2 className='signup'>Already have an account? <Link to={'/option/user/login'}>Login</Link></h2><br />
                                        <h2 className='signup'>Move back? <Link to={'/options'}>Options</Link></h2>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                </Flash>

            </div>
        </>
    )
}

export default Usersignup