import React from 'react';
import { useField } from 'formik';
import styles from "./auth.module.scss"
const CustomInput = ({ ...props }) => {
    const [field, meta] = useField(props);

    return (
        <div>

            <input
                {...field} {...props}
                className={meta.touched && meta.error ? styles.inputerror : "dfltFormField"}
            />
            {meta.touched && meta.error && (
                <div className={styles.errorMsg}>{meta.error}</div>
            )}
        </div>
    );
};

export default CustomInput;