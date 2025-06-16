import { getAllUserApi } from "../../api/admin/userApi";

export const getAllUserService = async (params) => {
    try {
        const response = await getAllUserApi(params)
        return response.data
    } catch (error) {
        console.log(error);
        throw error.response?.data || { "message": "User Fetch Fail" }
    }
}