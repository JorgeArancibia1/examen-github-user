import { useForm } from "@tanstack/react-form";

export const GitHubUser = () => {
	const form = useForm({
		defaultValues: {
			searchName: "",
		},
		onSubmit: async ({ value }) => {
			console.log(value.searchName);
		},
	});
	console.log(form.state.values.searchName);

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				e.stopPropagation();
				form.handleSubmit();
			}}
		>
			<div>
				<form.Field
					name='searchName'
					children={(field) => (
						<input
							name={field.name}
							value={field.state.value}
							onBlur={field.handleBlur}
							onChange={(e) => field.handleChange(e.target.value)}
						/>
					)}
				/>
			</div>
			<button type='submit'>Buscar</button>
		</form>
	);
};
