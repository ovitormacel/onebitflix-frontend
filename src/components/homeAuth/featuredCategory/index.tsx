import useSWR from "swr";
import styles from "../../../styles/slideCategory.module.scss";
import courseService from "@/services/courseService";
import SlideComponent from "@/components/common/slideComponent";
import PageSpinner from "@/components/common/spinner";

const FeaturedCategory = () => {
    const { data, error } = useSWR("/featured", courseService.getFeaturedCourses);
    if(error) return error;
    if(!data) {return <PageSpinner/>}

    return (
        <>
            <p className={styles.titleCategory}>Destaques</p>
            <SlideComponent courses={data.data} />
        </>
    )
}

export default FeaturedCategory;