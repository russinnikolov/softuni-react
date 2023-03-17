import {BrowserRouter, Routes, Route} from "react-router-dom";
import { AuthProvider } from './contexts/AuthContext';

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Register from "./components/Register/Register";


function App() {
	return (
		<BrowserRouter>
			<AuthProvider>
				<div className="App">
					<Header />
					<div>
						<Routes>
							<Route path="/" element={<Home />}/>
							<Route path="/login" element={<Login />}/>
							<Route path="/register" element={<Register />}/>
						</Routes>
					</div>
					<Footer />
				</div>
			</AuthProvider>
		</BrowserRouter>
	);
}

export default App;
