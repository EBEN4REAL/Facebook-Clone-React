import React  from 'react'
import './SideBar.css';
import SidebarRow from './sidebarRow';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import pics from '../img/Eben.jpg';

const Sidebar =  () =>  {
    return (
        <div className="sidebar">
            <SidebarRow src={pics} title="Eben" />
            <SidebarRow Icon={LocalHospitalIcon} title="Covid-19 Information Center" />
            <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
            <SidebarRow Icon={PeopleIcon} title="Friends" />
            <SidebarRow Icon={ChatIcon}  title="Messenger" />
            <SidebarRow Icon={StorefrontIcon} title="Marketplace" />

            <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
            <SidebarRow Icon={ExpandMoreOutlinedIcon}  title="Marketplace"  />
        </div>
    )
}

export default Sidebar;