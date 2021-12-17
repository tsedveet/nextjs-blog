import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I'm Tsedvee. I'm a software engineer and gamer.</p>
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
        <p>Hello! Knock! knock! Хаалгаа! 😊</p>
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
