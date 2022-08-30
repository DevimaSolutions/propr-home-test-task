import Head from 'next/head';

import type { IMetaData } from './types';

const Meta = ({
  title,
  description,
  ogType,
}: IMetaData) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name='title' content={title} />
      <meta name='description' content={description} />
      <meta property='og:type' content={ogType} />
    </Head>
  );
};

Meta.defaultProps = {
  title: 'Propr Home',
  description:
    "Propr Home Test Task.",
  ogType: 'website',
};

export default Meta;
