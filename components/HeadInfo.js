import Head from "next/head";
const HeadInfo = ({ title, keyword, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="keyword" contents={keyword} />
      <meta name="description" contents={description} />
    </Head>
  );
};

HeadInfo.defaultProps = {
  title: "Scalper Blog",
  keyword: "Frontend, Javascript, Next",
  description: "My Blog powered by Next.js",
};

export default HeadInfo;
