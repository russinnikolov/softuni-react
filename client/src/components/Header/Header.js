import { useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";

import { Menu } from 'antd';

const Header = () => {
	const { user } = useContext(AuthContext);
	const menuItems = [
		{
			label: (
				<Link to={'/'}>Home</Link>
			),
			key: '/',
			type: 'both'
		}, {
			label: (
				<Link to={'/contact'}>Contact</Link>
			),
			key: 'contact',
			type: 'both'
		}, {
			label: (
				<Link to={'/login'}>Login</Link>
			),
			key: 'login',
			type: 'public'
		}, {
			label: (
				<Link to={'/register'}>Register</Link>
			),
			key: 'register',
			type: 'public'
		}, {
			label: (
				<Link to={'/logout'}>Logout</Link>
			),
			key: 'logout',
			type: 'private'
		}
	];

	return (
		<>
			<Menu
				theme="dark"
				mode="horizontal"
				defaultSelectedKeys={[2]}
				items={menuItems.filter(item =>  {
					return user ? item.type !== "private" : item.type !== "public";
				})}
			/>
		</>
	);

}

export default Header;