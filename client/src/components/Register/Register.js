import { Link, useNavigate } from "react-router-dom";
import {useContext, useEffect, useState} from "react";

import { AuthContext } from "../../contexts/AuthContext";
import * as authService from "../../services/authService";
import {Button, Card, Form, Input, Modal, Switch} from "antd";

import './Register.css';
import PublicLayout from "../Layout/PublicLayout";

const Register = () => {
	const { loginHandler } = useContext(AuthContext);
	const [view, setView] = useState(null);
	const [title, setTitle] = useState('Register');
	const [items, setItems] = useState([]);

	const navigate = useNavigate();

	useEffect(() => {
		setItems(() => {
			return formItems.filter((item) => {
				if(item.about === title.toLowerCase() || item.about === 'both') {
					return item;
				}
			});
		})
	}, [title])

	const onSubmit = (e) => {
		e.preventDefault();
	}

	const changeView = () => {
		setTitle((title) => title === 'Login' ? 'Register' : 'Login');
	}

	const submit = (e) => {
		e.preventDefault();

		console.log('asdf');
	}

	const formItems = [
		{
			'name': 'firstName',
			'key': 'fname',
			'label': 'First Name',
			'about': 'register',
			'type': 'Text'
		}, {
			'name': 'lastName',
			'key': 'lname',
			'label': 'Last Name',
			'about': 'register',
			'type': 'Text'
		}, {
			'name': 'email',
			'key': 'email',
			'label': 'E-mail',
			'about': 'both',
			'type': 'Text'
		}, {
			'name': 'password',
			'key': 'password',
			'label': 'password',
			'about': 'both',
			'type': 'Text'
		}, {
			'name': 'keepLoggedIn',
			'key': 'keepLoggedIn',
			'label': 'Keep me in',
			'about': 'login',
			'type': 'Checkbox'
		}
	];

	return (
		<PublicLayout>
			<Card
				style={{ width: 300, margin: "auto", marginTop: 20, marginBottom: 20}}
			>
				<h2 style={{marginBottom: 20}}>{title}
					<Switch
						defaultChecked
						onChange={changeView}
						style={{float: "right"}}
					>
						{view}
					</Switch>
				</h2>
				<Form>
					{
						items.map((item) => {
							return (
								<>
									{item.label}
									<Input key={item.key} type={item.type} style={item.style ?? null}/>
								</>
							);
						})
					}
					<Button onSubmit={submit} style={{marginTop: 20}}>{title}</Button>
				</Form>
			</Card>
		</PublicLayout>
	);
}

export default Register;