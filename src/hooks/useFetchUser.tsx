// import { useQuery } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { githubApi } from "../api/getUser";
import { Repo, User } from "../interfaces";

const getUserInfo = async (searchName: string): Promise<User | void > => {
	try {
		const { data } = await githubApi.get<User>(
			`users/${searchName}`,
		);

		return data;
	} catch (error) {
		const err = error as AxiosError
		console.log(err.response?.status, err.message);
		if (err.response?.status === 500) {
			throw new Error("Error en el servidor, por favor contactar con soporte");
		}
	}
};

const getReposUser = async (searchName: string): Promise<Repo[] | void> => {
	const { data } = await githubApi.get(
		`users/${searchName}/repos?sort=created&per_page=4`,
	);
	return data;
};

export const useUser = (searchName: string) => {
	const userQuery = useQuery({
		queryKey: ["user", "searchName", searchName],
		queryFn: () => getUserInfo(searchName),
		enabled: searchName !== "",
	});

	const reposQuery = useQuery({
		queryKey: ["repos", "searchName", searchName, "repos"],
		queryFn: () => getReposUser(searchName),
		enabled: !!userQuery.data,
	});

	return {
		isLoading: userQuery.isLoading,
		isError: userQuery.isError,
		error: userQuery.error?.message,
		user: userQuery.data || null,
		repos: reposQuery.data || [],
	};
};
