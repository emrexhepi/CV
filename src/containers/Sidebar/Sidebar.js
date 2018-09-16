import React, { Component } from 'react';

import styles from "./Sidebar.mod.css";

// import components
import Profile from "../../components/Profile/Profile";
import Contacts from "../../components/Contacts/Contacts";

class Sidebar extends Component {
    state = {
        profile: {
            image: "https://raw.githubusercontent.com/emrexhepi/CV/gh-pages/images/picture.jpg",
            name: "Emrullah Rexhepi",
            job: "Front-end Developer"
        },
        // icon types: ['mobile', 'home', 'email', 'fax', 'skype', 'address', 'website']
        contacts: [
            {
                icon: "home",
                contact: "+383 49 901 556"
            },
            {
                icon: "email",
                contact: "em.rexhepi@gmail.com"
            },
            {
                icon: "skype",
                contact: "em.rexhepi"
            },
            {
                icon: "website",
                contact: "emrexhepi@github.io"
            },

        ]
    }
    render() {
        return (
            <div className={`col-md-12 col-sm-12 col-lg-3 ${styles.Sidebar} blue-grey lighten-4`}>
                <Profile profile={this.state.profile}/>
                <Contacts contacts={this.state.contacts}/>
            </div>
        );
    }
}

export default Sidebar;