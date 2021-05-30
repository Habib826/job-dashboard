import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const Registration = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onClientSubmit = (data) => console.log(data);
    const onCandidateSubmit = (data) => console.log(data);
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
                <div className="tab-pane container active" id="client">
                    <form id="tab-login" onSubmit={handleSubmit(onClientSubmit)}>
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
                            <button type="submit" className="btn btn-primary">Register as Client</button>
                        </div>
                    </form>
                </div>

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