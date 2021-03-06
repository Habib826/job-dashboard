import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../firebase.config"
import './Login.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}

const Login = () => {

    const [change, setChange] = useState()

    const changeData =() => {
        const data ={
            email: document.getElementById('email')?.value,
            password: document.getElementById('password')?.value
        }

        setChange(data)
    }

    const handleSubmit = () => {
        // console.log(document.getElementById('password').value);
        // console.log(document.getElementById('email').value);
console.log(change);
        firebase.auth().signInWithEmailAndPassword(change.email, change.password)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                console.log(user);
                // ...
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorMessage);
            });
    }


    //sign in with google
    const provider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const credential = result.credential;
                const token = credential.accessToken;
                const { displayName, email } = result.user;
                console.log(displayName, email);
            })
            .catch(err => {
                console.log(err.message)
            })
    }

    return (
        <section className="login">
            <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
                <div className="card card0 border-0">
                    <div className="row d-flex align-items-center">
                        <div className="col-lg-6">
                            <div className="card1 pb-5 mt-5">
                                <div className="row px-3 justify-content-center mt-4 mb-5 border-line"> <img src="https://i.imgur.com/uNGdWHi.png" className="image" alt="" /> </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card2 card border-0 px-4 py-5">
                                <div className="row mb-4 px-3">
                                    <h6 className="mb-0 mr-4 mt-2">Sign in with</h6>
                                    <div className="facebook text-center mr-3">
                                        <div onClick={handleGoogleSignIn} className="fab fa-google"></div>
                                    </div>

                                </div>
                                <div className="row px-3 mb-4">
                                    <div className="line"></div> <small className="or text-center">Or</small>
                                    <div className="line"></div>
                                </div>
                                <div className="row px-3">
                                    <label className="mb-1">
                                        <h6 className="mb-0 text-sm">Email Address</h6>
                                    </label>
                                    <input onChange={() =>changeData()} className="mb-4" type="text" id="email" name="email" placeholder="Enter a valid email address" />
                                </div>
                                <div className="row px-3">
                                    <label className="mb-1">
                                        <h6 className="mb-0 text-sm">Password</h6>
                                    </label>
                                    <input onChange={() =>changeData()} type="password" name="password" id="password" placeholder="Enter password" /> </div>
                                <div className="row px-3 mb-4">
                                    <div className="custom-control custom-checkbox custom-control-inline">
                                        <input id="chk1" type="checkbox" name="chk" className="custom-control-input" />
                                        <label htmlFor="chk1" className="custom-control-label text-sm">Remember me</label>
                                    </div>
                                </div>
                                <div className="row mb-3 px-3"> <button onClick={() => handleSubmit()} type="submit" className="btn btn-blue text-center">Login</button> </div>
                                <div className="row mb-4 px-3">
                                    <small className="font-weight-bold"> Don't have an account? <Link to="/register" className="text-danger
                                    ">Register</Link> your account</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-blue py-4">
                        <div className="row px-3"> <small className="ml-4 ml-sm-5 mb-2">Copyright &copy; {new Date().getFullYear()}. All rights reserved.</small>
                            <div className="social-contact ml-4 ml-sm-auto"> <span className="fa fa-facebook mr-4 text-sm"></span> <span className="fa fa-google-plus mr-4 text-sm"></span> <span className="fa fa-linkedin mr-4 text-sm"></span> <span className="fa fa-twitter mr-4 mr-sm-5 text-sm"></span> </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;