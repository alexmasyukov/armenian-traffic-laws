import React from 'react';
import { useRouter } from 'next/router';
// import ErrorPage from 'next/error';
// import Container from '../../components/container';
// import PostBody from '../../components/post-body';
// import Header from '../../components/header';
// import PostHeader from '../../components/post-header';
// import Layout from '../../components/layout';
import { getRuleBySlug, getAllRules } from '../../lib/api';
// import PostTitle from '../../components/post-title';
import Head from 'next/head';
// import { CMS_NAME } from '../../lib/constants';
import markdownToHtml from '../../lib/markdownToHtml';
import type RuleType from '../../interfaces/rule';
import Link from 'next/link';

type Props = {
  rule: RuleType;
  moreRules: RuleType[];
  preview?: boolean;
};

export default function Rule({ rule, moreRules, preview }: Props) {
  const router = useRouter();
  const title = `${rule.title} | Next.js Blog Example with`;

  if (!router.isFallback && !rule?.slug) {
    return <div>div error</div>; //<ErrorPage statusCode={404} />;
  }
  return (
    // <Layout preview={preview}>
    //   <Container>
    //     <Header />
    <>
      {router.isFallback ? (
        <div>Loading…</div>
      ) : (
        <>
          <article className='mb-32'>
            <Head>
              <title>{title}</title>
              <meta property='og:image' content={rule.ogImage.url} />
            </Head>
            {/* <PostHeader
                title={rule.title}
                coverImage={rule.coverImage}
                date={rule.date}
                author={rule.author}
              /> */}
            {/* <PostBody content={rule.content} /> */}
            <div
              // className={markdownStyles['markdown']}
              dangerouslySetInnerHTML={{ __html: rule.content }}
            />
          </article>
        </>
      )}
    </>
    //   </Container>
    // </Layout>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const rule = getRuleBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ]);
  const content = await markdownToHtml(rule.content || '');

  return {
    props: {
      rule: {
        ...rule,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const rules = getAllRules(['slug']);

  return {
    paths: rules.map((rule) => {
      return {
        params: {
          slug: rule.slug,
        },
      };
    }),
    fallback: false,
  };
}
