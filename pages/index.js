import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import utilStyles from "../styles/utils.module.css";
import Image from "next/image";
import Link from "next/link";
import Date from "../components/date";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I'm Tsedvee. I'm a software engineer and gamer.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      {/* Add this <section> tag below the existing <section> tag */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
      <section className={utilStyles.headingMd}>
        <p>
          За тэгээд зүгээр үзэж сурсан юмаараа нэг ийм юм хийж үзлээ. Онжого
          харж байвал "LIKE" дархаа битгий мартаарай.
        </p>
        <p>
          <a href="https://www.facebook.com/WoofWoofTV/posts/2073799783012518">
            - LIKE -
          </a>{" "}
          😊😊😊
        </p>
        <p>Hello! Knock! knock! Онжого Хаалгаа! 😊</p>
        <Image
          priority
          src="/images/3.jpg"
          className={utilStyles.borderCircle}
          height={300}
          width={300}
        />
        {/* <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p> */}
      </section>
    </Layout>
  );
}
