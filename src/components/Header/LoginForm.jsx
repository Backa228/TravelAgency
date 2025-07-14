import styles from './LoginForm.module.css'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useId, useState } from 'react'
import * as Yup from 'yup'
import { IoEyeSharp, IoEyeOffSharp } from "react-icons/io5";

const FeedbackSchema = Yup.object().shape({
    email: Yup.string().email("Must be a valid email!").required("Required"),
    password: Yup.string().min(6, "Too short").max(256, "Too long").required("Required"),
})

const initialValues = {
    email: "",
    password: ""
}

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false)

    const handleSubmit = (values, actions) => {
        console.log(values)
        actions.resetForm()
    }

    const emailFieldId = useId()
    const passwordFieldId = useId()

    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={FeedbackSchema}>
        <Form className={styles.form}>
            <label htmlFor={emailFieldId} className={styles.label}>Email Address</label>
            <Field id={emailFieldId} type="email" name="email" className={styles.field}></Field>
            <ErrorMessage name="email" component="span" className={styles.error}/>

            <label htmlFor={passwordFieldId} className={styles.label}>Password</label>
                <Field id={passwordFieldId} type={showPassword ? "text" : "password"} name="password" className={styles.field}></Field>
                <button type="button" onClick={() => setShowPassword(prev => !prev)} className={styles.eye}>
                    {showPassword ? <IoEyeSharp size={24} color='#ADADAD' /> : <IoEyeOffSharp size={24} color='#ADADAD'/>} 
                </button>
            <ErrorMessage name="password" component="span" className={styles.error}/>

            <button type="submit" className={styles.btn}>Submit</button>
        </Form>
      </Formik>
    )
}
export default LoginForm