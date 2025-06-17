import { keepPreviousData, useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { getAllCategoryService, createOneCategoryService, getOneCategoryService, updateOneCategoryService } from "../../services/admin/categoryService";
import { toast } from "react-toastify";

export const useAdminCategory = () => {
    const query = useQuery(
        {
            queryKey: ["admin_category"],
            queryFn: () => getAllCategoryService()
        }
    )
    const categories = query.data?.data || []
    return {
        ...query,
        categories
    }
}

export const useCreateCategory = () => {
    const queryClient = useQueryClient()
    return useMutation(
        {
            mutationKey: ["admin_create_category"],
            mutationFn: createOneCategoryService,
            onSuccess: () => {
                queryClient.invalidateQueries("admin_category")
            }// refetch get query
        }
    )
}

export const useGetOneCategory = (id) => {
    const query = useQuery(
        {
            queryKey: ["admin_category_detail", id],
            queryFn: () => getOneCategoryService(id),
            enabled: !!id,// id is not null or undefined
            retry: false// tries 3 times default
        }
    )
    const category = query.data?.data || {}
    return {
        ...query,
        category
    }
}

//id="123"-> !!id=true
// id = unndefiend  -> !!id = false
export const useUpdateOneCategory = () => {
    const queryClient = useQueryClient()
    return useMutation(
        {
            mutationFn: ({ id, data }) => updateOneCategoryService(id, data),
            mutationKey: ["admin_category_update"],
            onSuccess: () => {
                toast.success("Category Updated")
                queryClient.invalidateQueries("admin_category_detail")
            },
            onError: (err) => {
                toast.error(err.message || "Update Failed")
            }
        }
    )
}



