import { useForm } from "@tanstack/react-form";
import confetti from "canvas-confetti";
import { FC, useEffect } from "react";
import { useUser } from "../hooks/useFetchUser";
import { ReposUserCard } from "./ReposUserCard";
import { UserCard } from "./UserCard";
import { Loading } from "./ui/Loading";

export const GitHubUser: FC = () => {
	const form = useForm({
		defaultValues: {
			searchName: "",
		},
	});

	const { user, isLoading, repos, isLoadingRepos } = useUser(form.state.values.searchName);

	const handleClick = () => {
		form.reset();
	};

	useEffect(() => {
		if (user !== null) {
			confetti({
				particleCount: 100,
				spread: 70,
				origin: { y: 0.6 },
			});
		}
	}, [user]);

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				e.stopPropagation();
				form.handleSubmit();
				if ( user !== null) {
					confetti({
						particleCount: 100,
						spread: 70,
						origin: { y: 0.6 },
					});
				}
			}}
		>
			<div className='flex justify-center my-8 gap-4'>
				<form.Field
					name='searchName'
					children={(field) => (
						<input
							className='border bg-slate-500 rounded-lg p-2 w-1/2'
							name={field.name}
							value={field.state.value}
							onBlur={field.handleBlur}
							onChange={({ target: { value } }) => field.handleChange(value)}
						/>
					)}
				/>
				<button
					className='rounded-lg font-medium bg-indigo-600 cursor-pointer border-hidden px-5'
					type='submit'
				>
					Buscar
				</button>
				<button
					className='rounded-lg font-medium bg-red-400 cursor-pointer border-hidden px-5'
					type='button'
					onClick={handleClick}
				>
					Limpiar
				</button>
			</div>
			{isLoading && <Loading />}
			{!isLoading && user === null && form.state.values.searchName !== "" && (
				<p>No se ha encontrado un usuario con ese nombre</p>
			)}

			{/* Si viene informacion */}
			{!!user && (
				<div className='flex gap-2 flex-wrap justify-center'>
					<UserCard info={user} />
					<div>
						<p className='text-3xl font-bold my-4'>Proyectos</p>
						{isLoadingRepos && <Loading />}
						{repos.length === 0 ? (
							<p>
								No se han encontrado repositorios existentes para este usuario
							</p>
						) : (
							<ReposUserCard repos={repos} />
						)}
					</div>
				</div>
			)}
		</form>
	);
};
