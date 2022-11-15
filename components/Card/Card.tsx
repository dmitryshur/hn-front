import { ReactNode } from 'react';
import cn from 'classnames';
import styles from './Card.module.scss';

interface IProps {
  className?: string;
  children: ReactNode | ReactNode[];
  style?: { [property: string]: string };
}

export function Card({ className, children, style }: IProps) {
  return (
    <div className={cn(styles.card, className)} style={style}>
      {children}
    </div>
  );
}
