import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as z from "zod";

// Define the validation schema

const loginSchema = z.object({
	playerName: z.string().min(1, "Player Name is required"),
	username: z.string().min(1, "Username is required"),
	phoneNumber: z.string().refine((val) => /^\d{10}$/.test(val), {
		message:
			"Phone Number must be exactly 10 digits and contain only numbers",
	}),
	distributorId: z.string().min(1, "Distributor ID is required"),
	distributorKey: z.string().min(1, "Distributor Key is required"),
	game: z.string().min(1, "Game selection is required"),
});

type LoginFormInputs = z.infer<typeof loginSchema>;

export const Login: React.FC = () => {
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue,
	} = useForm<LoginFormInputs>({
		resolver: zodResolver(loginSchema),
	});

	const redirectToGamePage = (game: string) => {
		switch (game) {
			case "Andar Bahar":
				navigate("/andar-bahar");
				break;
			case "Lottery":
				navigate("/lottery");
				break;
			case "Roulette":
				navigate("/roulette");
				break;
			case "Raashi":
				navigate("/raashi");
				break;
			default:
				navigate("/games");
		}
	};

	const onSubmit = (data: LoginFormInputs) => {
		// Handle form submission
		console.log(data);
		// TODO: After Successful Login, Redirect to the game page based on input
		redirectToGamePage(data.game);
	};

	const handlePhoneNumberChange = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		const value = e.target.value;
		if (/^\d*$/.test(value)) {
			setValue("phoneNumber", value);
		}
	};
	return (
		<div className="flex items-center justify-center min-h-screen bg-gray-100">
			<div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
				<h1 className="text-2xl font-bold text-center">Login</h1>
				<form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
					<div>
						<label
							htmlFor="playerName"
							className="block text-sm font-medium text-gray-700"
						>
							Player Name
						</label>
						<input
							id="playerName"
							type="text"
							{...register("playerName")}
							className="w-full px-3 py-2 mt-1 border rounded shadow-sm focus:outline-none focus:ring focus:border-blue-300"
						/>
						{errors.playerName && (
							<span className="text-sm text-red-600">
								{errors.playerName.message}
							</span>
						)}
					</div>

					<div>
						<label
							htmlFor="username"
							className="block text-sm font-medium text-gray-700"
						>
							Username
						</label>
						<input
							id="username"
							type="text"
							{...register("username")}
							className="w-full px-3 py-2 mt-1 border rounded shadow-sm focus:outline-none focus:ring focus:border-blue-300"
						/>
						{errors.username && (
							<span className="text-sm text-red-600">
								{errors.username.message}
							</span>
						)}
					</div>

					<div>
						<label
							htmlFor="phoneNumber"
							className="block text-sm font-medium text-gray-700"
						>
							Phone Number
						</label>
						<input
							id="phoneNumber"
							type="text"
							{...register("phoneNumber")}
							onChange={handlePhoneNumberChange}
							className="w-full px-3 py-2 mt-1 border rounded shadow-sm focus:outline-none focus:ring focus:border-blue-300"
						/>
						{errors.phoneNumber && (
							<span className="text-sm text-red-600">
								{errors.phoneNumber.message}
							</span>
						)}
					</div>

					<div>
						<label
							htmlFor="distributorId"
							className="block text-sm font-medium text-gray-700"
						>
							Distributor ID
						</label>
						<input
							id="distributorId"
							type="text"
							{...register("distributorId")}
							className="w-full px-3 py-2 mt-1 border rounded shadow-sm focus:outline-none focus:ring focus:border-blue-300"
						/>
						{errors.distributorId && (
							<span className="text-sm text-red-600">
								{errors.distributorId.message}
							</span>
						)}
					</div>

					<div>
						<label
							htmlFor="distributorKey"
							className="block text-sm font-medium text-gray-700"
						>
							Distributor Key
						</label>
						<input
							id="distributorKey"
							type="text"
							{...register("distributorKey")}
							className="w-full px-3 py-2 mt-1 border rounded shadow-sm focus:outline-none focus:ring focus:border-blue-300"
						/>
						{errors.distributorKey && (
							<span className="text-sm text-red-600">
								{errors.distributorKey.message}
							</span>
						)}
					</div>

					<div>
						<label
							htmlFor="game"
							className="block text-sm font-medium text-gray-700"
						>
							Select Game
						</label>
						<select
							id="game"
							{...register("game")}
							className="w-full px-3 py-2 mt-1 border rounded shadow-sm focus:outline-none focus:ring focus:border-blue-300"
						>
							<option value="All">All</option>
							<option value="Andar Bahar">Andar Bahar</option>
							<option value="Lottery">Lottery</option>
							<option value="Roulette">Roulette</option>
							<option value="Raashi">Raashi</option>
						</select>
						{errors.game && (
							<span className="text-sm text-red-600">
								{errors.game.message}
							</span>
						)}
					</div>

					<button
						type="submit"
						className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
					>
						Login
					</button>
				</form>
			</div>
		</div>
	);
};
