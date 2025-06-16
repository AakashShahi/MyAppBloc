import { keepPreviousData, useQuery } from "@tanstack/react-query";

//useQuery -> GEt resquest states

import { useState } from "react";
import { getAllUserService } from "../../services/admin/userServices";

export const useAdminUser = () => {
    const query = useQuery(
        {
            queryKey: ["admin_users"],// keys ad variable to reapply query
            queryFn: () => {
                return getAllUserService(
                    {
                        page: 1,
                        limit: 5
                    }
                )
            },
            keepPreviousData: true// cache data
        }
    )

    return {
        ...query
    }
}
