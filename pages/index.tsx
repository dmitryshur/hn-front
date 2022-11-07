import Head from 'next/head';
import { useState } from 'react';
import Layout from '../components/Layout/Layout';
import { Header } from '../components/Header/Header';
import { TType } from '../components/Header/types';
import styles from './index.module.scss';

const STORY = {
  by: 'metadat',
  descendants: 573,
  id: 33330864,
  score: 1463,
  time: 1666707915,
  title: "My dad's resume and skills from 1980",
  url: 'https://github.com/runvnc/dadsresume',
};

export default function Home() {
  const [storiesType, setStoriesType] = useState<TType>('best');

  return (
    <Layout>
      <Head>
        <title>Hacker news</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header storiesType={storiesType} onTypeChange={setStoriesType} />
    </Layout>
  );
}
