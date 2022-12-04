import { ReactElement } from 'react';
import { Roboto_Flex } from '@next/font/google';
import cn from 'classnames';
import styles from './Layout.module.css';

const roboto = Roboto_Flex();

interface IProps {
  className?: string;
  children: ReactElement | ReactElement[];
}

export default function Layout({ children, className }: IProps) {
  return <div className={cn([styles.container, roboto.className, className])}>{children}</div>;
}
