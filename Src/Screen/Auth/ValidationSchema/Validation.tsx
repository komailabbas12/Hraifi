import * as yup from 'yup';

export const SIgnUpinitialstate = {
    email: '',
    password: '',
    confirmpassword: '',
    Provider: '',
    UserName: '',
    FirstName: '',
    LastName: '',
    Address: '',
    PhoneNumber: '',
    gender: '',
    city: "",
    file: {}
}

export const SignupvalidationSchema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup
        .string()
        .min(8, ({ min }) => `Password must be at least ${min} characters`)
        .required('Password is required'),
    confirmpassword: yup.string().required('Confirm Password is required').oneOf([yup.ref('password')], 'Passwords does not match'),
    Provider: yup.string().required('Provider is required'),
    UserName: yup.string().required('UserName is required'),
    FirstName: yup.string().required('First Name is required'),
    LastName: yup.string().required('Last Name is required'),
    file: yup.object().required('file is required'),
    Address: yup.string().required('Address is required'),
    city: yup.string().required('Select the city'),
    gender: yup.string().required('Select the Gender'),
    PhoneNumber: yup.number().required('Phone Number is required'),
});

export const LoginvalidationSchema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().required('Password is required'),
});

export const Searchinitialstate = {
    keyword: "",
    city: "",
    category: ""
}

export const SearchvalidationSchema = yup.object().shape({
    keyword: yup.string().required('Enter the keyword'),
    city: yup.string().required('Select the city'),
    category: yup.string().required('Select the category'),
});