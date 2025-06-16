import { useLoginUser } from "../../hooks/useLoginUser";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useContext } from "react";
import { AuthContext } from "../../auth/AuthProvider";

export default function LoginForm() {
    const { user, logout } = useContext(AuthContext);
    const { mutate, data, error, isPending } = useLoginUser();

    // Validation schema with Yup
    const validationSchema = Yup.object({
        email: Yup.string().email("Invalid email").required("Email required"),
        password: Yup.string().min(8, "Min 8 characters required").required("Password required")
    });

    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: validationSchema,
        onSubmit: (data) => {
            mutate(data);
        }
    });

    return (
        <div>
            {!user ? (
                <>
                    <h2>Login Form</h2>
                    <form onSubmit={formik.handleSubmit}>
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                        />
                        {formik.touched.email && formik.errors.email && (
                            <p>{formik.errors.email}</p>
                        )}

                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                        />
                        {formik.touched.password && formik.errors.password && (
                            <p>{formik.errors.password}</p>
                        )}

                        <button type="submit">Login</button>
                    </form>
                </>
            ) : (
                <>
                    <h2>Welcome, {user.firstName}</h2>
                    <button onClick={logout}>Logout</button>
                </>
            )}
        </div>
    );
}

