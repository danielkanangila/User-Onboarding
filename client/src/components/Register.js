import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useFormik } from 'formik';
import { 
    TextField, 
    Label, 
    TextFieldWrapper, 
    Button,
    Icon,
    ClearFix,
    Heading,
    Divider,
    Grid,
    Checkbox,
    Select,
    Option
} from './ui-components';

const FormWrapper = styled.form`
    @media (min-width: 875px) {
        width: 46%;
        margin: 0 auto;
    }
`

const useStyle = {
    select: {
        width: '160px',
        display: 'block',
    },
    selectState: {
        width: '38%',
        margin: '0 12px 0px 32px'
    }
}

const RegisterForm = (props) => {

    const [roles, setRoles] = useState([]);
    const [stateList, setStateList] = useState([]);

    useEffect(() => {
        setRoles(["Select user role", ...props.data.userRoles]);
        setStateList([{name: "Select state", abbreviation: ""}, ...props.data.stateList])
    }, [])

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
            <Heading component="h1">New User</Heading>
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
            <ClearFix px="0px" />
            <div style={classes.select}>
                <Label>User Role</Label>
                <Select>
                    {roles.map((role, index) => <Option key={index} value={role}>
                        {`${role[0].toUpperCase()}${role.slice(1)}`}
                    </Option>)}
                </Select>
            </div>

            <ClearFix px="20px" />

            <Heading component="h2">Contacts</Heading>
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
            <Grid style={classes.addressGird}>
                <TextFieldWrapper width="33%">
                    <Label htmlFor="city">City</Label>
                    <TextField 
                        name="city"
                        value={formik.values.city}
                        type="text"
                        placeholder="Ex. Mebane"
                        onChange={formik.handleChange} />
                </TextFieldWrapper>
                <div style={classes.selectState}>
                    <Label>State</Label>
                    <Select>
                        {stateList.map((state, index) => <Option key={index} value={state.abbreviation}>
                        {state.abbreviation}{state.abbreviation ? ' - ' : ''}{state.name}
                        </Option>)}
                    </Select>
                </div>
                <TextFieldWrapper width="20%">
                    <Label htmlFor="zipCode">Zip code</Label>
                    <TextField 
                        name="zupCode"
                        value={formik.values.zipCode}
                        type="text"
                        placeholder="00000"
                        onChange={formik.handleChange} />
                </TextFieldWrapper>
            </Grid>
            <TextFieldWrapper width="150px">
                <Label htmlFor="phone">phone (US only)</Label>
                <TextField 
                    name="phone"
                    value={formik.values.phone}
                    type="text"
                    placeholder="(704) - 889 - 4536"
                    onChange={formik.handleChange} />
            </TextFieldWrapper>
            <ClearFix px="15px" />
            <Checkbox>
                <a href="/#">
                    Terms of Service
                </a>
            </Checkbox>
            <ClearFix px="8px" />

            <Button type="primary" role="submit">
                Register
            </Button>
        </FormWrapper>
    )
}

export default RegisterForm;