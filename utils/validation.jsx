import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';

const AddingNewAdmin = Yup.object().shape({
    username: Yup.string().required('Username is required').min(5, "Username is too shrot - should be 5 chars minimun"),
    email: Yup.string().email().required("Email is Required"),
    password: Yup.string().required("Password is required").min(6, "Password is too short - should be 6 chars minimum"),
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    team: Yup.string().required("Team is required, Please select the team"),
})

const AddingNewCustomer = Yup.object().shape({
    username: Yup.string().required('Username is required').min(5, "Username is too shrot - should be 5 chars minimun"),
    name: Yup.string().required('First Name is required').min(3, "name is too short"),
    phone: Yup.number().required('Phone Number is required').min(5, "Phone Number is too short"),
    email: Yup.string().email().required("Email is Required"),
    password: Yup.string().required("Password is required").min(6, "Password is too short - should be 6 chars minimum"),
});

const validation = { AddingNewAdmin, AddingNewCustomer }
export default validation;