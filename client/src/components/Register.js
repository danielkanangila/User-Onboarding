import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useFormik } from 'formik';
import * as Yup from 'yup';
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
    Option,
    Error
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
    },
    errors: {
        marginTop: '37px'
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
            termOfService: false,
        },

        validationSchema: Yup.object().shape({
            firstName: Yup.string()
                .min(3)
                .required(),
            lastName: Yup.string()
                .min(3)
                .required(),
            email: Yup.string()
                .email()
                .required(),
            password: Yup.string()
                .min(8)
                .required(),
            confirmPassword: Yup.string()
                .when('password', {
                    is: value => (value && value.length > 0 ? true : false),
                    then: Yup.string().oneOf(
                        [Yup.ref('password')],
                        "Both password must be the same."
                    )
                })
                .required(),
            address1: Yup.string()
                .min(8)
                .required(),
            city: Yup.string()
                .required(),
            state: Yup.string()
                .required(),
            zipCode: Yup.number()
                .max(5)
                .required(),
            role: Yup.string()
                .required(),
            termOfService: Yup.string()
                .required(),
        }),
    
        handleSubmit(values) {
            console.log(values)
        },
    
    });

    return(
        <FormWrapper onSubmit={formik.handleSubmit}>
            <Heading component="h1">New User</Heading>
            <TextFieldWrapper>
                <Label htmlFor="firstName">First Name</Label>
                {formik.touched.firstName && formik.errors.firstName &&
                    <Error>
                        {formik.errors.firstName}
                    </Error>
                }
                <TextField 
                    name="firstName"
                    value={formik.values.firstName}
                    type="text"
                    placeholder="Dan"
                    onChange={formik.handleChange} />
            </TextFieldWrapper>
            <TextFieldWrapper>
                <Label htmlFor="lastName">Last Name</Label>
                {formik.touched.lastName && formik.errors.lastName &&
                    <Error>
                        {formik.errors.lastName}
                    </Error>
                }
                <TextField 
                    name="lastName"
                    value={formik.values.lastName}
                    type="text"
                    placeholder="Joe"
                    onChange={formik.handleChange} />
            </TextFieldWrapper>
            <TextFieldWrapper>
                <Label htmlFor="email">Email</Label>
                {formik.touched.email && formik.errors.email &&
                    <Error>
                        {formik.errors.email}
                    </Error>
                }
                <TextField 
                    name="email"
                    value={formik.values.email}
                    type="email"
                    placeholder="dan.joe@example.com"
                    onChange={formik.handleChange} />
            </TextFieldWrapper>
            <TextFieldWrapper>
                <Label htmlFor="password">Password</Label>
                {formik.touched.password && formik.errors.password &&
                    <Error>
                        {formik.errors.password}
                    </Error>
                }
                <TextField 
                    name="password"
                    value={formik.values.password}
                    type="password"
                    placeholder="*******"
                    onChange={formik.handleChange} />
            </TextFieldWrapper>
            <TextFieldWrapper>
                <Label htmlFor="confirmPassword">Confirm your password</Label>
                {formik.touched.confirmPassword && formik.errors.confirmPassword &&
                    <Error>
                        {formik.errors.confirmPassword}
                    </Error>
                }
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
                {formik.touched.role && formik.errors.role &&
                    <Error>
                        {formik.errors.role}
                    </Error>
                }
                <Select field="role" formik={formik}>
                    {roles.map((role, index) => <Option key={index} value={role}>
                        {`${role[0].toUpperCase()}${role.slice(1)}`}
                    </Option>)}
                </Select>
            </div>

            <ClearFix px="20px" />

            <Heading component="h2">Contacts</Heading>
            <TextFieldWrapper>
                <Label htmlFor="address1">Address line 1</Label>
                {formik.touched.address1 && formik.errors.address1 &&
                    <Error>
                        {formik.errors.address1}
                    </Error>
                }
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
                    {formik.touched.city && formik.errors.city &&
                        <Error style={classes.errors}>
                            {formik.errors.city}
                        </Error>
                    }
                </TextFieldWrapper>
                <div style={classes.selectState}>
                    <Label>State</Label>
                    <Select field="state" formik={formik}>
                        {stateList.map((state, index) => <Option key={index} value={state.abbreviation}>
                        {state.abbreviation}{state.abbreviation ? ' - ' : ''}{state.name}
                        </Option>)}
                    </Select>
                    {formik.touched.state && formik.errors.state &&
                        <Error>
                            {formik.errors.state}
                        </Error>
                    }
                </div>
                <TextFieldWrapper width="20%">
                    <Label htmlFor="zipCode">Zip code</Label>
                    <TextField 
                        name="zipCode"
                        value={formik.values.zipCode}
                        type="text"
                        placeholder="00000"
                        onChange={formik.handleChange} />
                    {formik.touched.zipCode && formik.errors.zipCode &&
                        <Error style={classes.errors}>
                            {formik.errors.zipCode}
                        </Error>
                    }
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
            <Checkbox field="termOfService" formik={formik}>
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