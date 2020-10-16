import * as yup from 'yup';

export default yup.object().shape({
    name: yup
        .string()
        .required('Please enter a username')
        .min(6, 'Name must be at least six characters'),
    email: yup
        .string()
        .required('Please enter an email address')
        .email('Please enter a valid email address'),
    password: yup
        .string()
        .required('Enter a password')
        .min(8, 'Password must be at least eight characters'),
    tos: yup
        .boolean()
        .oneOf([true], 'You must agree to the Terms of service')
}); 