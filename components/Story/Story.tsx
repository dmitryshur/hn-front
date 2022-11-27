import { useMemo, forwardRef } from 'react';
import cn from 'classnames';
import { Card } from '../Card/Card';
import styles from './Story.module.scss';
import { IStory } from './types';
import { getStoryDate, getColorClassname } from './utils';

interface IProps {
  story: IStory;
  index: number;
  totalCount: number;
  commentsCount?: number;
}

// TODO: add pagination for stories handler
export const Story = forwardRef<HTMLDivElement, IProps>(({ story, index, totalCount, commentsCount }, ref) => {
  const creationDate = useMemo(() => {
    return getStoryDate(story.time);
  }, [story]);

  const colorClassname = getColorClassname(index, 'primary');
  return (
    <Card className={cn(styles.story, styles[colorClassname])} style={{ zIndex: String(totalCount - index) }} ref={ref}>
      <div>
        {creationDate && <div className={styles.date}>{creationDate}</div>}
        {story.title && <div className={styles.title}>{story.title}</div>}
        <div className={styles.info}>
          {story.by && <span className={styles.author}>By {story.by}</span>}
          <span>{commentsCount} comments</span>
        </div>
      </div>
      <div className={styles.score}>{story.score}</div>
    </Card>
  );
});

Story.displayName = 'Story';
