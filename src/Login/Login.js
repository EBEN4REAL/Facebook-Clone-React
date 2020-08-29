import React  from 'react'
import './Login.css';
import Logo from '../img/Facebook_f_logo_(2019).svg';
import LogoText from '../img/Facebook_Logo_(2019).svg';
import { Button } from '@material-ui/core';
import {auth, provider} from '../firebase';
import {useStateValue} from "../StateProvider";
import {actionTypes} from '../reducer';

const Login =  () =>  {
    const [state, dispatch] = useStateValue()
    const signIn = () => {
        auth.signInWithPopup(provider)
            .then(res => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: res.user
                })
            }).catch((error) => alert(error.message));
    }
    return (
        <div className="login">
            <div className="login__logo">
                <img src={Logo} />
                <img src={LogoText} width="150px" />
            </div>
            <Button type="submit" onClick={signIn}>
                Sign In 
            </Button>
        </div>
    )
}

export default Login;