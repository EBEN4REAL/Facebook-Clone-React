import React  from 'react'
import './sidebarRow.css';
import {Avatar} from '@material-ui/core';
import {useStateValue} from '../StateProvider';
import firebase from 'firebase';
import {actionTypes} from '../reducer';

const SidebarRow =  ({src, Icon, title}) =>  {
    const [{user}, dispatch] = useStateValue()
    const signOut = () => {
        firebase.auth().signOut().then(function() {
            dispatch({
                type: actionTypes.SET_USER,
                user: null
            })
        }, function(error) {

        });
    }
    return (
        <div className="sidebarRow" onClick={() =>signOut() }>
           {src && <Avatar src={src} /> }
           {Icon && <Icon /> }

           <h4>{title}</h4>
        </div>
    )
}

export default SidebarRow;