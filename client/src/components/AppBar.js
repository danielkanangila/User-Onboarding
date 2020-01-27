import React from 'react';
import styled from 'styled-components';
import { Container, Logo } from './ui-components';
import { NavLink } from 'react-router-dom';

const Wrapper = styled.div`
    position: fixed;
    width: 100%;
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

const MenuText = styled.div`
    font-size: 0.557rem;
    text-transform: uppercase;
    
    a {
        display: block;
        text-decoration: none;
        color: #000000;
        padding: 20px 20px;
        transition: ease-in .3s;

        :hover {
            text-decoration: underline;
        }
    }
`

const RightMenuItems = styled.div`
    display: flex;
    flex-direction: row;
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

    me: {
        padding: "10px 0"
    }
}

const UserIcon = styled.i`
    color: rgba(0,0,0,0.5);
    font-size: 1.6rem;
    transition: all .3s;
    :hover {
        color: rgba(0,0,0,0.7);
    }
`

const AppBar = ({isLogged}) => {
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
                {isLogged &&  
                    <MenuItemIcon>
                    <MenuText>
                        <NavLink exact to="/logout">
                            Logout
                        </NavLink>
                    </MenuText>
                </MenuItemIcon> 
                }
                {!isLogged &&  
                    <RightMenuItems>
                        <MenuItemIcon>
                            <MenuText>
                                <NavLink exact to="/login">
                                    Login
                                </NavLink>
                            </MenuText>
                        </MenuItemIcon> 
                        <MenuItemIcon>
                            <MenuText>
                                <NavLink to="/register">
                                    Register
                                </NavLink>
                            </MenuText>
                        </MenuItemIcon> 
                    </RightMenuItems>
                }
            </Container>
        </Wrapper>
    )
}

export default AppBar;