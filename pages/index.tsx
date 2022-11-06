import Head from 'next/head';
import { useState } from 'react';
import Layout from '../components/Layout/Layout';
import Title from '../components/Title/Title';
import Tags from '../components/Tags/Tags';
import { TAGS } from '../components/Tags/constants';
import type { TTag, ITag } from '../components/Tags/types';

export default function Home() {
  const [selectedTag, setSelectedTag] = useState<TTag>('best');

  const handleTagClick = (tag: ITag) => {
    setSelectedTag(tag.id);
  };

  return (
    <Layout>
      <Head>
        <title>Hacker news</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Title text="Hacker news" />
      <Tags tags={TAGS} selectedTag={selectedTag} onClick={handleTagClick} />
    </Layout>
  );
}
