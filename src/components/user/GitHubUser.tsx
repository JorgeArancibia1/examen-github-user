import { useForm } from "@tanstack/react-form";
import confetti from "canvas-confetti";
import clsx from "clsx";
import { FC } from "react";
import { useFetchUser } from "../../hooks/useFetchUser";
import { CloseIcon } from "../icons/CloseIcon";
import { Loading } from "../ui/Loading";
import { User } from "./User";
import { RepositoryUser } from "./repositoryUser/RepositoryUser";
// @ts-expect-error No tiene tipos
import useSound from "use-sound";
import pedro from '../assets/pedro-pedro.mp3';

export const GitHubUser: FC = () => {
	const form = useForm({
		defaultValues: {
			searchName: "",
		},
	});

	const { user, isLoading, repos, isLoadingRepos, isSuccess, isSuccessRepos } = useFetchUser(
		form.state.values.searchName,
	);

	const handleClick = () => {
		form.reset();
	};

	if (isSuccessRepos && isSuccess && user !== null) {
		confetti({
			particleCount: 100,
			spread: 70,
			origin: { y: 0.6 },
		});
	}

  const [playActive] = useSound(
		pedro,
    { volume: 0.150 }
	);

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
					playActive();
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
									"w-7 h-7 absolute top-1/2 transform -translate-y-1/2 right-0 cursor-pointer":
										form.state.values.searchName !== "",
								})}
							/>
							<input
								className='border border-gray-400 bg-slate-200 dark:bg-slate-500 rounded-lg p-2  '
								name={field.name}
								value={field.state.value}
								onBlur={field.handleBlur}
								onChange={({ target: { value } }) => field.handleChange(value)}
							/>
						</label>
					)}
				/>
				<button
					className='rounded-lg font-medium text-gray-50 bg-indigo-600 cursor-pointer border-hidden px-5'
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
			{!!user?.avatar_url && (
				<div className='flex gap-2 flex-wrap justify-center'>
					<User info={user} />
					<div>
						<p className='text-3xl font-bold my-4'>Proyectos</p>
						{isLoadingRepos && <Loading width={100} />}
						{repos.length === 0 ? (
							<p>
								No se han encontrado repositorios existentes para este usuario
							</p>
						) : (
							repos.map((repo) => (
								<RepositoryUser key={repo.node_id} repo={repo} />
							))
						)}
					</div>
				</div>
			)}
		</form>
	);
};
