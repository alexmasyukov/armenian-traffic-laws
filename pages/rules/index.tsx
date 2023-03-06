import React, { useEffect } from 'react';
// import Link from 'next/link';
// import { serialize } from 'next-mdx-remote/serialize';
// import { MDXRemote } from 'next-mdx-remote';
// // import { rules } from '../../data/rules';
// import rulesMd from '../../data/rules1.md';

// export default function Rules({ source }: { source: any }) {
//   // const [markdown, setMarkdown] = React.useState('');

//   // useEffect(() => {
//   //   fetch(rulesMd)
//   //     .then((response) => {
//   //       // return response.text();
//   //     })
//   //     .then((text) => {
//   //       // setMarkdown(text);
//   //     });
//   // }, []);

//   return (
//     <div>
//       {/* <ReactMarkdown>{markdown}</ReactMarkdown> */}
//       <MDXRemote {...source} />
//       {/* components={components}  */}

//       <br />
//       <Link href='/'>Back to home</Link>
//     </div>
//   );
// }

// import Container from '../components/container';
// import MoreStories from '../components/more-stories';
// import HeroPost from '../components/hero-post';
// import Intro from '../components/intro';
// import Layout from '../components/layout';
// import Head from 'next/head';
// import { CMS_NAME } from '../lib/constants';
import Rule from './../../interfaces/rule';
import { getAllRules } from '../../lib/api';
import Link from 'next/link';

type Props = {
  allRules: Rule[];
};

export default function Rules({ allRules }: Props) {
  // const heroRule = allRules[0];
  // const moreRules = allRules.slice(1);

  console.log(allRules);

  return (
    <>
      sdfsf
      {/* {heroRule && (
        <div>{heroRule.title}</div>
        // <HeroPost
        //   title={heroPost.title}
        //   coverImage={heroPost.coverImage}
        //   date={heroPost.date}
        //   author={heroPost.author}
        //   slug={heroPost.slug}
        //   excerpt={heroPost.excerpt}
        // />
      )} */}
      {/* <MoreStories posts={morePosts} /> */}
      {allRules.length > 0 && (
        <>
          {allRules.map((rule) => (
            <Link key={rule.slug} as={`/rules/${rule.slug}`} href='/rules/[slug]' className='hover:underline'>
              {rule.title}
            </Link>
            // <PostPreview
            //   key={post.slug}
            //   title={post.title}
            //   coverImage={post.coverImage}
            //   date={post.date}
            //   author={post.author}
            //   slug={post.slug}
            //   excerpt={post.excerpt}
            // />
          ))}
        </>
      )}
    </>
  );
}

export const getStaticProps = async () => {
  const allRules = getAllRules(['title', 'date', 'slug', 'author', 'coverImage', 'excerpt']);

  return {
    props: { allRules },
  };
};
