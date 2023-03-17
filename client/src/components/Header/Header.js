import { useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";

import { Breadcrumb, Layout, Menu } from 'antd';

const Header = () => {
	const { user, logoutHandler } = useContext(AuthContext);
	const menuItems = [
		{
			label: (
				<Link to={'/'}>Home</Link>
			),
			key: '/',
			type: 'both'
		}, {
			label: 'contact',
			key: '/contact',
			type: 'both'
		}, {
			label: (
				<Link to={'/login'}>Login</Link>
			),
			key: '/login',
			type: 'public'
		}, {
			label: 'Register',
			key: '/register',
			type: 'public'
		}, {
			label: 'Logout',
			key: '/logout',
			type: 'private'
		}
	];

	console.log(user);

	return (
		<>
			<Menu
				theme="dark"
				mode="horizontal"
				style={{height: '100px'}}
				defaultSelectedKeys={[2]}
				items={menuItems.filter(item =>  {
					return user ? item.type !== "private" : item.type !== "public";
				})}
			/>
		</>
	);

}

export default Header;