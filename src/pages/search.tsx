import Head from "next/head";
import styles from "../styles/search.module.scss";
import HeaderAuth from "@/components/common/headerAuth";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import courseService, { CourseType } from "@/services/courseService";

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

            <main>
                <HeaderAuth />
                {searchResults?.map((course) => (
                    <div key={course.id}>
                        <p>{course.name}</p>
                    </div>
                ))}
            </main>
        </>
    )
}

export default Search;