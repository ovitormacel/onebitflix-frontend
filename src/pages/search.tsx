import Head from "next/head";
import styles from "../styles/search.module.scss";
import HeaderAuth from "@/components/common/headerAuth";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import courseService, { CourseType } from "@/services/courseService";
import SearchCard from "@/components/searchCard";
import { Container } from "reactstrap";
import Footer from "@/components/common/footer";

const Search = () => {
    const router = useRouter();
    const searchName: any = router.query.name;

    const [searchResults, setSearchResults] = useState<CourseType[]>([]);

    const searchCourses = async () => {
        if(typeof searchName === "string"){
            const res = await courseService.getSearch(searchName);

            setSearchResults(res.data.courses);
        }
    };

    useEffect(() => {
        searchCourses();
    }, [searchName])
    
    return (
        <>
            <Head>
                <title>{searchName} - OneBitFlix</title>
                <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
            </Head>

            <main className={styles.main}>
                <div className={styles.headFooterBg}>
                    <HeaderAuth />
                </div>
                {searchResults.length >= 1 ? (
                    <div className={styles.searchResult}>
                        <Container className="d-flex flex-wrap justify-content-center gap-5 py-4">
                            {searchResults?.map((course) => (
                                <SearchCard course={course}/>
                            ))}
                        </Container>
                    </div>
                ) : (
                    <p className={styles.noSearchResult}>Nenhum curso encontrado</p>
                )}

                <div className={styles.headFooterBg}>
                    <Footer />
                </div>
            </main>
        </>
    )
}

export default Search;