import styles from './Title.module.css';

interface IProps {
  text: string;
}

export default function Title({ text }: IProps) {
  return <div className={styles.title}>{text}</div>;
}
