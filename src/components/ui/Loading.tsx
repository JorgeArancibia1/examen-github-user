import { FC } from "react";

interface Props {
  width?: number;
}

export const Loading: FC<Props> = ({width = 300}) => {
	const loading =
		"https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHFyZnY3eXhnaGhyOTZpZjQzamh5YWtvYTl1NG90Nmlvb3hkbWdveCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/aQwvKKi4Lv3t63nZl9/giphy-downsized.gif";
	return (
		<div className='w-full flex justify-center'>
			<img width={width} src={loading} />
		</div>
	);
};
