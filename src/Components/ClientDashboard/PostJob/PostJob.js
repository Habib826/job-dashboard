import React from 'react';
import { useForm } from "react-hook-form";

const PostJob = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        fetch(`http://localhost:5000/addJob`,{
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data =>{
            console.log(data);
        })
    }
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h2 className="text-center">Post Your Job Here</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* register your input into the hook by invoking the "register" function */}
                        <input  {...register("jobTitle", { required: true })} type="text" placeholder="Enter job title" />
                        {errors.jobTitle && <span>This field is required</span>}
                        {/* include validation with required or other standard HTML validation rules */}
                        <input {...register("location", { required: true })} type="text" placeholder="Enter job location" />
                        {/* errors will return when field validation fails  */}
                        {errors.exampleRequired && <span>This field is required</span>}
                        <input {...register("company", { required: true })} type="text" placeholder="Enter your company name" />
                        {/* errors will return when field validation fails  */}
                        {errors.exampleRequired && <span>This field is required</span>}
                        <textarea {...register("description", { required: true })} type="text" placeholder="Enterjob description" />
                        {/* errors will return when field validation fails  */}
                        {errors.exampleRequired && <span>This field is required</span>}
                        <input type="submit" className="btn btn-primary"/>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PostJob;