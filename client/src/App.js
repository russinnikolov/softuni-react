import {BrowserRouter, Routes, Route} from "react-router-dom";
import { AuthProvider } from './contexts/AuthContext';

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Register from "./components/Register/Register";


function App() {
	return (
		<BrowserRouter>
			<AuthProvider>
				<div className="App">
					<div>
						<Routes>
							<Route path="/" element={<Home />}/>
							<Route path="/login" element={<Login />}/>
							<Route path="/register" element={<Register />}/>
						</Routes>
					</div>
				</div>
			</AuthProvider>
		</BrowserRouter>
	);
}

export default App;
