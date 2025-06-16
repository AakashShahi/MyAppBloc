import { getAllProductApi } from "../../api/admin/productApi"

export const getAllProductService = async (params) => {
    try {
        const response = await getAllProductApi((params))
        return response.data
    } catch (error) {
        throw error.response?.data || { "message": "Product fetch failed" }
    }
}