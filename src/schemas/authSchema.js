import * as Yup from 'Yup';

// sign in
export const validationLoginSchema = Yup.object({
    email: Yup.string().email().required("Email is Required").trim(),
    password: Yup.string().required("Password is Required").trim(),
})

// signup

export const initialSignupValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    civic: "",
    street: "",
    city: "",
    province: "",
    postalCode: "",
    accountType: "",
    goal: [],
    duration: ""
}

export const validationSignupSchema = Yup.object({
    firstName: Yup.string().required("First Name is Required").trim(),
    lastName: Yup.string().required("Last Name is Required").trim(),
    email: Yup.string().email().required("Email is Required").trim(),
    password: Yup.string().required('Please enter your password.')
    .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
    confirmPassword: Yup.string().required('Please retype your password.').oneOf([Yup.ref('password')], 'Your passwords do not match.'),
    civic: Yup.string().required("Civic is Required").trim(),
    street: Yup.string().required("Street is Required").trim(),
    city: Yup.string().required("City is Required").trim(),
    province: Yup.string().required("Province is Required").trim(),
    postalCode: Yup.string().required("Postal Code is Required").trim(),
    accountType: Yup.string().required("Account Type is Required").trim(),
    goal: Yup.array().of(Yup.string().required('Goal is required')).min(1, 'Select at least one Goal'),
    duration: Yup.string().required("Duration is Required").trim(),
})