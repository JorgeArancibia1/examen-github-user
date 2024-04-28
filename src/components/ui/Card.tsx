import { FC } from "react";

interface Props {
  href: string;
  className?: string;
  key?: string | number;
  children: React.ReactNode;
}

export const Card: FC<Props> = ({href, className, children}) => {
  return (
    <a href={href} className={`custom-card ${className}`}>
      {children}
    </a>
  )
}
