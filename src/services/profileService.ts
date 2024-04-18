import api from "./api";

interface UserParams {
    firstName: string,
    lastName: string,
    phone: string,
    email: string,
    created_at: string
}

const profileService = {
    fetchCurrent: async () => {
        const token = sessionStorage.getItem("onebitflix-token");

        const res = await api.get("/account", {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }).catch(error => {
            return error.response
        })

        return res.data;
    },

    updateProfile: async (params: UserParams) => {
        const token = sessionStorage.getItem("onebitflix-token");

        const res = await api.put("/account", params, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }).catch(error => {
            if(error.response.status === 400 || error.response.status === 401){
                return error.response
            }

            return error;
        });

        return res.status;
    },
}

export default profileService;