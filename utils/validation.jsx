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

const validation = { AddingNewAdmin }
export default validation;