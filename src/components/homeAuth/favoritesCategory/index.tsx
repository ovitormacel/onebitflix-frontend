import useSWR from "swr";
import styles from "../../../styles/slideCategory.module.scss";
import courseService from "@/services/courseService";
import SlideComponent from "@/components/common/slideComponent";
import PageSpinner from "@/components/common/spinner";

const FavoritesCategory = () => {
    const {data, error} = useSWR("/favorites", courseService.getToFav);
    
    if(error) return error;
    if(!data) {return <PageSpinner />}
    
    return (
        <>
            <p className={styles.titleCategory}>Minha Lista</p>
            {data.data.courses.length >= 1 ? (
                <SlideComponent courses={data.data.courses} />
            ) : (
                <p className="text-center pt-3 h5">
                    <strong>Nenhum curso salvo na lista.</strong>
                </p>
            )}
        
        </>
    )
}

export default FavoritesCategory;