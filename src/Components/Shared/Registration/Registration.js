import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../firebase.config"

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}

const Registration = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onClientSubmit = (data) => console.log(data);

    const onCandidateSubmit = (data) => {
        console.log(data)

        const newUserInfo = {
            name: data.fullName,
            email: data.email,
            phone: data.phone,
            role:"candidate"
        }



        if (data.password === data.confirmpass) {

            firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
                .then((userCredential) => {
                    // Signed in 
                    var user = userCredential.user;
                    console.log(user);
                    addName()
                    if (user.email) {

                        fetch(`http://localhost:5000/register`, {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify(newUserInfo)
                        })
                            .then(response => response.json())
                            .then(data => {
                                console.log(data);
                            })
                    }
                })
                .catch((error) => {
                    var errorMessage = error.message;
                    console.log(errorMessage);
                    alert(errorMessage)
                });


        } else {
            alert('password not matched')
        }

        const addName = () => {
            var user = firebase.auth().currentUser;

            user.updateProfile({
                displayName: data.fullName
            }).then(function (results) {
                // Update successful.
                console.log(results);
            }).catch(function (error) {
                // An error happened.
                console.log(error);
            });
        }
    };



    return (
        <div className="container">
            <ul className="nav nav-pills d-flex justify-content-center" style={{ background: '#0d5bab' }}>
                <li className="nav-item">
                    <a className="nav-link active" data-toggle="pill" href="#client">Client Registration </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-toggle="pill" href="#candidate">Candidate Registration</a>
                </li>
            </ul>

            <div className="tab-content">
                {/* <div className="tab-pane container active" id="client">
                    <form id="tab-login" onSubmit={handleSubmit(onClientSubmit)}>
                        <div className="form-group">
                            <label htmlFor="fullName" className="form-label">Full Name</label>
                            <input type="text" {...register("fullName", { required: true })} className="form-control" placeholder="Enter your full name" id="fullname" />
                            errors will return when field validation fails 
                            {errors.fullName && <span>This field is required</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" {...register("email", { required: true })} className="form-control" placeholder="Enter your email" id="email" />
                            errors will return when field validation fails 
                            {errors.email && <span>This field is required</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone" className="form-label">Phone</label>
                            <input type="tel" {...register("phone", { required: true })} className="form-control" placeholder="Enter your phone number" id="phone" />
                            errors will return when field validation fails 
                            {errors.phone && <span>This field is required</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" {...register("password", { required: true })} className="form-control" placeholder="Enter password" id="password" />
                            errors will return when field validation fails 
                            {errors.password && <span>This field is required</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirmPass" className="form-label">Confirm Password</label>
                            <input type="password" {...register("confirmpass", { required: true })} className="form-control" placeholder="Confirm your password" />
                            errors will return when field validation fails 
                            {errors.confirmpass && <span>This field is required</span>}
                        </div>

                        <div className="form-group d-flex justify-content-center">
                            <button type="submit" className="btn btn-primary">Register as Client</button>
                        </div>
                    </form>
                </div> */}

                <div className="tab-pane container " id="candidate">
                    <form id="tab-login" onSubmit={handleSubmit(onCandidateSubmit)}>
                        <div className="form-group">
                            <label htmlFor="fullName" className="form-label">Full Name</label>
                            <input type="text" {...register("fullName", { required: true })} className="form-control" placeholder="Enter your full name" id="fullname" />
                            {/* errors will return when field validation fails  */}
                            {errors.fullName && <span>This field is required</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" {...register("email", { required: true })} className="form-control" placeholder="Enter your email" id="email" />
                            {/* errors will return when field validation fails  */}
                            {errors.email && <span>This field is required</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone" className="form-label">Phone</label>
                            <input type="tel" {...register("phone", { required: true })} className="form-control" placeholder="Enter your phone number" id="phone" />
                            {/* errors will return when field validation fails  */}
                            {errors.phone && <span>This field is required</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" {...register("password", { required: true })} className="form-control" placeholder="Enter password" id="password" />
                            {/* errors will return when field validation fails  */}
                            {errors.password && <span>This field is required</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirmPass" className="form-label">Confirm Password</label>
                            <input type="password" {...register("confirmpass", { required: true })} className="form-control" placeholder="Confirm your password" />
                            {/* errors will return when field validation fails  */}
                            {errors.confirmpass && <span>This field is required</span>}
                        </div>

                        <div className="form-group d-flex justify-content-center">
                            <button type="submit" className="btn btn-primary">Register as Candidate</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="row">
                <p className="text-center">Already have an account? <Link to="/"><span className="text-danger">Login Here</span></Link></p>
            </div>
        </div>
    );
};

export default Registration;