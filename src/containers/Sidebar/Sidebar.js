import React, { Component } from 'react';

import styles from "./Sidebar.mod.css";

// import components
import Profile from "../../components/Profile/Profile";

class Sidebar extends Component {
    render() {
        return (
            <div className={`col-md-12 col-sm-12 col-lg-3 ${styles.Sidebar} blue-grey lighten-4`}>
                <Profile />
            </div>
        );
    }
}

export default Sidebar;