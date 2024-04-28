import { useForm } from "@tanstack/react-form";
import confetti from "canvas-confetti";
import clsx from "clsx";
import { FC, useEffect } from "react";
import { useUser } from "../../hooks/useFetchUser";
import { CloseIcon } from "../ui/CloseIcon";
import { Loading } from "../ui/Loading";
import { RepositoryUserCard } from "./RepositoryUserCard";
import { UserCard } from "./UserCard";

export const GitHubUser: FC = () => {
	const form = useForm({
		defaultValues: {
			searchName: "",
		},
	});

	const { user, isLoading, repos, isLoadingRepos } = useUser(
		form.state.values.searchName,
	);

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
				if (user !== null) {
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
						<label
							htmlFor='email'
							className='relative dark:text-gray-100 focus-within:text-gray-600'
						>
							<CloseIcon
								onClick={handleClick}
								className={clsx({
									hidden: form.state.values.searchName === "",
									"w-8 h-7 absolute top-1/2 transform -translate-y-1/2 right-2 cursor-pointer":
										form.state.values.searchName !== "",
								})}
							/>
							<input
								className='border bg-slate-500 rounded-lg p-2  '
								name={field.name}
								value={field.state.value}
								onBlur={field.handleBlur}
								onChange={({ target: { value } }) => field.handleChange(value)}
							/>
						</label>
					)}
				/>
				<button
					className='rounded-lg font-medium bg-indigo-600 cursor-pointer border-hidden px-5'
					type='submit'
				>
					Buscar
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
						{isLoadingRepos && <Loading width={100} />}
						{repos.length === 0 ? (
							<p>
								No se han encontrado repositorios existentes para este usuario
							</p>
						) : (
							repos.map((repo) => (
								<RepositoryUserCard repo={repo} />
							))
						)}
					</div>
				</div>
			)}
		</form>
	);
};
