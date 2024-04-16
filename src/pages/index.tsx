import styles from "../styles/HomeNoAuth.module.scss";

import Head from "next/head"
import HeaderNoAuth from "@/components/homeNoAuth/headerNoAuth";
import PresentationSection from "@/components/homeNoAuth/presentationSection";
import CardsSection from "@/components/homeNoAuth/cardsSection";
import SlideSection from "@/components/homeNoAuth/slideSection";
import { GetStaticProps } from "next";
import courseService, { CourseType } from "@/services/courseService";
import { ReactNode, useEffect } from "react";
import Footer from "@/components/common/footer";
import Aos from "aos";
import "aos/dist/aos.css";

interface IndexPageProps {
  children?: ReactNode,
  courses: CourseType[]
}

const HomeNoAuth = ({courses}: IndexPageProps) => {
  
  useEffect(() => {
    Aos.init();
  }, [])

  return (
    <>
      <Head>
        <title>OneBitFlix</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
        <meta property="og:title" content="OneBitFlix" key="title" />
        <meta name="description" content="A melhor plataforma de cursos de programação. Venha conhecer!"/>
      </Head>

      <main>
        <div className={styles.sectionBackground} data-aos="fade-zoom-in" data-aos-duration="1600">
          <HeaderNoAuth />
          <PresentationSection />
        </div>

        <div data-aos="fade-right" data-aos-duration="1200">
          <CardsSection/>
        </div>

        <div data-aos="fade-up" data-aos-duration="1350">
          <SlideSection newestCourses={courses}/>
        </div>
        
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