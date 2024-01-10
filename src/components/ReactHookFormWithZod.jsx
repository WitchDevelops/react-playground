import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

// zod validation schema is for validating the send data on the server side
const signUpSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6, { message: "Password must be at least 6 characters" }),
    confirmPassword: z.string(),
})
.refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"], // path to connect the validation to the field
});

const ReactHookFormWithZod = () => {
    //use the useForm hook from the library
    const {
        register, //to register every input
        handleSubmit, //submit function
        formState: { errors, isSubmitting }, //to handle the state of the form
        reset, //to reset the form after submission
    } = useForm({
        //connect it to zod validation
        resolver: zodResolver(signUpSchema),
    });

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
                {...register("email")}
                // type="email" // this is HTML form validation
                name="email"
                placeholder="Enter your email"
                id="email" />


            <div className="form__group">
                <label htmlFor="password">Password</label>
                {errors.password && <p className="form__errors">{errors.password.message}</p>}
            </div>

            <input
                {...register("password")}
                type="password"
                name="password"
                placeholder="Enter your password"
                id="password" />


            <div className="form__group">
                <label htmlFor="confirmPassword">Password</label>
                {errors.confirmPassword && <p className="form__errors">{errors.confirmPassword.message}</p>}
            </div>

            <input
                {...register("confirmPassword")}
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

export default ReactHookFormWithZod