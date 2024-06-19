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
		<div className="flex flex-col justify-center items-center h-screen gap-x-4 bg-black">
			<div className="text-white font-medium text-3xl my-5">
				PLAYER LOGIN
			</div>
			<div className="">
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="bg-neutral-900 shadow-md rounded px-8 pt-6 pb-8 mb-4 grid gap-y-4"
				>
					<div>
						<label
							htmlFor="playerName"
							className="block text-white text-sm font-medium mb-2"
						>
							Player Name
						</label>
						<input
							id="playerName"
							type="text"
							{...register("playerName")}
							className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-gray-800 border-none"
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
							className="block text-white text-sm font-medium mb-2"
						>
							Username
						</label>
						<input
							id="username"
							type="text"
							{...register("username")}
							className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-gray-800 border-none"
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
							className="block text-white text-sm font-medium mb-2"
						>
							Phone Number
						</label>
						<input
							id="phoneNumber"
							type="text"
							{...register("phoneNumber")}
							onChange={handlePhoneNumberChange}
							className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-gray-800 border-none"
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
							className="block text-white text-sm font-medium mb-2"
						>
							Distributor ID
						</label>
						<input
							id="distributorId"
							type="text"
							{...register("distributorId")}
							className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-gray-800 border-none"
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
							className="block text-white text-sm font-medium mb-2"
						>
							Distributor Key
						</label>
						<input
							id="distributorKey"
							type="text"
							{...register("distributorKey")}
							className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-gray-800 border-none"
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
							className="block text-white text-sm font-medium mb-2"
						>
							Select Game
						</label>
						<select
							id="game"
							{...register("game")}
							className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-gray-800 border-none"
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
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
					>
						Login
					</button>
				</form>
			</div>
		</div>
	);
};
