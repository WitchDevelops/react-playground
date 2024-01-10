import React from 'react';
import { useForm } from 'react-hook-form';

const ReactHookForm = () => {
    //use the useForm hook from the library
    const {
        register, //to register every input
        handleSubmit, //submit function
        formState: { errors, isSubmitting }, //to handle the state of the form
        reset, //to reset the form after submission
        getValues, //to compare passwords
    } = useForm();

    // handleSubmit from react-hook-form library already has the preventDefault in it
    // if the form is not valid on the client side, it will not get submitted
    const onSubmit = async (data) => {
        console.log(data);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        reset(); //reset the form, function from react-hook-form library
    }

    return (
        <form className="form" onSubmit={handleSubmit(onSubmit)}>


            <div className="form__group">
                <label htmlFor="email">Email</label>
                {errors.email && <p className="form__errors">{errors.email.message}</p>}
            </div>
            <input
                {...register("email", { //register: to get the values of this input
                    required: "Email is required", //custom error message
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
                })}
                // type="email" // this is HTML form validation
                name="email"
                placeholder="Enter your email"
                id="email" />


            <div className="form__group">
                <label htmlFor="password">Password</label>
                {errors.password && <p className="form__errors">{errors.password.message}</p>}
            </div>

            <input
                {...register("password", {
                    required: "Password is required",
                    minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters",
                    },
                })}
                type="password"
                name="password"
                placeholder="Enter your password"
                id="password" />


            <div className="form__group">
                <label htmlFor="confirmPassword">Password</label>
                {errors.confirmPassword && <p className="form__errors">{errors.confirmPassword.message}</p>}
            </div>

            <input
                {...register("confirmPassword", {
                    required: "Please confirm your password",
                    validate: (value) => value === getValues("password") || "Passwords do not match",
                })}
                type="password"
                name="confirmPassword"
                placeholder="Confirm your password"
                id="confirmPassword" />



            <button type="submit" disabled={isSubmitting}>
                Submit
            </button>
        </form>
    )
}

export default ReactHookForm