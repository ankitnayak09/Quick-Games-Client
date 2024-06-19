import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { Login } from "./pages/User-App/Login";
import AndarBahar from "./pages/User-App/AndarBahar";
import Lottery from "./pages/User-App/Lottery";
import Roulette from "./pages/User-App/Roulette";
import Raashi from "./pages/User-App/Raashi";
import Games from "./pages/User-App/Games";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Navigate to="/login" />} />
			<Route path="/login" element={<Login />} />
			<Route path="/andar-bahar" element={<AndarBahar />} />
			<Route path="/lottery" element={<Lottery />} />
			<Route path="/roulette" element={<Roulette />} />
			<Route path="/raashi" element={<Raashi />} />
			<Route path="/games" element={<Games />} />
		</Routes>
	);
}

export default App;
