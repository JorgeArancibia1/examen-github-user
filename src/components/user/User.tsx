import { FC } from "react";
import { IUser } from "../../interfaces/user.interface";
import { formatMount } from "../../utils/utilFunctions";
import { Card } from "../ui/Card";

interface Props {
	info: IUser;
}

export const User: FC<Props> = ({ info }) => {
	return (
		<Card href={info.html_url} className='custom-card'>
			<img className='rounded-t-lg' src={info.avatar_url} alt='Avatar image' />
			<div className='flex justify-between w-full p-3'>
				<p>Followers: {formatMount(info.followers)}</p>
				<p>Repositories: {info.public_repos}</p>
			</div>
			<div className='p-4 space-y-2'>
				<p className='text-2xl font-bold'>{info.name}</p>
				<p className=''>{info.bio}</p>
			</div>
		</Card>
	);
};
