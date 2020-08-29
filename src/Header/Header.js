import React  from 'react'
import './Header.css';
import Logo from '../img/Facebook_f_logo_(2019).svg';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleOutlinedIcon from '@material-ui/icons/SupervisedUserCircleOutlined';
import {Avatar} from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Header =  () =>  {
    return (
        <div className="header">
            <div class="header__left">
                <img src={Logo} />
                <div class="header__input">
                    <SearchIcon />
                    <input type="text" />
                </div>
            </div>
            <div class="header__center">
                <div class="header__option">
                    <HomeIcon />
                </div>
                <div class="header__option">
                    <FlagIcon />
                </div>
                <div class="header__option">
                    <SubscriptionsOutlinedIcon />
                </div>
                <div class="header__option">
                    <StorefrontOutlinedIcon />
                </div>
                <div class="header__option">
                    <StorefrontOutlinedIcon />
                </div>
                <div class="header__option">
                    <SupervisedUserCircleOutlinedIcon />
                </div>
            </div>
            <div class="header__right">
                <div className="header__info">
                    <Avatar />
                    <h4>Eben</h4>
                    <IconButton>
                        <AddIcon />
                    </IconButton>
                    <IconButton>
                        <ForumIcon />
                    </IconButton>
                    <IconButton>
                        <NotificationsActiveIcon />
                    </IconButton>
                    <IconButton>
                        <ExpandMoreIcon />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default Header;