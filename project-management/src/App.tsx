import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AuthLayout from './components/authentication/AuthLayout';
import Login from './components/authentication/Login';
import { Fragment } from 'react';
import ToastProvider from './providers/ToastProvider';
import Register from './components/authentication/Register';
import Dashboard from './pages/Dashboard';
import Boards from './pages/Boards';
import Teams from './pages/Teams';
import Analytics from './pages/Analytics';

const router = createBrowserRouter([
	{
		path: '/',
		element: <AuthLayout />,
		children: [
			{
				index: true,
				element: <Login />,
			},
			{
				path: '/register',
				element: <Register />,
			},
		],
	},
	{
		path: "/dashboard",
		element: <Dashboard />,
		children: [
			{
				index: true,
				element: <Boards />
			},
			{
				path: "teams",
				element: <Teams />
			},
			{
				path: "analytics",
				element: <Analytics />
			}
		]
	}
]);

function App() {
	return (
		<Fragment>
			<ToastProvider />
			<RouterProvider router={router} />
		</Fragment>
	);
}

export default App;
