import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import SignUpImg from './SignUpImg'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const SignUpHome = () => {

    const history = useNavigate();

    const [inputValue, setInputValue] = useState({
        name: "",
        email: "",
        date: "",
        password: ""
    })

    const [data, setData] = useState([]);
    console.log(inputValue);
    console.log(setData);

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

        const { name, email, date, password } = inputValue;

        if (name === "") {
            alert("name field is required")
        } else if (email === "") {
            alert("email field is required")
        } else if (!email.includes("@")) {
            alert("please enter a valid email address")
        } else if (date === "") {
            alert("date field is required")
        } else if (password === "") {
            alert("password field is required")
        } else if (password.length < 5) {
            alert("password length should be grater than five")
        } else {
            console.log("data added successfully");
            alert("data added successfully");

            localStorage.setItem("useryoutube", JSON.stringify([...data, inputValue]));

            history("/login")
        }
    }



    return (
        <>
            <div className="container mt-3">
                <section className='log-in  justify-content-between' >
                    <div className="left_data mt-3 p-3" style={{ width: "100%" }} >
                        <h3 className="text-center col-lg-6">Sign Up</h3>
                        <Form>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                <Form.Control type="text" name='name' onChange={getData} placeholder="Enter Your Name" />
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                <Form.Control type="email" name='email' onChange={getData} placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                <Form.Control type="date" name='date' onChange={getData} />
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
                                <Form.Control type="password" name='password' onChange={getData} placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" onClick={addData} type="submit" className='col-lg-6' style={{ backgroundColor: "rgb(67, 185, 127)" }} >
                                Submit
                            </Button>
                        </Form>
                        <p className="mt-3">Already Have An Account <span><NavLink to="/login">SignIn</NavLink></span> </p>
                    </div>
                    <SignUpImg />
                </section>
            </div>
        </>
    )
}

export default SignUpHome
