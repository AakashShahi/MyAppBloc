import { getAllCategoryApi, createOneCategoryApi, getOneCategoryApi, updateOneCategoryApi } from "../../api/admin/categoryApi"

export const getAllCategoryService = async () => {
    try {
        const response = await getAllCategoryApi()
        return response.data
    } catch (error) {
        throw error.response?.data || { message: "Failed to fetch" }
    }
}

export const createOneCategoryService = async (data) => {
    try {
        const response = await createOneCategoryApi(data)
        return response.data
    } catch (error) {
        throw error.response?.data || { message: "Failed to create" }
    }
}

export const getOneCategoryService = async (id) => {
    try {
        const respone = await getOneCategoryApi(id);
        return respone.data
    } catch (error) {
        throw error.response?.data || { message: "Failed to load" }
    }


}

export const updateOneCategoryService = async (id, data) => {
    try {
        const respone = await updateOneCategoryApi(id, data);
        return respone.data
    } catch (error) {
        throw error.response?.data || { message: "Failed to update" }
    }
}