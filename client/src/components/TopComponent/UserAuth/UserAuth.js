import React, { Fragment, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './UserAuth.css'
import setLoggedInStatus from '../../Authorization/setLoggedInStatus'

var FontAwesome = require('react-fontawesome')



export default function UserAuth() {

    const history = useHistory();

    const [logStateText, setLogStateText] = useState(JSON.parse(localStorage.getItem('userLoggedIn')) ? 'Log out' : 'Log in');


    const handleLog = (e) => {
        if (JSON.parse(localStorage.getItem('userLoggedIn')) === true)
            history.push('/logged_in');
        else
            history.push('/authorization');
        if (e.target.textContent === 'Log out') {
            setLoggedInStatus(false);
            localStorage.removeItem('jwtToken');
            setLogStateText('Log in');
            document.querySelector('#logActionSpan').textContent = 'Log in';
            history.push('/authorization');
        }
    }
    const clickIcon = () => {
        if (JSON.parse(localStorage.getItem('userLoggedIn')) === true)
            history.push('/logged_in');
        else
            history.push('/authorization');
    }

    return (
        <Fragment>
            {/* <Link style={{ 'textDecoration': 'none', 'color': 'black' }} to={JSON.parse(localStorage.getItem('userLoggedIn')) ? '/logged_in' : '/authorization'}> */}
            <div className='userauth-container'>
                {/* <i onClick={clickIcon} className="fas fa-user"></i> */}
                <FontAwesome
                    onClick={clickIcon}
                    name="user"
                    className='fa-user-icon'
                />
                <span onClick={(e) => handleLog(e)} id='logActionSpan'>{JSON.parse(localStorage.getItem('userLoggedIn')) ? 'Log out' : 'Log in'}</span>
            </div>
            {/* </Link> */}
        </Fragment>

    )
}
