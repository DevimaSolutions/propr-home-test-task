import Head from "next/head";

import type { IMetaProps } from "./types";

const Meta = ({
  title = "Propr Home",
  description = "Propr Home Test Task.",
  ogType = "website",
}: IMetaProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta property="og:type" content={ogType} />
    </Head>
  );
};

export default Meta;
