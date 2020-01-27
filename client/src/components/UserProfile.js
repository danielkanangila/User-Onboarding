import React from 'react';
import styled from 'styled-components';
import { Button } from './ui-components';
const Main = styled.div`
    position: relative;
    width: 100%;
`

const CoverImage = styled.div`
    position: absolute;
    background-color: #ccc;
    top: -50px;
    left: 0;
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -1;
    i {
        font-size: 80px;
        color: #495057;
    }
`

const ProfileImage = styled.div`
    background-color: #ccc;
    width: 175px;
    height: 175px;
    border-radius: 50%;
    font-size: 120px;
    color: #495057;
    margin-top: 50px;
    margin-left: 15px;
    z-index: 200;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ButtonWrapper = styled.div`
    position: absolute;
    top: 170px;
    right: 0px;
`

const TextWrapper = styled.div`
    .role {
        padding: 5px 0
    }
    i {
        padding: 0 7px;
    }
    padding-bottom: 20px;
    border-bottom: 1px solid #ccc;
`

const UserProfile  = ({user}) => {
    return(
        <Main>
            <CoverImage>
                <i className="fa fa-image"></i>
            </CoverImage>

            <ProfileImage>
                <i className="fa fa-user"></i>
            </ProfileImage>
            <ButtonWrapper>
                <Button type="primary">Edit profile</Button>
            </ButtonWrapper>
            <TextWrapper>
                <h2>{user.firstName} {user.lastName}</h2>
                
                <p className="role">Role: {user.role}</p>
                <address>
                    <p>
                        {user.address1}
                        <i className="fa fa-map-marker-alt"></i>
                        {user.city}
                    </p>
                    <p>{user.phone}</p> 
                </address>
            </TextWrapper>

        </Main>
    )
}

export default UserProfile;