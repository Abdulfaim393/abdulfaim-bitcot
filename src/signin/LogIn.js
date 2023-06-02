import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import SignUpImg from './SignUpImg'
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const LogIn = () => {

    const history = useNavigate();

    const [inputValue, setInputValue] = useState({
        email: "",
        password: ""
    })

    console.log(inputValue);

    const getData = (e) => {

        const { value, name } = e.target;

        setInputValue(() => {
            return {
                ...inputValue,
                [name]: value
            }
        })
    }

    const addData = (e) => {
        e.preventDefault();

        const getuserArr = localStorage.getItem("useryoutube");
        console.log(getuserArr);

        const { email, password } = inputValue;

        if (email === "") {
            alert("email field is required")
        } else if (!email.includes("@")) {
            alert("please enter a valid email address")
        } else if (password === "") {
            alert("password field is required")
        } else if (password.length < 5) {
            alert("password length should be grater than five")
        } else {
            if (getuserArr && getuserArr.length) {
                const userData = JSON.parse(getuserArr);
                const userlogin = userData.filter((element, k) => {
                    return element.email === email && element.password === password
                });

                if (userlogin.length === 0) {
                    alert("user credentials invalid")
                } else {
                    console.log("user login successfully");
                    alert("user login successfully");

                    localStorage.setItem("user_login", JSON.stringify(userlogin));

                    history("/cart")
                }

            }
        }
    }

    return (
        <>
            <div className="container mt-3">
                <section className='log-in justify-content-between' >
                    <div className="left_data mt-3 p-3" style={{ width: "100%" }} >
                        <h3 className="text-center col-lg-6">Sign In</h3>
                        <Form>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                <Form.Control type="email" name='email' onChange={getData} placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
                                <Form.Control type="password" name='password' onChange={getData} placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" onClick={addData} type="submit" className='col-lg-6' style={{ backgroundColor: "rgb(67, 185, 127)" }} >
                                Log In
                            </Button>
                        </Form>
                        <p className="mt-3">Create An Account <span><NavLink to="/">SignUp</NavLink></span> </p>
                    </div>
                    <SignUpImg />
                </section>
            </div>
        </>
    )
}

export default LogIn
