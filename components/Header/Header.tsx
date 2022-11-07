import { Card } from '../Card/Card';
import { ButtonIcon } from '../ButtonIcon/ButtonIcon';
import styles from './Header.module.scss';
import { faHeart, faArrowTrendUp } from '@fortawesome/free-solid-svg-icons';
import { TType } from './types';

interface IProps {
  storiesType: TType;
  onTypeChange?: (type: TType) => void;
}

export function Header({ storiesType, onTypeChange }: IProps) {
  const handleTypeChange = (type: TType) => () => {
    if (onTypeChange) {
      onTypeChange(type);
    }
  };

  return (
    <div className={styles.header}>
      <Card className={styles.card}>
        <div className={styles.button} onClick={handleTypeChange('best')}>
          <ButtonIcon isSelected={storiesType === 'best'} icon={faHeart} />
          <span>BEST</span>
        </div>
        <div className={styles.button} onClick={handleTypeChange('newest')}>
          <ButtonIcon icon={faArrowTrendUp} isSelected={storiesType === 'newest'} />
          <span>TRENDING</span>
        </div>
      </Card>
    </div>
  );
}
