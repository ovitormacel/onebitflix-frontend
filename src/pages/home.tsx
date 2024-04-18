import FavoritesCategory from "@/components/homeAuth/favoritesCategory";
import FeaturedCategory from "@/components/homeAuth/featuredCategory";
import FeaturedSection from "@/components/homeAuth/featuredSection";
import NewestCategory from "@/components/homeAuth/newestCategory";
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
                <NewestCategory />
                <FavoritesCategory />
                <FeaturedCategory />
            </main>
        </>
    )
}

export default HomeAuth;