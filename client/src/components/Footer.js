import React from 'react';
import styled from 'styled-components';
import { Logo } from './Utils';

const Wrapper = styled.div`
    display: block;
    background: #1d1e1e;
    text-align: center;
    padding: 50px 0;
    margin-top: 100px;
    width: 100%;
`

const Footer = () => {
    return(
        <Wrapper>
            <Logo>
                myAdmin
            </Logo>
        </Wrapper>
    )
}

export default Footer;