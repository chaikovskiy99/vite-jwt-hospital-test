// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import { useState } from "react";

import { useAuth } from "./contexts/authContext";
import { useNavigate } from 'react-router-dom';

export const Login = () => {
	const { login , authenticated} = useAuth();
	const [email, setEmail] = useState("");
	const [password, setP] = useState("");

    const navigate = useNavigate()

   
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const value = await login({ email, password });
            console.log("logged in true change route")
            if(value)
                navigate("/profile", {replace: true}); // Redirect immediately after successful login
          } catch (error) {
            console.error(error);
          }
    }

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					value={email}
					type="text"
					name="email"
					onChange={(e) => setEmail(e.target.value)}
				/>
                <input
					value={password}
					type="text"
					name="password"
					onChange={(e) => setP(e.target.value)}
				/>
				
				<button
                type="submit"
				>
					Submit
				</button>
			</form>
		</div>
	);
};
