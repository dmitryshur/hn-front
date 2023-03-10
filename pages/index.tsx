import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import Layout from '../components/Layout/Layout';
import { Header } from '../components/Header/Header';
import { Story } from '../components/Story/Story';
import { TType } from '../components/Header/types';
import { IStoriesResponse, useFetch } from '../hooks/useFetch/useFetch';
import styles from './index.module.scss';
import { GetServerSideProps } from 'next';
import { IStory } from '../components/Story/types';

const PAGE_SIZE = 20;
const DEFAULT_TYPE = 'best';
const STORIES_URL = 'http://localhost:4000/v1/stories';

interface IPagination {
  page: number;
  pageSize: number;
  isDone: boolean;
}

interface IProps {
  ssrStories: IStory[];
}

// TODO: add comments fetch on story page
// TODO: build comments tree of story page
// TODO: add next/previous top comment scroll
// TODO: add virtualized list
export default function Home({ ssrStories }: IProps) {
  const [storiesType, setStoriesType] = useState<TType>('best');
  const [stories, setStories] = useState<IStory[]>(ssrStories);
  const storiesRef = useRef<HTMLDivElement | null>(null);
  const lastStoryRef = useRef<HTMLDivElement | null>(null);
  const intersectionObserver = useRef<IntersectionObserver | null>(null);
  const [pagination, setPagination] = useState<IPagination>({ page: 2, pageSize: PAGE_SIZE, isDone: false });
  const { fetcher, isLoading } = useFetch<IStoriesResponse>({ url: STORIES_URL });

  const fetchStories = async (type: TType, pag: IPagination) => {
    const newStories = await fetcher(type, pag.page, pag.pageSize);
    setStories((prevState) => [...prevState, ...(newStories.stories || [])]);
    setPagination((prevState) => ({
      ...prevState,
      page: pag.page + 1,
      isDone: newStories.stories === null,
    }));
  };

  const intersectionCallback = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !pagination.isDone && !isLoading) {
          fetchStories(storiesType, pagination);
        }
      });
    },
    [storiesType, pagination, fetcher, isLoading]
  );

  const intersectionObserverOptions = useMemo(() => {
    return {
      root: storiesRef?.current,
      threshold: 0.2,
    };
  }, [storiesRef]);

  const handleStoriesTypeChange = async (storiesType: TType) => {
    const freshPagination = { page: 1, pageSize: PAGE_SIZE, isDone: false };

    setPagination(freshPagination);
    setStories([]);
    setStoriesType(storiesType);

    fetchStories(storiesType, freshPagination);
  };

  // init intersection observer
  useEffect(() => {
    if (!storiesRef || !lastStoryRef?.current) return;

    intersectionObserver.current = new IntersectionObserver(intersectionCallback, intersectionObserverOptions);
    intersectionObserver.current?.observe(lastStoryRef.current);

    return () => {
      intersectionObserver.current?.disconnect();
    };
  }, [storiesRef, lastStoryRef, intersectionObserverOptions, intersectionCallback]);

  return (
    <Layout>
      <Head>
        <title>Hacker news</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header storiesType={storiesType} onTypeChange={handleStoriesTypeChange} />
      <div className={styles.stories} ref={storiesRef}>
        {stories.map((story, index) => (
          <Link key={story.id} href={`/stories/${story.id}`}>
            <Story
              key={story.id}
              index={index}
              totalCount={stories.length}
              story={story}
              commentsCount={story.descendants}
              ref={index === stories.length - 1 ? lastStoryRef : null}
            />
          </Link>
        ))}
      </div>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await fetch(`http://localhost:4000/v1/stories?type=${DEFAULT_TYPE}&page_size=${PAGE_SIZE}&page=1`);
  const data = await response.json();

  return {
    props: {
      ssrStories: data.stories,
    },
  };
};
