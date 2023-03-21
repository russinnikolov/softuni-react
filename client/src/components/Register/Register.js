import { Link, useNavigate } from "react-router-dom";
import {useContext, useEffect, useState} from "react";

import { AuthContext } from "../../contexts/AuthContext";
import * as authService from "../../services/authService";
import {Form, Input, Modal, Switch} from "antd";

import './Register.css';

const Register = () => {
	const { loginHandler } = useContext(AuthContext);
	const [isModalOpen, setIsModalOpen] = useState(true);
	const [view, setView] = useState(null);

	const navigate = useNavigate();

	// useEffect(() => {
	// }, [])

	const onSubmit = (e) => {
		e.preventDefault();
	}

	const closeModal = () => {
		setIsModalOpen(false);
	}

	return (
		<Modal
			title={view}
			open={isModalOpen}
			// onOk={}
			onCancel={closeModal}
		>
			<Switch
				defaultChecked
				onChange={() => setView(() => view === 'login' ? 'register' : 'login')}
			>{view}</Switch>
			<h1>Register</h1>
		</Modal>
	);
}

export default Register;