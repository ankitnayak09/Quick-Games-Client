import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import AndarBahar from "./pages/AndarBahar";
import Lottery from "./pages/Lottery";
import Roulette from "./pages/Roulette";
import Raashi from "./pages/Raashi";
import Games from "./pages/Games";

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
