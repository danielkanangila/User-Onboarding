import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 0 auto;
    color: #212121;
    ${props => (props.___class === 'app' ? 
        `
            padding-top: 90px;
            @media (min-width: 875px) {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
            }
            @media (min-width: 1024px) {
                width: 80%;
            }
        `
        : null
    )}
`;

/** Heading Text */

export const H1 = styled.h1`
    font-size: 1.6rem;
`;

export const H2 = styled.h2`
    margin-top: -15px;
    font-size: 1rem;
`

export const Heading = props => {
    if (props.component === 'h1') return <H1>{props.children}</H1>;
    if (props.component === 'h2') return <H2>{props.children}</H2>;
}

export const Logo  = styled.h1`
    margin: 0;
    font-family: 'Fredoka One', cursive;
    font-size: 1.8rem;
    letter-spacing: -2px;
    color: #495057;
`

export const Button = styled.button`
    padding: 12px 25px;
    transition: all .3s;
    text-transform: uppercase;
    font-size: 12px;
    border-radius: 5px;

    ${props => (props.type === 'primary' ?
        `
        background-color: #2196F3;
        color: #ffffff;
        :hover {
            background-color: #3282b8;
        }
        `
        : null
    )}
`;

export const ClearFix = styled.div`
    
    ${props => (props.px ?
        `
        padding: ${props.px}
        `
        : `padding: 5px 0;`
    )}
`;

export const Icon = styled.i`
    margin-right: 5px;
`;

export const TextField = styled.input`
    width: 100%;
    position: absolute;
    left: 0;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    :focus {
        border: 2px solid #339AF0;
    }
`; 

export const Label = styled.label`
    display: block;
    padding: 15px 0px 1px 5px;
    text-transform: uppercase;
    font-size: 0.7rem;

`;

export const TextFieldWrapper = styled.div`
    position: relative;
    margin-bottom: 30px;
    ${props => (props.width ?
        `
        width: ${props.width};
        `
        : null
    )}
`;

export const Divider = styled.div`
    display: block;
    content: ' ';
    border-bottom: 1px solid #ccc;
    width: 100%;
`;

export const Grid = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

/** checkbox */

const CheckboxContainer = styled.label`
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 14px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    transition: all .3s;

    a {
        text-decoration: none;
        color: #2196F3;
        transition: all .3s;
        :hover {
            text-decoration: underline;
        }
    }

    :hover input ~ span {
        background-color: #eeeeee;
    }

    input:checked ~ span {
        background-color: #2196F3;
    }

    input:checked ~ span:after {
        display: block;
    }
`;

const CheckboxInput = styled.input`
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
`;

const Checkmark = styled.span`
    position: absolute;
    bottom: 0;
    left: 0;
    height: 22px;
    width: 22px;
    border: 1px solid #ccc;
    border-radius: 5px;

    :after {
        content: "";
        position: absolute;
        display: none;
        left: 7px;
        top: 4px;
        width: 4px;
        height: 9px;
        border: solid #ffffff;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }
`;

export const Checkbox = (props => (
    <CheckboxContainer>{props.children}
        <CheckboxInput
            id={props.field}
            onChange={props.formik.handleChange} 
            value={props.formik[props.field]} 
            type="checkbox" />
        <Checkmark></Checkmark>
    </CheckboxContainer>
));

/** Select */

const SelectWrapper = styled.div`
    position: relative;
    display: block;
    border: 1px solid #ccc;
    border-radius: 5px;

    :after {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        content: "\\25BC";
        font-size: 12px;
        padding: 8.5px 15px;
        border-left: 1px solid #ccc;
        color: grey;
        pointer-events: none;
        transition: all .3s;
    } 

    :hover::after {
        background-color: #eee;
    }
`

export const Option = styled.option`

`;

export const SelectField = styled.select`
    -webkit-appearance: none; 
    -moz-appearance: none; 
    -ms-appearance: none; 
    appearance: none; 
    width: 100%;
    height: 100%;
    padding: 10px 15px 10px 10px;
    ::-ms-expand {
        display: none;
    }
`;
export const Select = (props => (
    <SelectWrapper>
        <SelectField id={props.field} value={props.formik.values[props.field]} onChange={props.formik.handleChange}>
            {props.children}
        </SelectField>
    </SelectWrapper>
))

/** Errors */
export const Error = styled.span`
    display: block;
    font-size: 0.85rem;
    color: red;
    margin-left: 5px;
    margin-bottom: 5px;
`;