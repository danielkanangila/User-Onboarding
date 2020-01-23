import React from 'react';
import styled from 'styled-components';
import { Container, Logo } from './ui-components';

const Wrapper = styled.div`
    position: fixed;
    width: 100%;
    padding: 15px 0;
    border-bottom: 1px solid #ccc;
    background: #ffff;
    z-index: 1000;
`

const MenuItemIcon = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

const MenuText = styled.span`
    font-size: 0.55rem;
    text-transform: uppercase;
`

const styles = {
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    icon: {
        fontSize: '1.7rem'
    },
}

const UserIcon = styled.i`
    color: rgba(0,0,0,0.5);
    font-size: 1.6rem;
    transition: all .3s;
    :hover {
        color: rgba(0,0,0,0.7);
    }
`

const AppBar = () => {
    const classes = styles;
    return(
        <Wrapper>
            <Container style={classes.container}>
                <MenuItemIcon>
                    <i style={classes.icon} className="fas fa-bars"></i>
                    <MenuText>
                        Menu
                    </MenuText>
                </MenuItemIcon>
                <Logo>
                    myAdmin
                </Logo>
                <MenuItemIcon>
                    <UserIcon className="fas fa-user-circle"></UserIcon>
                    <MenuText>
                        Me
                    </MenuText>
                </MenuItemIcon>
            </Container>
        </Wrapper>
    )
}

export default AppBar;