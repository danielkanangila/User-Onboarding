import React, { useState } from 'react';
import styled from 'styled-components';
import { useFormik } from 'formik';
import { 
    TextField, 
    Label, 
    TextFieldWrapper, 
    Button,
    Icon,
    ClearFix,
    TitleH1,
    TitleH2,
    Divider,
    Grid
} from './ui-components';

const FormWrapper = styled.form`
    @media (min-width: 875px) {
        width: 45%;
        margin: 0 auto;
    }
`

const useStyle = {
}

const RegisterForm = (props) => {

    const [states, setStates] = useState([]);
    const [roles, setRoles] = useState([]);

    const classes = useStyle;

    const formik = useFormik({

        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
            address1: "",
            address2: "",
            city: "",
            state: '',
            zipCode: "",
            phone: "",
            role: "",
            isTSChecked: false,
        },
    
        handleSubmit(values) {
            console.log(values)
        },
    
    });

    return(
        <FormWrapper onSubmit={formik.handleSubmit}>
            <TitleH1 component="h1">New User</TitleH1>
                <TextFieldWrapper>
                    <Label htmlFor="firstName">First Name</Label>
                    <TextField 
                        name="firstName"
                        value={formik.values.firstName}
                        type="text"
                        placeholder="Dan"
                        onChange={formik.handleChange} />
                </TextFieldWrapper>
                <TextFieldWrapper>
                    <Label htmlFor="lastName">Last Name</Label>
                    <TextField 
                        name="lastName"
                        value={formik.values.lastName}
                        type="text"
                        placeholder="Joe"
                        onChange={formik.handleChange} />
                </TextFieldWrapper>
                <TextFieldWrapper>
                    <Label htmlFor="email">Email</Label>
                    <TextField 
                        name="email"
                        value={formik.values.email}
                        type="email"
                        placeholder="dan.joe@example.com"
                        onChange={formik.handleChange} />
                </TextFieldWrapper>
                <TextFieldWrapper>
                    <Label htmlFor="password">Password</Label>
                    <TextField 
                        name="password"
                        value={formik.values.password}
                        type="password"
                        placeholder="*******"
                        onChange={formik.handleChange} />
                </TextFieldWrapper>
                <TextFieldWrapper>
                    <Label htmlFor="confirmPassword">Confirm your password</Label>
                    <TextField 
                        name="confirmPassword"
                        value={formik.values.confirmPassword}
                        type="password"
                        placeholder="*******"
                        onChange={formik.handleChange} />
                </TextFieldWrapper>
                <ClearFix px="20px" />
                <Divider />
                <ClearFix />
                <TitleH2>Contacts</TitleH2>
                <TextFieldWrapper>
                    <Label htmlFor="address1">Address line 1</Label>
                    <TextField 
                        name="address1"
                        value={formik.values.address1}
                        type="text"
                        placeholder="Ex. 1108 Martin Dr, NY 21059"
                        onChange={formik.handleChange} />
                </TextFieldWrapper>
                <TextFieldWrapper>
                    <Label htmlFor="address2">Address line 2</Label>
                    <TextField 
                        name="address2"
                        value={formik.values.address2}
                        type="text"
                        placeholder="Ex. 1109 Hwy 199 St, MI 28005"
                        onChange={formik.handleChange} />
                </TextFieldWrapper>
                <TextFieldWrapper width="150px">
                    <Label htmlFor="phone">phone</Label>
                    <TextField 
                        name="phone"
                        value={formik.values.phone}
                        type="text"
                        placeholder="(704) - 889 - 4536"
                        onChange={formik.handleChange} />
                </TextFieldWrapper>
        </FormWrapper>
    )
}

export default RegisterForm;