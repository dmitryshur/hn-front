import { GetServerSideProps } from 'next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faHeart, faComment } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/Layout/Layout';
import { Card } from '../../components/Card/Card';
import { IStory } from '../../components/Story/types';
import { getStoryDate } from '../../components/Story/utils';
import styles from './story.module.scss';
import { IComment } from '../../components/Comments/types';

const STORY_URL = 'http://localhost:4000/v1/stories';
const COMMENTS_URL = 'http://localhost:4000/v1/comments';

interface IProps {
  story: IStory;
  comments: IComment[];
}

export default function Story({ story, comments }: IProps) {
  console.log({comments})
  return (
    <Layout className={styles.storyLayout}>
      <Head>
        <title>Story</title>
      </Head>
      <Card className={styles.header}>
        <Link href="/">
          <FontAwesomeIcon icon={faArrowLeft} size="xl" color="#aaa" />
        </Link>
        {story.url ? (
          <Link href={story.url}>
            <span>{story.title || 'Story'}</span>
          </Link>
        ) : (
          <span>{story.title || 'Story'}</span>
        )}
      </Card>
      <Card className={styles.story}>
        <div className={styles.author}>{story.by}</div>
        <div className={styles.date}>{getStoryDate(story.time)}</div>
        <div className={styles.meta}>
          {story.descendants && (
            <div className={styles.metaData}>
              <span>{story.descendants}</span>
              <FontAwesomeIcon icon={faComment} size="lg" color="#aaa" />
            </div>
          )}
          {story.score && (
            <div className={styles.metaData}>
              <span>{story.score}</span>
              <FontAwesomeIcon icon={faHeart} size="lg" color="#aaa" />
            </div>
          )}
        </div>
      </Card>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { story } = context.query;

  const storiesData = fetch(`${STORY_URL}/${story}`).then((data) => data.json());
  const commentsData = fetch(`${COMMENTS_URL}?storyId=${story}`).then((data) => data.json());

  const data = await Promise.all([storiesData, commentsData]);
  return {
    props: {
      story: data[0].story,
      comments: data[1].comments,
    },
  };
};
