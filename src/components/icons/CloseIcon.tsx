import { FC } from "react";

interface Props {
	className?: string;
	onClick?: () => void;
}

export const CloseIcon: FC<Props> = ({ className, onClick }) => {
	return (
		<div className={className} onClick={onClick}>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				x='0px'
				y='0px'
				width='20'
				height='30'
				viewBox='0 0 30 30'
			>
				<path
					fill='#4F46E5'
					d='M15 17.722L6.429 26.293 3.707 23.571 12.278 15 3.707 6.429 6.429 3.707 15 12.278 23.571 3.707 26.293 6.429 17.722 15 26.293 23.571 23.571 26.293z'
				/>
				<path
					fill='#4345c7'
					d='M23.571,4.414l2.014,2.014l-7.864,7.864L17.014,15l0.707,0.707l7.864,7.864l-2.014,2.014 l-7.864-7.864L15,17.014l-0.707,0.707l-7.864,7.864l-2.014-2.014l7.864-7.864L12.986,15l-0.707-0.707L4.414,6.429l2.014-2.014 l7.864,7.864L15,12.986l0.707-0.707L23.571,4.414 M23.571,3L15,11.571L6.429,3L3,6.429L11.571,15L3,23.571L6.429,27L15,18.429 L23.571,27L27,23.571L18.429,15L27,6.429L23.571,3L23.571,3z'
				/>
			</svg>
		</div>
	);
};
