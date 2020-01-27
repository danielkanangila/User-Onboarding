import React, {useEffect} from 'react';
import Cookies from 'js-cookie';

export default function Logout({history}) {

    useEffect(() => {
        Cookies.remove('myAdmin');
        history.push('/')

        return []
    }, [])

    return <></>
}