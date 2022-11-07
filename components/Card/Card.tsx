import { ReactNode } from 'react';
import cn from 'classnames';
import styles from './Card.module.scss';

interface IProps {
  className?: string;
  children: ReactNode | ReactNode[];
}

export function Card({ className, children }: IProps) {
  return <div className={cn(styles.card, className)}>{children}</div>;
}
