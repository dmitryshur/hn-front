import cn from 'classnames';
import styles from './Tags.module.css';
import type { ITag, TTag } from './types';

interface IProps {
  tags: ITag[];
  selectedTag: TTag;
  onClick?: (tag: ITag) => void;
}

export default function Tags({ tags, selectedTag, onClick }: IProps) {
  const handleClick = (tag: ITag) => () => {
    if (onClick) {
      onClick(tag);
    }
  };

  return (
    <div className={styles.tags}>
      {tags.map((tag) => (
        <div
          key={tag.id}
          className={cn(styles.tag, { [styles.selected]: selectedTag === tag.id })}
          onClick={handleClick(tag)}
        >
          {tag.text}
        </div>
      ))}
    </div>
  );
}
