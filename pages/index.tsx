import Head from 'next/head';
import { useState } from 'react';
import Layout from '../components/Layout/Layout';
import { Header } from '../components/Header/Header';
import { Story } from '../components/Story/Story';
import { TType } from '../components/Header/types';
import styles from './index.module.scss';

const STORIES = [
  {
    by: 'metadat',
    descendants: 573,
    id: 33330864,
    score: 1463,
    time: 1666707915,
    title: "My dad's resume and skills from 1980",
    url: 'https://github.com/runvnc/dadsresume',
  },
  {
    by: 'metadat',
    descendants: 573,
    id: 33330865,
    score: 1463,
    time: 1666707915,
    title: "My dad's resume and skills from 1980",
    url: 'https://github.com/runvnc/dadsresume',
  },
  {
    by: 'metadat',
    descendants: 573,
    id: 33330866,
    score: 1463,
    time: 1666707915,
    title: "My dad's resume and skills from 1980",
    url: 'https://github.com/runvnc/dadsresume',
  },
  {
    by: 'metadat',
    descendants: 573,
    id: 33330867,
    score: 1463,
    time: 1666707915,
    title: "My dad's resume and skills from 1980",
    url: 'https://github.com/runvnc/dadsresume',
  },
  {
    by: 'metadat',
    descendants: 573,
    id: 33330868,
    score: 1463,
    time: 1666707915,
    title: "My dad's resume and skills from 1980",
    url: 'https://github.com/runvnc/dadsresume',
  },
  {
    by: 'metadat',
    descendants: 573,
    id: 33330864,
    score: 1463,
    time: 1666707915,
    title: "My dad's resume and skills from 1980",
    url: 'https://github.com/runvnc/dadsresume',
  },
  {
    by: 'metadat',
    descendants: 573,
    id: 33330865,
    score: 1463,
    time: 1666707915,
    title: "My dad's resume and skills from 1980",
    url: 'https://github.com/runvnc/dadsresume',
  },
  {
    by: 'metadat',
    descendants: 573,
    id: 33330866,
    score: 1463,
    time: 1666707915,
    title: "My dad's resume and skills from 1980",
    url: 'https://github.com/runvnc/dadsresume',
  },
  {
    by: 'metadat',
    descendants: 573,
    id: 33330867,
    score: 1463,
    time: 1666707915,
    title: "My dad's resume and skills from 1980",
    url: 'https://github.com/runvnc/dadsresume',
  },
  {
    by: 'metadat',
    descendants: 573,
    id: 33330868,
    score: 1463,
    time: 1666707915,
    title: "My dad's resume and skills from 1980",
    url: 'https://github.com/runvnc/dadsresume',
  },
  {
    by: 'metadat',
    descendants: 573,
    id: 33330864,
    score: 1463,
    time: 1666707915,
    title: "My dad's resume and skills from 1980",
    url: 'https://github.com/runvnc/dadsresume',
  },
  {
    by: 'metadat',
    descendants: 573,
    id: 33330865,
    score: 1463,
    time: 1666707915,
    title: "My dad's resume and skills from 1980",
    url: 'https://github.com/runvnc/dadsresume',
  },
  {
    by: 'metadat',
    descendants: 573,
    id: 33330866,
    score: 1463,
    time: 1666707915,
    title: "My dad's resume and skills from 1980",
    url: 'https://github.com/runvnc/dadsresume',
  },
  {
    by: 'metadat',
    descendants: 573,
    id: 33330867,
    score: 1463,
    time: 1666707915,
    title: "My dad's resume and skills from 1980",
    url: 'https://github.com/runvnc/dadsresume',
  },
  {
    by: 'metadat',
    descendants: 573,
    id: 33330868,
    score: 1463,
    time: 1666707915,
    title: "My dad's resume and skills from 1980",
    url: 'https://github.com/runvnc/dadsresume',
  },
  {
    by: 'metadat',
    descendants: 573,
    id: 33330864,
    score: 1463,
    time: 1666707915,
    title: "My dad's resume and skills from 1980",
    url: 'https://github.com/runvnc/dadsresume',
  },
  {
    by: 'metadat',
    descendants: 573,
    id: 33330865,
    score: 1463,
    time: 1666707915,
    title: "My dad's resume and skills from 1980",
    url: 'https://github.com/runvnc/dadsresume',
  },
  {
    by: 'metadat',
    descendants: 573,
    id: 33330866,
    score: 1463,
    time: 1666707915,
    title: "My dad's resume and skills from 1980",
    url: 'https://github.com/runvnc/dadsresume',
  },
  {
    by: 'metadat',
    descendants: 573,
    id: 33330867,
    score: 1463,
    time: 1666707915,
    title: "My dad's resume and skills from 1980",
    url: 'https://github.com/runvnc/dadsresume',
  },
  {
    by: 'metadat',
    descendants: 573,
    id: 33330868,
    score: 1463,
    time: 1666707915,
    title: "My dad's resume and skills from 1980",
    url: 'https://github.com/runvnc/dadsresume',
  },
];

export default function Home() {
  const [storiesType, setStoriesType] = useState<TType>('best');
  const storiesCount = STORIES.length;

  return (
    <Layout>
      <Head>
        <title>Hacker news</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header storiesType={storiesType} onTypeChange={setStoriesType} />
      <div className={styles.stories}>
        {STORIES.map((story, index) => (
          <Story
            key={story.id}
            index={index}
            totalCount={storiesCount}
            story={story}
            commentsCount={story.descendants}
          />
        ))}
      </div>
    </Layout>
  );
}
