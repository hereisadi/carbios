import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Flash from 'react-reveal/Flash';
import { useHistory } from "react-router-dom";
import './user.css'
const User = () => {
    useEffect(() => {
        document.title = "User Login || CARBIOS";
    }, []);

    const history = useHistory();
    const [formData, setFormData] = useState({
      email: '',
      password: '',
      name:'',
      weight:"",
      location:""
    });

    
    return (
        <div className='user-top'>
            <h1>Welcome User!</h1>
            <Flash>
            <section id="login">
                    <div id="login-services">
                        <div className="box">
                            <img src="../../img/dark logo.jpeg" alt="" />
                            <div id="contact-box">
                                <form action="/" method='POST'>
                                <div class="form-group">
                                        <label for="name">Name:</label>
                                        <input type="text" name="name"  placeholder="Enter your Name:" required/>
                                    </div>
                                    <div class="form-group">
                                        <label for="name">Email/Mobile No.:</label>
                                        <input type="text" name="name" id="email" placeholder="Enter your email or mobile no" required/>
                                    </div>
                                    <div class="form-group">
                                        <label for="name">Password : </label>
                                        <input type="password" name="name" id="password" placeholder="Enter your password" required/>
                                    </div>
                                   
                                    <div class="form-group">
                                        <label for="name">Approximate weight:</label>
                                        <input type="text" name="name" id="text" placeholder="Enter weight in kg" required/>
                                    </div>
                                    <div class="form-group">
                                        <label for="name">Enter Location:</label>
                                        <input type="text" name="name" id="text" placeholder="Enter Lat and Lon respectively" required/>
                                    </div>
                                    <div class="form-group">
                                        <label for="name">Type of waste:</label>
                                        <select name="" id="">
                                            <option value="Biodegradable">Biodegradable</option>
                                            <option value="Non Biodegradable">Non Biodegradable</option>
                                        </select>
                                    </div>
                                    <button class="btn">Submit</button>
                                    <br/><br/>
                                    <h2 className='signup'>New to Carbios? <Link to={'/option/user/signup'}>SignUp</Link></h2><br/>
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

export default User