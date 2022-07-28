import { useState } from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { AuthContext } from './contexts/AuthContext';

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Register from "./components/Register/Register";

function App() {

	const [user, setUser] = useState({});

	const loginHandler = (userData) => {
		setUser(userData);
		localStorage.setItem(userData.accessToken)
	};

	const logoutHandler = () => {
		setUser({});
	};

	return (
		<BrowserRouter>
			<AuthContext.Provider value={{user, loginHandler, logoutHandler}}>
				<div className="App">
					<Header/>

					<div>
						<Routes>
							<Route path="/" element={<Home />}/>
							<Route path="/login" element={<Login />}/>
							<Route path="/register" element={<Register />}/>
						</Routes>
					</div>

					<Footer/>
				</div>
			</AuthContext.Provider>
		</BrowserRouter>
	);
}

export default App;
