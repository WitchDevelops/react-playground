import React, { useState } from 'react';

const Form = () => {
    //to have controlled input with one source of truth, use the useState hook
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        console.log(email, password, confirmPassword);
        //show errors
        if (password !== confirmPassword) {
            setErrors(['Passwords do not match']);
            console.log(errors);
            setIsSubmitting(false);
            return;
        }
        
        //TODO: submit to server

        //mockup server call
        await new Promise((resolve) => setTimeout(resolve, 2000));

        //reset the form state
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setErrors([]);
        setIsSubmitting(false);
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            {//display errors if there are any
                errors.length> 0 && (
                    <ul className="form__errors">
                        {errors.map((error, i) => (
                            <li className="error__item" key={i}>{error}</li>
                        ))}
                    </ul>
                )
            }
            
            <label htmlFor="email">Email</label>
            <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
                placeholder="Enter your email"
                id="email" />

            <label htmlFor="password">Password</label>
            <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="password"
                placeholder="Enter your password"
                id="password" />

            <label htmlFor="confirmPassword">Password</label>
            <input
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
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

export default Form