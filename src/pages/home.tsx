import FeaturedSection from "@/components/homeAuth/featuredSection";
import Head from "next/head"

const HomeAuth = () => {
    return (
        <>
            <Head>
                <title>Home - OneBitFlix</title>
                <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
            </Head>

            <main>
                <FeaturedSection />
            </main>
        </>
    )
}

export default HomeAuth;