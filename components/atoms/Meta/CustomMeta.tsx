import Head from 'next/head';

interface CustomMetaProps {
  title: string;
  description: string;
  url: string;
}

export default function CustomMeta(props: CustomMetaProps) {
  const { title, description, url } = props;

  return (
    <Head>
      <title key="title">{title}</title>
      <meta key="description" name="description" content={description} />

      <meta key="og-title" property="og:title" content={title} />
      <meta
        key="og-description"
        property="og:description"
        content={description}
      />
      <meta key="og-url" property="og:url" content={url} />

      <meta key="tw-title" name="twitter:title" content={title} />
      <meta
        key="tw-description"
        name="twitter:description"
        content={description}
      />
      <meta key="tw-url" name="twitter:url" content={url} />
    </Head>
  );
}
