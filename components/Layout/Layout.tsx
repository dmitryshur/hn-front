import { ReactElement } from 'react';
import { Roboto_Flex } from '@next/font/google';
import cn from 'classnames';
import styles from './Layout.module.css';

const roboto = Roboto_Flex();

interface IProps {
  children: ReactElement | ReactElement[];
}

export default function Layout({ children }: IProps) {
  return <div className={cn([styles.container, roboto.className])}>{children}</div>;
}
