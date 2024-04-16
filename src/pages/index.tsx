import styles from "../styles/HomeNoAuth.module.scss";

import Head from "next/head"
import HeaderNoAuth from "@/components/homeNoAuth/headerNoAuth";
import PresentationSection from "@/components/homeNoAuth/presentationSection";
import CardsSection from "@/components/homeNoAuth/cardsSection";
import SlideSection from "@/components/homeNoAuth/slideSection";
import { GetStaticProps } from "next";
import courseService, { CourseType } from "@/services/courseService";
import { ReactNode } from "react";
import Footer from "@/components/common/footer";

interface IndexPageProps {
  children?: ReactNode,
  courses: CourseType[]
}

const HomeNoAuth = ({courses}: IndexPageProps) => {
  return (
    <>
      <Head>
        <title>OneBitFlix</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
        <meta property="og:title" content="OneBitFlix" key="title" />
        <meta name="description" content="A melhor plataforma de cursos de programação. Venha conhecer!"/>
      </Head>

      <main>
        <div className={styles.sectionBackground}>
          <HeaderNoAuth />
          <PresentationSection />
        </div>
        <CardsSection />
        <SlideSection newestCourses={courses} />
        <Footer />
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await courseService.getNewestCourse();

  return {
    props: {
      courses: res.data
    },
    // Atualiza a cada 24h
    revalidate: 3600 * 24
  }
};

export default HomeNoAuth;