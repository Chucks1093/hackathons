import {  useState } from 'react';
import { InputFile } from './InputFile';
import { Button } from '../ui/button';
import loginUser from '@/services/loginUser';
import { LoginType } from '@/types/auth';
import toast from 'react-hot-toast';
import currentUser from '@/zustand/user/currentUser.zustand';
import { Link, useNavigate } from 'react-router-dom';


function Login() {
	const [formDetails, setFormDetails] = useState<LoginType>({
		email: '',
		password: '',
	});
	const setCurrentUser = currentUser((state)=> state.setUser);
	const navigate = useNavigate();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		
		setFormDetails((prev) => ({
			...prev,
			[name]: value,
		}));
		console.log(formDetails)
	};
	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		toast.loading("Logging In")
		try {
		const userDetails = await loginUser(formDetails);
		setCurrentUser(userDetails)
		toast.remove()
		toast.success("Successfully Logged In")
		navigate("/dashboard");
		}catch(error) {
			console.error((error as Error).message)
			toast.remove()
			toast.error((error as Error).message)
		}
	}
	return (
		<form className='px-3 py-3' onSubmit={handleSubmit}>
			<h2 className='text-2xl font-bold'>Login</h2>
			<p className='mb-4'>Don't have an account? <Link className="text-blue-700 underline" to="/register">Sign Up</Link></p>
			<InputFile
				type="email"
				name="email"
				value={formDetails.email}
				handleChange={handleChange}
			/>
         <InputFile
				type="password"
				name="password"
				value={formDetails.password}
				handleChange={handleChange}
			/>
         <Button className='ml-auto block bg-blue-500 hover:bg-blue-300'>Submit</Button>
		</form>
	);
}
export default Login;
 