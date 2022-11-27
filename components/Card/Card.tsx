import { ReactNode, forwardRef } from 'react';
import cn from 'classnames';
import styles from './Card.module.scss';

interface IProps {
  className?: string;
  children: ReactNode | ReactNode[];
  style?: { [property: string]: string };
}

export const Card = forwardRef<HTMLDivElement, IProps>(({ className, children, style }, ref) => {
  return (
    <div className={cn(styles.card, className)} style={style} ref={ref}>
      {children}
    </div>
  );
});

Card.displayName = 'Card';
