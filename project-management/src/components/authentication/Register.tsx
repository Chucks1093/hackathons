import { UserRegistrationInfo } from '@/types/auth';
import { useState } from 'react';
import currentUser from '@/zustand/user/currentUser.zustand';
import toast from 'react-hot-toast';
import { InputFile } from './InputFile';
import { Button } from '../ui/button';
import { Link, useNavigate } from 'react-router-dom';
import signNewUser from '@/services/signNewUser';

function Register() {
	const [formDetails, setFormDetails] = useState<UserRegistrationInfo>({
		username: '',
		email: '',
		password: '',
		isTermsAccepted: false,
	});
	const navigate = useNavigate();
	const setCurrentUser = currentUser((state) => state.setUser);
	const [isTermsAccepted, setIsTermsAccepted] = useState(false);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;

		setFormDetails((prev) => ({
			...prev,
			[name]: value,
		}));
		console.log(formDetails);
	};

	const handleTermsChange =async()=> {
		setIsTermsAccepted(!isTermsAccepted);
		setFormDetails(prev => ({
			...prev,
			isTermsAccepted: !isTermsAccepted
		}))
	}
	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			const userDetails = await signNewUser(formDetails);
			setCurrentUser(userDetails);
			navigate("/dashboard")
			toast.success("Successfully Sign Up")
		} catch (error) {
			console.error((error as Error).message);
			toast.error((error as Error).message);
		}
	};
	return (
		<form className="px-3 py-3" onSubmit={handleSubmit}>
			<h2 className="text-2xl font-bold">Register</h2>
			<p className="mb-4">
				Already have an account?{' '}
				<Link className="text-blue-700 underline" to="/">
					Sign In{' '}
				</Link>
			</p>
			<InputFile
				type="text"
				name="username"
				value={formDetails.username}
				handleChange={handleChange}
			/>
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

			<label className="text-sm text-gray-500" htmlFor="isTermsAccepted">
				<input
					type="radio"
					id="isTermsAccepted"
					name="isTermsAccepted"
					checked={formDetails.isTermsAccepted}
					onClick={handleTermsChange}
					className='mr-2'
				/>
				By opening an account you agree to the terms and conditions of our{' '}
				<a className='text-blue-600 underline'> privacy policy</a>
			</label>
			<Button className="ml-auto block bg-blue-500 hover:bg-blue-300">
				Submit
			</Button>
		</form>
	);
}
export default Register;
