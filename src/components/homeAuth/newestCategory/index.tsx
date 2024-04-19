import styles from "../../../styles/slideCategory.module.scss";
import SlideComponent from "@/components/common/slideComponent";
import PageSpinner from "@/components/common/spinner";
import courseService from "@/services/courseService";
import useSWR from "swr";

const NewestCategory = () => {
    const {data, error} = useSWR("/newest", courseService.getNewestCourse);
    
    if(error) return error;
    if(!data) {return <PageSpinner />}
    
    return (
        <>
            <p className={styles.titleCategory}>Lançamentos</p>
            <SlideComponent courses={data.data}/>
        </>
    )
}

export default NewestCategory;