import React from 'react'
import { useUpdateOneCategory, useGetOneCategory } from '../../hooks/admin/useAdminCategory'
import { useParams } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from "yup"
import { getBackendImageUrl } from '../../utils/backend-image'

export default function UpdateCategory() {
    const { id } = useParams()

    const categoryHooks = useGetOneCategory(id)
    const updateCategoryHook = useUpdateOneCategory()


    // const {data,error}=useGetOneCategory()
    // const {data:updateData,error:updateError}=useGetOneCategory()
    const validationSchema = Yup.object(
        {
            name: Yup.string().required("Name Required"),
            image: Yup.mixed()
                .nullable()
                .test(
                    "fileSize",
                    "File too large",
                    (value) => !value || value.size <= 5 * 1024 * 1024 // 5MB in bytes
                )
        }
    )

    const formik = useFormik(
        {
            enableReinitialize: true,// allows state chnage in get 
            initialValues: {
                name: categoryHooks.category?.name || "",
                image: ""

            },
            validationSchema,
            onSubmit: (values) => {
                const formData = new FormData()
                formData.append("name", values.name)
                if (values.image) formData.append("image", values.image)
                updateCategoryHook.mutate(
                    { id, data: formData },
                    {
                        onSuccess: () => {
                            formik.resetForm()
                        }
                    }
                )
            }

        }
    )

    if (categoryHooks.isPending) <>Loading..</>
    if (categoryHooks.error) <>Error..</>
    if (!categoryHooks.category) <>No category found</>

    return (
        <div>
            UpdateCategory
            <br />
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <label>Name</label>
                    <input
                        name='name'
                        onChange={formik.handleChange}
                        value={formik.values.name}>

                    </input>
                </div>
                <div>
                    <label>Image</label>
                    <input
                        name='image'
                        type='file'
                        accept='image/*'
                        onChange={(e) => {
                            const file = e.currentTarget.files[0]//selected first file
                            console.log(file);
                            if (file) formik.setFieldValue("image", file)// for file use setFieldValue
                        }}
                    >
                    </input>
                </div>
                {formik.values.image ?
                    <img src={URL.createObjectURL(
                        formik.values.image
                    )}></img>
                    : categoryHooks.category?.filepath ? <img src={getBackendImageUrl(categoryHooks.category?.filepath)}></img> : null
                }

                <button type='submit'>Update</button>
            </form>

        </div>
    )
}
