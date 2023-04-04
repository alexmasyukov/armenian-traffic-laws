import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import BaseLayout from '../layouts/BaseLayout/BaseLayout';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <BaseLayout>
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>

        <h1 className='text-3xl font-bold underline'>Hello world!</h1>

        <Link href='/questions-on-the-topics'>Вопросы по темам</Link>
        <Link href='/rules'>Правила дорожного движения</Link>
        <br />
        <Link href='/pdd-1'>1</Link>
        <br />
        <Link href='/pdd-2'>2</Link>
        <br />
        <Link href='/pdd-3'>3</Link>
        <br />
        <Link href='/pdd-4'>4</Link>
        <br />
        <Link href='/pdd-5'>5</Link>
        <br />
        <Link href='/pdd-6'>6</Link>
        <br />
        <Link href='/pdd-7'>7</Link>
        <br />
        <Link href='/pdd-8'>8</Link>
        <br />
        <Link href='/pdd-9'>9</Link>

        <style jsx>{`
          main {
            padding: 5rem 0;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          footer {
            width: 100%;
            height: 100px;
            border-top: 1px solid #eaeaea;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          footer img {
            margin-left: 0.5rem;
          }
          footer a {
            display: flex;
            justify-content: center;
            align-items: center;
            text-decoration: none;
            color: inherit;
          }
          code {
            background: #fafafa;
            border-radius: 5px;
            padding: 0.75rem;
            font-size: 1.1rem;
            font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
              Bitstream Vera Sans Mono, Courier New, monospace;
          }
        `}</style>
      </div>
    </BaseLayout>
  );
}
