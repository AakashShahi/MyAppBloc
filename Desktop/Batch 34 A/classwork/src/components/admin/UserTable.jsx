import { useAdminUser } from "../../hooks/admin/useAdminUser";

export default function UserTable() {
    const { data, isPending, error } = useAdminUser()

    if (isPending) return <>Laoding</>

    const EmailComponent = () => {
        return <div>
            {
                data && data.data?.map((user) => {
                    <>user?.email</>
                })
            }
        </div>
    }

    return (
        <div>
            UserTable
            {
                data && data.data?.map(
                    (user) =>
                        <>
                            {user?.username}

                        </>
                )
            }
            <EmailComponent />
        </div>
    )
}