import api from "./api";

export type EpisodeType = {
    id: number,
    name: string,
    synopsis: string,
    order: number,
    videoUrl: string,
    secondsLong: number
}

export type CourseType = {
    id: number,
    name: string,
    thumbnailUrl: string,
    synopsis: string

    episodes?: EpisodeType[]
};

const courseService = {
    getNewestCourse: async () => {
        const res = await api.get("/courses/newest").catch((error) => {
            return error.response;
        });

        return res;
    },

    getFeaturedCourses: async () => {
        const token = sessionStorage.getItem("onebitflix-token");

        const res = await api.get("/courses/featured", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).catch((error) => {
            return error.response;
        })

        return res;
    },

    addToFav: async (courseId: number | string) => {
        const token = sessionStorage.getItem("onebitflix-token");

        const res = await api.post("/favorites", {courseId}, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).catch(error => {
            return error.response;
        });

        return res;
    },

    removeToFav: async (courseId: number | string) => {
        const token = sessionStorage.getItem("onebitflix-token");

        const res = await api.delete("/favorites", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            data: { courseId }
        }).catch(error => {
            return error.response;
        })

        return res;
    },

    getToFav: async () => {
        const token = sessionStorage.getItem("onebitflix-token");

        const res = await api.get("/favorites", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).catch(error => {
            return error.response;
        })

        return res;
    },

    getSearch: async (name: string) => {
        const token = sessionStorage.getItem("onebitflix-token");
    
        const res = await api.get(`/courses/search?name=${name}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).catch(error => {
            return error.response;
        })

        return res;
    }
}

export default courseService;