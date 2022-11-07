import cn from 'classnames';
import { IconDefinition } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './ButtonIcon.module.scss';

interface IProps {
  icon?: IconDefinition;
  isSelected?: boolean;
}
export function ButtonIcon({ icon, isSelected }: IProps) {
  return (
    <div className={cn(styles.buttonIcon, { [styles.selected]: isSelected })}>
      {icon && <FontAwesomeIcon icon={icon} size="xl" color="#aaa" />}
    </div>
  );
}
