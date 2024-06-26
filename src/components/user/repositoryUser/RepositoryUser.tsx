import { FC } from "react";
import { IRepo } from "../../../interfaces";
import { formatDate } from "../../../utils/utilFunctions";
import { Card } from "../../ui/Card";

interface Props {
	repo: IRepo;
}

export const RepositoryUser: FC<Props> = ({ repo }) => {
	const redirectToRepo = (url: string) => {
		window.open(url, "_blank");
	};

	return (
		<Card
			href={repo.svn_url}
			className='custom-card p-4 items-start '
		>
			<div className='flex justify-between w-full'>
				<h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
					{repo.name}
				</h5>
				<p className='text-sm text-gray-500 dark:text-gray-400'>
					{formatDate(repo.created_at)}
				</p>
			</div>
			<p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
				{repo.description}
			</p>
			<p>{repo.language}</p>
			{repo.homepage && (
				<button
					className='self-end'
					onClick={() => redirectToRepo(repo.homepage ?? "")}
				>
					Ver proyecto
				</button>
			)}
		</Card>
	);
};
