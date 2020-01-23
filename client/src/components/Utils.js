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

export const Logo  = styled.h1`
    margin: 0;
    font-family: 'Fredoka One', cursive;
    font-size: 1.8rem;
    letter-spacing: -2px;
    color: #495057;
`

export const Button = styled.button`
    padding: 10px 15px;
    transition: all .3s;
    text-transform: uppercase;
    font-size: 10px;

    ${props => (props.type === 'danger' ? 
        `background-color: red;
         border-radius: 0 5px 5px 0;
         border: 1px solid red;
         color: white;
         :hover {
             background-color: #BA112E;
             border-color: #BA112E;
         }
        `
        : null
    )};
    ${props => ((props.type === 'edit' || props.type === 'primary') ?
        `border-radius: 5px 0px 0 5px;
         border: 1px solid rgba(0,0,0,0.4);
         border-right: none;
         color: rgba(0,0,0,0.5);
         :hover {
            background: #ccc;
            color: #000;
        }
        `
        : null
    )};
    ${props => (props.type === 'primary' ?
        `
        margin-top: 15px;
        border-radius: 5px;
        border-right: 1px solid rgba(0,0,0,0.4);
        `
        : null
    )}
`;

export const ClearFix = styled.div`
    padding: 5px 0;
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
        border: 1px solid #339AF0;
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
`;