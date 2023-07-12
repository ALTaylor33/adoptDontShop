import React, { useState } from 'react';


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

    const errorMessage = "invalid username or password";

    const handleSubmit = (event) => {
        // Prevent page reload
        event.preventDefault();

       const { uname, pass } = document.forms[0];
    // const uname= "user1"
    // const pass = "pass1"

    //find login info that matches data in db
    const userData = database.find((user) => user.username === uname);

    //then compare the input data with data in the database
    if (userData) {
        if (userData.password !== pass) {
            // if password is wrong, show error message
            console.log(errorMessage);
        } else {
            setIsSubmitted(true);
        }
    } else {
        // if username does not exist in the database, display error message
        console.log(errorMessage);
    }  
    };

   


    return (
        <div className="login-form">
            <div className="title">Login</div>
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
                    <input type="submit"  />
                {isSubmitted ? <div>User is successfully logged in</div> : console.log("not logged in")}
                </div>
            </form>


         
        </div>
    )
}

export default Login;