import React, { useEffect } from "react";
import "./user.css";
import Pulse from "react-reveal/Pulse";
const Contact = () => {
  useEffect(() => {
    document.title = "Contact Us || CARBIOS";
  }, []);
  return (
    <>
      <div className="user-top">
        <h1>Have any Query?</h1>
        <Pulse>
          <section id="login">
            <div id="login-services">
              <div className="box">
                <img src="./img/contact1.jpg" alt="" />
                <div id="contact-box">
                  <form action="/" method="POST">
                    <div class="form-group">
                      <label for="name">Name:</label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your Name:"
                        required
                      />
                    </div>
                    <div class="form-group">
                      <label for="name">Email/Mobile No.:</label>
                      <input
                        type="text"
                        name="name"
                        id="email"
                        placeholder="Enter your email or mobile no"
                        required
                      />
                    </div>
                    <div>
                      <div class="form-group">
                        <label for="name">Your Message:</label>
                        <input
                          type="text"
                          name="name"
                          id="email"
                          placeholder="Enter your query"
                          required
                        />
                      </div>
                    </div>
                    <button class="btn">Login</button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </Pulse>
      </div>
    </>
  );
};

export default Contact;
