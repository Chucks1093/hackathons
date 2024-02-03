
import Cookies from 'js-cookie';

const getCurrentUser = async () => {
	const token = Cookies.get('user-token');
	const response = await fetch(`${import.meta.env.VITE_BACKEND_API}/`)
};
