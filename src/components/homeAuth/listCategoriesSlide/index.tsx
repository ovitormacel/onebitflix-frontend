import categoriesService, { CategoryType } from "@/services/categoriesService";
import useSWR from "swr";
import styles from "../../../styles/slideCategory.module.scss";
import SlideComponent from "@/components/common/slideComponent";
import PageSpinner from "@/components/common/spinner";

interface props {
    categoryId: number,
    categoryName: string
}

const ListCategoriesSlide = ({ categoryId, categoryName }: props) => {
    const {data, error} = useSWR(`/listCourses/${categoryId}`, () => categoriesService.getCourses(categoryId));
    
    if(error) return error;
    if(!data) {return <PageSpinner />}
    
    return (
        <>
            <p className={styles.titleCategory}>{categoryName}</p>
            <SlideComponent courses={data.data.courses} />
        </>
    )
}

export default ListCategoriesSlide;