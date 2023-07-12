import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    // User Login info for testing purposes
    const database = [
        {
            username: "user1",
            password: "pass1"
        },
        {
            username: "user2",
            password: "pass2"
        }
    ];

    const errorMessage= "invalid username or password";

    const handleSubmit = (event) => {
        // Prevent page reload
        event.preventDefault();
    };

    const {uname, pass} = document.forms[0];

    //find login info that matches data in db
    const userData = database.find((user) => user.username === uname.value);

    //then compare the input data with data in the database
    if (userData) {
        if (userData.password !== pass.value) {
          // if password is wrong, show error message
          alert.window(errorMessage);
        } else {
          setIsSubmitted(true);
        }
      } else {
        // if username does not exist in the database, display error message
        alert.window(errorMessage);
      }
    

    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label>Username </label>
                    <input type="text" name="username" required />
                    {/* {renderErrorMessage("uname")} */}
                </div>
                <div className="input-container">
                    <label>Password </label>
                    <input type="password" name="password" required />
                    {/* {renderErrorMessage("pass")} */}
                </div>
                <div className="button-container">
                    <input type="submit" />
                </div>
            </form>
            <div className="login-form">
  <div className="title">Sign In</div>
  {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
</div>
        </div>
    )
}

export default Login;